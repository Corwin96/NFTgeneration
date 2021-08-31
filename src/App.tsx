import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Router>
  )
}
