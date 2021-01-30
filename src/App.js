import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import QnA from "./components/QnA";
import qnaAd from "./images/QnA Advertisement.jpg";

function App(props) {
  const { chosenTopic } = props;
  console.log(chosenTopic);
  return (
    <div className="ui grid">
      <div className="ui row">
        <Navbar />
      </div>
      <div className="ui row">
        <Banner />
      </div>
      <div className="ui three wide column">
        <Sidebar />
      </div>
      <div className="ui ten wide column">
        <QnA chosenTopic={chosenTopic} />
      </div>
      <div className="ui three wide column">
        <img src={qnaAd}></img>
      </div>
    </div>
  );
}

export default App;
