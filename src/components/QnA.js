import { Link } from "react-router-dom";
import moment from "moment";
import AnswerText from "./AnswerText";

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

const QnA = ({ chosenTopic, answers, questions, users }) => {
  const renderQuestionTopics = (question) => {
    return question.topics.map((topic) => {
      return (
        <>
          <Link className="ui button" to={"/topic/" + topic}>
            {topic}
          </Link>
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

    return users.map((user, index) => {
      if (selectedAnswer[0].user === user.id) {
        return (
          <article className="ui event raised segment answers">
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
              <div className="extra-text">
                <AnswerText text={selectedAnswer[0].content} />
              </div>
              <div className="meta">
                <button className="circular ui basic icon button">
                  <i className="comment icon"></i>
                </button>
                {selectedAnswer[0].comments_num}
                <button className="circular ui basic icon button">
                  <i className="share alternate icon"></i>
                </button>
                <button className="circular ui basic icon button">
                  <i className="bookmark icon"></i>
                </button>
                <button className="circular ui basic icon right floated button">
                  <i className="thumbs up icon"></i> {selectedAnswer[0].likes}
                </button>
              </div>
            </div>
          </article>
        );
      }
    });
  };

  const renderQuestions = (chosenTopic) => {
    if (!questions || !answers || !users) return <></>;

    return questions.map((question) => {
      if (chosenTopic === "") {
        return (
          <article className="ui container segment">
            {renderQuestionTopics(question)}
            <h3>{question.title}</h3>
            <article className="ui row">
              <button className="ui basic circular left floated button">
                Follow
              </button>
              <button className="ui circular basic right floated button">
                <i className="share alternate icon"></i>
              </button>
              <button className="ui basic right floated button">
                {countAnswers(question)} Answers
              </button>
            </article>
            <article className="ui feed">
              {renderFeaturedAnswer(question)}
            </article>
          </article>
        );
      } else {
        if (question.topics.includes(chosenTopic)) {
          return (
            <article className="ui container segment">
              {renderQuestionTopics(question)}
              <h3>{question.title}</h3>

              <button className="ui basic circular left floated button">
                Follow
              </button>

              <button className="ui circular basic right floated button">
                <i className="share alternate icon"></i>
              </button>
              <button className="ui basic right floated button">
                {countAnswers(question)} Answers
              </button>

              <article className="ui feed">
                {renderFeaturedAnswer(question)}
              </article>
            </article>
          );
        }
      }
    });
  };

  return (
    <section className="ui grid">
      <article className="ui four item text menu">
        <a className="item">Recent</a>
        <a className="item">Unanswered</a>
        <a className="item">Trending</a>
        <a className="item">Editoral</a>
      </article>

      {renderQuestions(chosenTopic)}
    </section>
  );
};

export default QnA;
