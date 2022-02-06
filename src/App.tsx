import { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateTemplate } from "templates";
import { HOME, DOCUMENT, NOT_FOUND } from "./router/routes";

const Home = lazy(() => import("./views/Home"));
const Document = lazy(() => import("./views/Document"));
const NotFound = lazy(() => import("./views/NotFound"));

/**
 * App's main router.
 */
function App() {
  return (
    <BrowserRouter>
      <PrivateTemplate>
        <Suspense fallback={<span>carregando...</span>}>
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={DOCUMENT} component={Document} />
            <Route path={NOT_FOUND} component={NotFound} />
          </Switch>
        </Suspense>
      </PrivateTemplate>
    </BrowserRouter>
  );
}

export default App;
