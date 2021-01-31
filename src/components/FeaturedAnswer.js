import { assessDate, selectFeaturedAnswer, countComments } from "./util";
import SmartText from "./SmartText";
import Comments from "./Comments";
import { useState } from "react";

const FeaturedAnswer = ({ question, users, answers, comments }) => {
  const [commentShow, setCommentShow] = useState(false);

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
              <SmartText text={selectedAnswer[0].content} />
            </div>
            <div className="meta">
              <button
                className="circular ui basic icon button"
                onClick={() => {
                  if (commentShow) setCommentShow(false);
                  else if (!commentShow) setCommentShow(true);
                }}
              >
                <i className="comment icon"></i>{" "}
                {countComments(selectedAnswer[0].id, comments)}
              </button>

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
            {commentShow ? (
              <Comments
                featuredAnswerId={selectedAnswer[0].id}
                users={users}
                comments={comments}
                commentsNum={countComments(selectedAnswer[0].id, comments)}
              />
            ) : (
              <></>
            )}
          </div>
        </article>
      );
    }
  });
};

export default FeaturedAnswer;
