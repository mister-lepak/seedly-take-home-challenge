import {
  selectFeaturedAnswer,
  countAnswers,
  countComments,
} from "./components/util";

test("Test featured answers selection", () => {
  const dataInput = [
    {
      id: "b7f273c0-ac05-4372-b8cd-aa82b87ffcab",
      likes: 26,
      date: "2020-12-28T03:08:45.000Z",
    },
    {
      id: "814a5ca1-6d0e-48bd-87e5-1382bfe2dc9e",
      likes: 26,
      date: "2021-01-29T22:16:52.000Z",
    },
    {
      id: "6a71c763-a0a6-4064-9444-14fa63ecf0fe",
      likes: 15,
      date: "2021-01-23T06:10:21.000Z",
    },
  ];

  expect(selectFeaturedAnswer(dataInput)).toEqual([
    {
      id: "814a5ca1-6d0e-48bd-87e5-1382bfe2dc9e",
      likes: 26,
      date: "2021-01-29T22:16:52.000Z",
    },
  ]);
});

test("countAnswers function Test", () => {
  const questionInput = {
    id: "88dede45-d1a1-4cfd-98c5-40b241e80e2b",
    title: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    topics: [
      "e2df1d4c-1d96-4fbf-a5e2-e5826cf5d910",
      "66a45c18-b6c2-464c-b735-ce668552a6bb",
      "fe1e5857-d51f-47c0-ab20-e4ab4cfd5dc8",
    ],
  };
  const answersInput = [
    {
      id: "b7f273c0-ac05-4372-b8cd-aa82b87ffcab",
      question_id: "88dede45-d1a1-4cfd-98c5-40b241e80e2b",
    },
    {
      id: "814a5ca1-6d0e-48bd-87e5-1382bfe2dc9e",
      question_id: "f574037a-188a-4518-bed7-577e2cf7794d",
    },
    {
      id: "6a71c763-a0a6-4064-9444-14fa63ecf0fe",
      question_id: "88dede45-d1a1-4cfd-98c5-40b241e80e2b",
    },
  ];

  expect(countAnswers(questionInput, answersInput)).toEqual(2);
});

test("countComments unit function test", () => {
  const featuredAnswerIdInput = "814a5ca1-6d0e-48bd-87e5-1382bfe2dc9e";
  const commentsInput = [
    {
      id: "f18e4bf1-1695-4931-b8e7-ac06f0c559f9",
      answer: "814a5ca1-6d0e-48bd-87e5-1382bfe2dc9e",
    },
    {
      id: "0bf3867e-10e7-43a5-944f-f8492881cf6d",
      answer: "f4fb92ef-3707-456a-a67a-22c08356f073",
    },
    {
      id: "f4782131-68b0-467c-a780-057363913b22",
      answer: "b7f273c0-ac05-4372-b8cd-aa82b87ffcab",
    },
    {
      id: "e7f7b9a8-3d44-4927-987a-61ad48c510f2",
      answer: "36abc623-a05f-4e34-9551-4b4c90915b95",
    },
    {
      id: "a2ad92f0-9e4f-4a05-baf6-6895e5307821",
      answer: "814a5ca1-6d0e-48bd-87e5-1382bfe2dc9e",
    },
  ];

  expect(countComments(featuredAnswerIdInput, commentsInput)).toEqual(2);
});
