import { useEffect, useState } from "react";
import moment from "moment";

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResponse(data);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [url]);

  return [response, loading, hasError];
};

export const assessDate = (inputDate) => {
  const answerDate = moment(inputDate);
  return answerDate.startOf("day").fromNow();
};

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

export const countAnswers = (question, answers) => {
  let count = 0;
  if (!answers) return 0;
  answers.map((answer) => {
    if (answer.question_id === question.id) count = count + 1;
  });
  return count;
};

export const countComments = (selectFeaturedAnswerId, comments) => {
  let commentCount = 0;
  if (!comments) return 0;
  comments.map((comment) => {
    if (comment.answer === selectFeaturedAnswerId) commentCount++;
  });
  return commentCount;
};
