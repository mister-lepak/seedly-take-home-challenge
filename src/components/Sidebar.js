import { Link } from "react-router-dom";

const Sidebar = ({ topics }) => {
  const renderTopic = () => {
    if (!topics) return <></>;
    return topics.map((topic) => {
      return (
        <article className="item">
          <Link to={"/topic/" + topic.name}>{topic.name}</Link>
        </article>
      );
    });
  };

  return (
    <aside className="ui vertical menu">
      <Link className="item" to="/">
        All Content
      </Link>
      <section className="item">
        <h1>My Topics</h1>
        <p>Have a topic in mind?</p>
        <p>Follow some topics and they'll show up here.</p>
        <button className="ui circular basic button">
          <i className="icon compass " />
          Discover Topics
        </button>
      </section>
      <section className="item">
        <h2>Featured Topic</h2>
        <section className="menu">{renderTopic()}</section>
      </section>
    </aside>
  );
};

export default Sidebar;
