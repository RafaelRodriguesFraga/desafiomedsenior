import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { Link } from "react-router-dom";
import medseniorLogo from "../../assets/medsenior-logo-primary.png";

import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import api from "../../services/api";

const Home = () => {
  const classes = useStyles();
  const [autorizado, setAutorizado] = useState("");
  const [erro, setErro] = useState("");

  const logout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const home = async () => {
      try {
        const user_token = localStorage.getItem("token");

        await api.get("/home", {
          headers: {
            Authorization: user_token ? `Bearer ${user_token}` : "",
          },
        });

        setAutorizado(true);
      } catch (error) {
        setAutorizado(false);
        const { erro } = error.response.data;

        setErro(erro);
      }
    };
    home();
  }, []);

  return (
    <Card className={classes.card}>
      {autorizado ? (
        <>
          <CardContent className={classes.conteudo}>
            <img
              src={medseniorLogo}
              alt="Medsenior Logo"
              className={classes.medseniorLogo}
            ></img>

            <Typography className={classes.saudacao}>Bem-Vindo!</Typography>

            <Typography className={classes.textoFiliado}>
              Agora você é um filiado!
            </Typography>

            <Typography className={classes.mensagem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              neque accumsan consequat, posuere dolor, arcu nisl nunc
              pellentesque. Euismod consequat massa aenean penatibus sed viverra
              sit enim. Mattis arcu at dolor pulvinar ultricies euismod duis
              mattis. Volutpat phasellus turpis enim odio. Vitae auctor morbi mi
              purus in at neque accumsan, fermentum. Ultrices placerat malesuada
              porta arcu ipsum faucibus. Quam proin at lorem amet enim nibh
              luctus eu. Sagittis ut adipiscing consectetur in est porta mollis
              in. Vitae in faucibus tellus amet neque, imperdiet.
              <br /> Leo tellus diam dui augue morbi sed.
            </Typography>
          </CardContent>

          <CardActions className={classes.acoes}>
            <Link to={"/"} className={classes.acao} onClick={logout}>
              Logout
            </Link>
          </CardActions>
        </>
      ) : (
        <>
          <CardContent className={classes.conteudo}>
            <img
              src={medseniorLogo}
              alt="Medsenior Logo"
              className={classes.medseniorLogo}
            ></img>

            <Alert severity="error">
              Não Autorizado! <br />
              {erro}
            </Alert>
          </CardContent>

          <CardActions className={classes.acoes}>
            <Link to={"/"} className={classes.acao}>
              Voltar
            </Link>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default Home;
