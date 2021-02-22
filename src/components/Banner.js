import indexCSS from "../css/index.css";

const Banner = ({ topics, chosenTopic }) => {
  let displayHeader = "Let's Talk Finance";
  let displaySubHeader =
    "Ask for opinions and get answers from other Singaporeans.";

  if (chosenTopic !== "") {
    if (!topics) return <></>;
    const foundTopic = topics.find((topic) => topic.name === chosenTopic);
    displayHeader = foundTopic.name;
    displaySubHeader = foundTopic.content;
  }
  return (
    <>
      <header className="banner ui sixteen wide column center aligned">
        <h1>{displayHeader}</h1>
        <h3>{displaySubHeader}</h3>
        <button className="ui circular primary basic button">
          Ask Question
        </button>
      </header>
    </>
  );
};

export default Banner;
