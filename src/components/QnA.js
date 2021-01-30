import { useEffect, useState } from "react";
import moment from "moment";

export const selectFeaturedAnswer = (relatedAnswersInput) => {
  let contender = [
    {
      id: "",
      likes: 0,
      date: "2000-01-01T00:00:00.000Z",
    },
  ];

  relatedAnswersInput.map((element) => {
    const dateDiff = moment(contender.date).diff(
      moment(element.date),
      "minutes"
    );
    if (element.likes >= contender[0].likes) {
      contender[0] = element;
    }
  });
  return contender;
};

const QnA = () => {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState();
  const [users, setUsers] = useState();
  const [relatedAnswers, setRelatedAnswers] = useState([]);
  const today = new Date();

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

  useEffect(() => {
    getQuestions();
    getAnswers();
    getUsers();
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

  const countAnswers = (question) => {
    let count = 0;
    answers.map((answer) => {
      if (answer.question_id === question.id) count = count + 1;
    });
    return count;
  };

  const assessDate = () => {
    const todayDate = moment(today);
    answers.map((answer) => {
      const answerDate = moment(answer.date);
      const deltaDay = todayDate.diff(answerDate, "days");
      if (deltaDay < 1) {
        console.log(answerDate.startOf("day").fromNow());
      }
    });
  };

  const renderFeaturedAnswer = (question) => {
    // setRelatedAnswers([]);
    const relatedAnswers = [];
    answers.map((answer) => {
      if (answer.question_id === question.id) {
        // setRelatedAnswers((relatedAnswers) => [...relatedAnswers, answer]);
        relatedAnswers.push(answer);
      }
    });
    const selectedAnswer = selectFeaturedAnswer(relatedAnswers);

    return <div className="ui card"></div>;
  };

  const renderQuestions = () => {
    if (!questions || !answers || !users) return <></>;
    return questions.map((question, index) => {
      return (
        <div className="ui container segment">
          {renderQuestionTopics(question)}
          <h3>{question.title}</h3>

          <p>
            <button>Follow</button>
            {countAnswers(question)} Answers
            <span>
              <i className="share alternate icon"></i>
            </span>
          </p>

          {renderFeaturedAnswer(question)}
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
