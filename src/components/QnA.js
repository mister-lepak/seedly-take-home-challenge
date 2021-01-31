import { Link } from "react-router-dom";
import { countAnswers } from "./util";
import FeaturedAnswer from "./FeaturedAnswer";

const QnA = ({ chosenTopic, topics, answers, questions, users, comments }) => {
  const renderQuestionTopics = (question) => {
    return question.topics.map((topic) => {
      return topics.map((element) => {
        if (topic === element.id) {
          return (
            <>
              <Link className="ui button" to={"/topic/" + element.name}>
                {element.name}
              </Link>
            </>
          );
        }
        return <></>;
      });
    });
  };

  const renderQuestionDetails = (question) => {
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
            {countAnswers(question, answers)} Answers
          </button>
        </article>
        <article className="ui feed">
          <FeaturedAnswer
            question={question}
            answers={answers}
            users={users}
            comments={comments}
          />
        </article>
      </article>
    );
  };

  const renderQuestions = (chosenTopic) => {
    if (!questions || !answers || !users) return <></>;

    return questions.map((question) => {
      if (chosenTopic === "") {
        return renderQuestionDetails(question);
      } else {
        let chosenTopicId = "";
        topics.map((topic) => {
          if (topic.name === chosenTopic) chosenTopicId = topic.id;
        });
        if (question.topics.includes(chosenTopicId)) {
          return renderQuestionDetails(question);
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
