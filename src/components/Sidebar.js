import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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

  const renderTopic = () => {
    if (!topics) return <></>;
    return topics.map((topic, index) => {
      return (
        <div className="item">
          <a href={"/" + topic.name}>{topic.name}</a>
        </div>
      );
    });
  };

  return (
    <div className="ui vertical menu">
      <a className="item" href="/">
        All Content
      </a>
      <div className="item">
        <h1>My Topics</h1>
        <p>Have a topic in mind?</p>
        <p>Follow some topics and they'll show up here.</p>
        <button>Discover Topics</button>
      </div>
      <div className="item">
        <h2>Featured Topic</h2>
        <div className="menu">{renderTopic()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
