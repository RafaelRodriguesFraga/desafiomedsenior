import React, { useState } from "react";
import {
  Button,
  Card,
  TextField,
  CardContent,
  FormControl,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";

import { Link, Redirect } from "react-router-dom";

import api from "../../services/api";
import useStyles from "./style";
import medseniorLogo from "../../assets/medsenior-logo-primary.png";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const classes = useStyles();

  const entrar = async (event) => {
    event.preventDefault();

    if (email === "" && senha === "") {
      setErroEmail("Campo obrigatório");     
      setErroSenha("Campo obrigatório");     
      return;
    } else {
      setErroEmail("");
      setErroSenha("");
    }

    if(email === "") {
      setErroEmail("Campo obrigatório"); 
      return;
    }

    if(senha === "") {
      setErroSenha("Campo obrigatório"); 
      return;
    }

    try {
      const response = await api.post("/autenticar", {email, senha});

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        setAutenticado(true);
      }
    } catch (error) {
      const { erro } = error.response.data;
      setErroEmail(erro);
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card}>
        <img
          src={medseniorLogo}
          alt="Medsenior Logo"
          className={classes.medseniorLogo}
        ></img>

        <Typography className={classes.titulo}>Entrar</Typography>

        <form className={classes.form} onSubmit={entrar}>
          <FormControl fullWidth className={classes.input}>
            <TextField
              error={erroEmail ? true : false}
              label="Email"
              variant="filled"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              helperText={erroEmail}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </FormControl>

          <FormControl fullWidth className={classes.input}>
            <TextField
              error={erroSenha ? true : false}
              label="Senha"
              variant="filled"
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              helperText={erroSenha}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <IconButton
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    edge="end"
                  >
                    {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </FormControl>

          <Typography>
            Não possui conta ainda?{" "}
            <Link to={"/registrar"} className={classes.registrar}>
              Registre-se aqui
            </Link>
          </Typography>

          <CardActions>
            <Button className={classes.botao} type="submit">
              Entrar
            </Button>

            {autenticado ? <Redirect to="/home" /> : ""}
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};
export default Login;
