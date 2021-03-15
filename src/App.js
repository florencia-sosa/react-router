import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Usuarios />
        </Route>
        <Route path="/usuario/:id">
          <Header />
          <Usuario />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
