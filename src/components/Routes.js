import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route exact path="/topic/:topicName" component={App} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
