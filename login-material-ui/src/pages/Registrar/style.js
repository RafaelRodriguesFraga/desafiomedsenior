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
    alignItems: "center",
    width: "100%",
    maxWidth: "360px",
    height: "100%",
    maxHeight: "640px",
    border: 1,    
  },

  medseniorLogo: {
    width: 170,
    display: "flex",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    color: "#219653",
    marginTop: 50,
    fontSize: 20,
    marginBottom: 20,
  },

  form: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  input: {
    marginBottom: 20,
    width: 330,
  },
 
  botao: {
    backgroundColor: "#006631",
    color: "#FFF",
    marginTop: "50px",

    "&:hover": {
      backgroundColor: "#219653",
    },
  },
});

export default useStyles;
