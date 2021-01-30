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
    const dateDiff = moment(contender[0].date).diff(
      moment(element.date),
      "days"
    );
    if (element.likes > contender[0].likes) {
      contender[0] = element;
    } else if (element.likes === contender[0].likes) {
      if (dateDiff < 0) {
        contender[0] = element;
      }
    }
  });
  return contender;
};

const QnA = (props) => {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState();
  const [users, setUsers] = useState();
  const { chosenTopic } = props;

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
          <a className="ui button" href={"/" + topic}>
            {topic}
          </a>
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

  const assessDate = (inputDate) => {
    const answerDate = moment(inputDate);
    return answerDate.startOf("day").fromNow();
  };

  const renderFeaturedAnswer = (question) => {
    const relatedAnswers = [];
    answers.map((answer) => {
      if (answer.question_id === question.id) {
        relatedAnswers.push(answer);
      }
    });
    const selectedAnswer = selectFeaturedAnswer(relatedAnswers);

    return users.map((user) => {
      if (selectedAnswer[0].user === user.id) {
        return (
          <div className="ui event segment">
            <div className="label">
              <img src={user.avatar} />
            </div>
            <div className="content">
              <div className="summary">
                <a className="user">{user.full_name}</a>
              </div>
              <div className="date">
                <p className="user">
                  {user.level} Answered {assessDate(selectedAnswer[0].date)}
                </p>
              </div>
              <div className="extra-text">{selectedAnswer[0].content}</div>
              <div className="meta">
                <i className="comment icon"></i>
                {selectedAnswer[0].comments_num}
                <i className="share alternate icon"></i>
                <i className="bookmark icon"></i>
                <i className="thumbs up icon"></i> {selectedAnswer[0].likes}
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const renderQuestions = (chosenTopic) => {
    if (!questions || !answers || !users) return <></>;

    return questions.map((question) => {
      if (chosenTopic === "") {
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

            <div className="ui feed">{renderFeaturedAnswer(question)}</div>
          </div>
        );
      } else {
        if (question.topics.includes(chosenTopic)) {
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

              <div className="ui feed">{renderFeaturedAnswer(question)}</div>
            </div>
          );
        }
      }
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

      {renderQuestions(chosenTopic)}
    </div>
  );
};

export default QnA;
