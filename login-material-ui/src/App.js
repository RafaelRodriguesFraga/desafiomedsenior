import useStyles from "./style";
import Routes from "./routes.js";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.card}>        
        <Routes />
      </div>
    </div>
  );
}

export default App;
