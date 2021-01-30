import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { topics } = props;

  const renderTopic = () => {
    if (!topics) return <></>;
    return topics.map((topic) => {
      return (
        <div className="item">
          <Link to={"/" + topic.name}>{topic.name}</Link>
        </div>
      );
    });
  };

  return (
    <div className="ui vertical menu">
      <Link className="item" to="/">
        All Content
      </Link>
      <div className="item">
        <h1>My Topics</h1>
        <p>Have a topic in mind?</p>
        <p>Follow some topics and they'll show up here.</p>
        <button className="ui basic button">
          <i className="icon compass " />
          Discover Topics
        </button>
      </div>
      <div className="item">
        <h2>Featured Topic</h2>
        <div className="menu">{renderTopic()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
