import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: 360,
    height: "100%",
    maxHeight: 640,
    border: 1,
  },  

  conteudo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  medseniorLogo: {
    width: "170px",
    marginBottom: 50,
  },

  saudacao: {
    color: "#006631",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 15,
    marginLeft: 20,
  },

  textoFiliado: {
    marginLeft: 20,
    alignSelf: "flex-start",
    fontSize: 15,
    color: "#858585",
    marginBottom: 15,
  },

  mensagem: {
    color: "#858585",
    fontSize: 12,
    margin: "0 20px",
    lineHeight: 2,
    textAlign: "justify",
    marginBottom: 20,
  },

  acoes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  acao: {
    textDecoration: "none",
    color: "#eb5757",
    marginRight: 20,
    textTransform: "uppercase",   
  },
});

export default useStyles;
