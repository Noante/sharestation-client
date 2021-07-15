import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HOME } from "./router/routes";
import Home from "./views/Home/Home";

/**
 *
 * @returns
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* // TODO: use lazy loading */}
        <Route exact path={HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
