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
});

export default useStyles;
