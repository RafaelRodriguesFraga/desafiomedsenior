const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

function gerarToken(parametros = {}) {
   return jwt.sign(parametros, authConfig.secret,
   {
      expiresIn: 86400 // em segundos. 1 dia
   }
)};

module.exports = {
   async registrar(req, res) {
      const {email} = req.body;

      try {
         let user = await User.findOne({email});

         if (!user) {
            user = await User.create(req.body);

            user.senha = undefined;
         } else {
            return res.status(400).json({erro: "Email já cadastrado"});
         }

         return res.status(201).json({user, token: gerarToken({id: user.id})});
      } catch (err) {
         const {name, message} = err;
         return res.status(400).json({name, message});
      }
   },

   async autenticar(req, res) {
      try {
         const {email, senha} = req.body;

         const user = await User.findOne({email}).select("+senha");

         if (!user) {
            return res.status(400).json({erro: "Usuário não encontrado"});
         }

         const compararSenha = await bcrypt.compare(senha, user.senha);

         if (!compararSenha) {
            return res.status(400).json({erro: "Senha inválida"});
         }

         user.senha = undefined;

         return res.send({user, token: gerarToken({id: user.id})});

      } catch (err) {
         const {name, message} = err;
         return res.status(400).json({name, message});
      }
   },
};
