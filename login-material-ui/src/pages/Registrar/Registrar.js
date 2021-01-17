import React, { useState } from "react";
import useStyles from "./style";
import medseniorLogo from "../../assets/medsenior-logo-primary.png";
import api from "../../services/api";

import {
  Button,
  Card,
  TextField,
  CardContent,
  FormControl,
  Typography,
  CardActions,
  IconButton
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Registrar = ({ history }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const cadastrar = async (event) => {
    event.preventDefault();

    if (email === "" || senha === "") {
      setErroEmail("Campo obrigatório");
      setErroSenha("Campo obrigatório");
      return;
    } else {
      setErroEmail("");
    }

    if (senha.length < 6) {
      setErroSenha("A senha deve conter no mínimo 6 caracteres");
      return;
    } else {
      setErroSenha("");
    }

    if (confirmarSenha !== senha) {
      setErroSenha("As senhas não coincidem");
      return;
    } else {
      setErroSenha("");
    }

    try {
      const response = await api.post("/registrar", { email, senha });

      const { token } = response.data;

      localStorage.setItem("token", token);

      history.push("/home");
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

        <Typography className={classes.titulo}>Novo registro</Typography>

        <form className={classes.form} onSubmit={cadastrar}>
          <FormControl fullWidth className={classes.input}>
            <TextField
              error={erroEmail ? true : false}
              label="Email"
              variant="filled"
              type="email"
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

          <FormControl fullWidth className={classes.input}>
            <TextField
              label="Confirmar Senha"
              variant="filled"
              type={mostrarSenha ? "text" : "password"}
              value={confirmarSenha}
              onChange={(event) => setConfirmarSenha(event.target.value)}
              InputProps={{
                disableUnderline: true,  
              }}
            />
          </FormControl>

          <CardActions>
            <Button className={classes.botao} type="submit">
              Registrar-se
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default Registrar;
