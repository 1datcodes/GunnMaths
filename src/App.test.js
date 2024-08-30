import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders analysis page on / route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );
  const linkElement = screen.getByText(/ANALYSIS/i);
  expect(linkElement).toBeInTheDocument();
});
