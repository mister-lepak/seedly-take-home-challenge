import { BrowserRouter, Switch, Route } from "react-router-dom";
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
          component={() => <App chosenTopic={topic.name} />}
        />
      );
    });
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={() => <App chosenTopic="" />} />
        {topicsRoutes()}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
