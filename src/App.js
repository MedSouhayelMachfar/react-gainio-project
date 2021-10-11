import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tournaments from "./pages/Tournaments";
import TournamentDetails from "./pages/TournamentDetails";

import Games from "./pages/Games";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/tournaments/:id">
          <TournamentDetails />
        </Route>
        <Route path="/tournaments">
          <Tournaments />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
