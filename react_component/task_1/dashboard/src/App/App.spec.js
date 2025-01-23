import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders Login component when isLoggedIn is false", () => {
    render(<App isLoggedIn={false} />);

    expect(
      screen.getByText("Login to access the full dashboard")
    ).toBeInTheDocument();
    expect(screen.queryByText("Available courses")).not.toBeInTheDocument();
  });

  test("renders CourseList component when isLoggedIn is true", () => {
    render(<App isLoggedIn={false} />);

    expect(screen.getByText("Available courses")).toBeInTheDocument();
    expect(
      screen.queryByText("Login to access the full dashboard")
    ).not.toBeInTheDocument();
  });
});
