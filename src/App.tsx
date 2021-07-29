import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HOME, DOCUMENT, NOT_FOUND } from "./router/routes";
import Home from "./views/Home/Home";
import Document from "./views/Document/Document";
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
        <Route exact path={DOCUMENT} component={Document} />
        <Route path={NOT_FOUND} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
