import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import QnA from "./components/QnA";
import indexCSS from "./css/index.css";

function App(props) {
  const { chosenTopic, topics } = props;
  return (
    <div className="ui grid">
      <div className="ui row">
        <Navbar />
      </div>
      <div className="ui row">
        <Banner chosenTopic={chosenTopic} topics={topics} />
      </div>
      <div className="ui three wide column">
        <Sidebar topics={topics} />
      </div>
      <div className="ui ten wide column">
        <QnA chosenTopic={chosenTopic} />
      </div>
      <div className="advertisement ui three wide column"></div>
    </div>
  );
}

export default App;
