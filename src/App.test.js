import { render, screen } from "@testing-library/react";
import App from "./App";
import { selectFeaturedAnswer } from "./components/QnA";

test("Checks if react is rendered", () => {
  render(<App />);
  const item = screen.getByText("Let's Talk Finance");
  // const node1 = screen.getByText(/Syfe/i);
  // const node2 = screen.getByText(/Online Brokerages/i);
  // const node3 = screen.getByText(/S&P 500 Index/i);
  // const node4 = screen.getByText(/Robo-Advisors/i);
  // const node5 = screen.getByText(/ETF/i);
  expect(item).toBeInTheDocument();
  // expect(node2.closest("header")).toBeInTheDocument();
  // expect(node3.closest("header")).toBeInTheDocument();
  // expect(node4.closest("header")).toBeInTheDocument();
  // expect(node5.closest("header")).toBeInTheDocument();
});

test("Featured answers selection", () => {
  // dataInput assumed to be simplified with only related answers filtered and provided to function
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
