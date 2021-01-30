import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import QnA from "./components/QnA";
import Footer from "./components/Footer";
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
      <div id="sidebar" className="ui three wide column">
        <Sidebar topics={topics} />
      </div>
      <div id="qna" className="ui centered eleven wide column">
        <QnA chosenTopic={chosenTopic} />
      </div>
      <div id="advertisement" className="ui two wide column"></div>
      <Footer />
    </div>
  );
}

export default App;
