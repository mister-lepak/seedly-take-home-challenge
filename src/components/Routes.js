import { HashRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "../App";

const Routes = () => {
  const [topics, setTopics] = useState();

  const getTopics = () => {
    fetch("models/topics.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopics(data);
      });
  };

  useEffect(() => {
    getTopics();
  }, []);

  if (!topics) return <></>;
  const topicsRoutes = () => {
    return topics.map((topic) => {
      return (
        <Route
          exact
          path={"/" + topic.name}
          component={() => <App chosenTopic={topic.name} topics={topics} />}
        />
      );
    });
  };
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path={"/"}
          component={() => <App chosenTopic="" topics={topics} />}
        />
        {topicsRoutes()}
      </Switch>
    </HashRouter>
  );
};

export default Routes;
