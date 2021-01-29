import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import QnA from "./components/QnA";

function App() {
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
        <QnA />
      </div>
    </div>
  );
}

export default App;
