import bannerPicture from "../images/banner_default.svg";
import indexCSS from "../css/index.css";

const Banner = (props) => {
  const { topics, chosenTopic } = props;
  let displayHeader = "Let's Talk Finance";
  let displaySubHeader =
    "Ask for opinions and get answers from other Singaporeans.";

  if (chosenTopic !== "") {
    topics.map((topic) => {
      if (chosenTopic === topic.name) {
        displayHeader = topic.name;
        displaySubHeader = topic.content;
      }
    });
  }
  return (
    <>
      <header className="banner ui sixteen wide column center aligned">
        <h1>{displayHeader}</h1>
        <h3>{displaySubHeader}</h3>
        <button className="ui primary basic button">Ask Question</button>
      </header>
    </>
  );
};

export default Banner;
