const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({erro: "Nenhum token informado"});
    }

    //Separar a palavra Bearer do token em si
    const partes = authHeader.split(" ");

    if (!partes.length === 2) {
        return res.status(401).json({erro: "Erro! Verifique se não está faltando alguma parte do Token"})
    }

    const [scheme, token] = partes;

    /*
        / = começar ou terminar a regex
        ^ = inicio da verificacao
        $ = final da verificacao
        i = case insensitive
     */
    const validaToken = /^Bearer$/i.test(scheme);

    if (!validaToken) {
        return res.status(401).json({erro: "Token mal formatado"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).json({erro: "Token inválido"});
        }

        /*
            Como no AuthController passamos o user.id
            como um dos parametros para gerar o token
            podemos recuperar ele aqui com a variavel
            decoded
         */
        req.userId = decoded.id;

        return next();
    });
}