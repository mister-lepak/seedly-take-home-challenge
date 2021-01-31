import { useState } from "react";
import SmartText from "./SmartText";
import { assessDate } from "./util";
import moment from "moment";

const Comments = ({ featuredAnswerId, users, comments, commentsNum }) => {
  const [showLess, setShowLess] = useState(true);

  const renderCommentDetails = (comment) => {
    let specificUser = [];
    users.map((element) => {
      if (element.id === comment.user) specificUser = element;
    });
    return (
      <div className="comment">
        <a classname="avatar">
          <img src={specificUser.avatar} />
        </a>
        <div className="ui content">
          <a className="author">{specificUser.full_name}</a>
          <div className="metadata">
            <span className="date">{assessDate(comment.date)}</span>
          </div>
          <div className="text">
            <SmartText text={comment.content} length={50} />
          </div>
        </div>
      </div>
    );
  };

  const renderEachComment = () => {
    comments.sort((left, right) => {
      return moment.utc(left.date).diff(moment.utc(right.date));
    });

    let mappedComments = [];
    comments.map((comment) => {
      if (comment.answer === featuredAnswerId)
        return (mappedComments = mappedComments.concat(comment));
    });

    return mappedComments.map((comment, index) => {
      let commentsRenderFrom = 0;
      if (showLess) {
        commentsRenderFrom = commentsNum - 2;
        if (index >= commentsRenderFrom) {
          return renderCommentDetails(comment);
        }
      } else {
        return renderCommentDetails(comment);
      }
    });
  };

  return (
    <section className="ui comments">
      <h3 className="ui dividing header"></h3>
      {showLess && commentsNum > 2 ? (
        <a
          onClick={() => {
            setShowLess(false);
          }}
        >
          View all {commentsNum - 2}comments
        </a>
      ) : (
        <></>
      )}
      {renderEachComment()}
      <div className="ui fluid action input">
        <input type="text" placeholder="Write a comment"></input>
        <button className="ui basic primary button">Post</button>
      </div>
    </section>
  );
};

export default Comments;
