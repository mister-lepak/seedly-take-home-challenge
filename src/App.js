import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import QnA from "./components/QnA";
import Footer from "./components/Footer";
import indexCSS from "./css/index.css";
import { useEffect, useState } from "react";

function App({ match }) {
  let {
    params: { ...chosenTopic },
  } = match;
  if (!chosenTopic.topicName) {
    chosenTopic = { topicName: "" };
  }

  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState();
  const [users, setUsers] = useState();
  const [topics, setTopics] = useState();

  const getQuestions = () => {
    fetch("models/questions.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      });
  };

  const getAnswers = () => {
    fetch("models/answers.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnswers(data);
      });
  };

  const getUsers = () => {
    fetch("models/users.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const getTopics = () => {
    fetch("models/topics.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopics(data);
      });
  };

  useEffect(() => {
    getQuestions();
    getAnswers();
    getUsers();
    getTopics();
  }, []);

  return (
    <div className="ui grid">
      <div className="ui row">
        <Navbar />
      </div>
      <div className="ui row">
        <Banner chosenTopic={chosenTopic.topicName} topics={topics} />
      </div>
      <div id="sidebar" className="ui three wide column">
        <Sidebar topics={topics} />
      </div>
      <div id="qna" className="ui centered eleven wide column">
        <QnA
          chosenTopic={chosenTopic.topicName}
          questions={questions}
          answers={answers}
          users={users}
        />
      </div>
      <div id="advertisement" className="ui two wide column"></div>
      <Footer />
    </div>
  );
}

export default App;
