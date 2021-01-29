import { useEffect, useState } from "react";

const QnA = () => {
  const [questions, setQuestions] = useState();

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

  useEffect(() => {
    getQuestions();
    console.log(questions);
  }, []);

  const renderQuestionTopics = (question) => {
    return question.topics.map((topic) => {
      return (
        <>
          <button className="ui button">{topic}</button>
        </>
      );
    });
  };

  const renderQuestions = () => {
    if (!questions) return <></>;
    return questions.map((question, index) => {
      return (
        <div className="ui container segment">
          {renderQuestionTopics(question)}
          <h3>{question.title}</h3>
        </div>
      );
    });
  };

  return (
    <div className="ui grid">
      <div className="ui four item text menu">
        <a className="item">Recent</a>
        <a className="item">Unanswered</a>
        <a className="item">Trending</a>
        <a className="item">Editoral</a>
      </div>
      {renderQuestions()}
    </div>
  );
};

export default QnA;
