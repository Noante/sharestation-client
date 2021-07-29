import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HOME, FILE, NOT_FOUND } from "./router/routes";
import Home from "./views/Home/Home";
import File from "./views/File/File";
import NotFound from "./views/NotFound/NotFound";

/**
 * App's main router.
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* // TODO: use lazy loading */}
        <Route exact path={HOME} component={Home} />
        <Route exact path={FILE} component={File} />
        <Route path={NOT_FOUND} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
