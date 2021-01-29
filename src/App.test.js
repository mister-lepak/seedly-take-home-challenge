import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const node1 = screen.getByText(/Syfe/i);
  // const node2 = screen.getByText(/Online Brokerages/i);
  // const node3 = screen.getByText(/S&P 500 Index/i);
  // const node4 = screen.getByText(/Robo-Advisors/i);
  // const node5 = screen.getByText(/ETF/i);
  expect(node1.closest("header")).toBeInTheDocument();
  // expect(node2.closest("header")).toBeInTheDocument();
  // expect(node3.closest("header")).toBeInTheDocument();
  // expect(node4.closest("header")).toBeInTheDocument();
  // expect(node5.closest("header")).toBeInTheDocument();
});
