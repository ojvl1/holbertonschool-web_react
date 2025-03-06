import React from "react";
import { render, cleanup } from "@testing-library/react";
import WithLogging from "./WithLogging";

afterEach(cleanup);

describe("WithLogging HOC", () => {
  class MockApp extends React.Component {
    render() {
      return <h1>Hello from Mock App Component</h1>;
    }
  }

  it("logs component mount and unmount messages", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const MockAppWithLogging = WithLogging(MockApp);

    const { unmount } = render(<MockAppWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith("Component MockApp is mounted");

    unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component MockApp is going to unmount"
    );

    consoleSpy.mockRestore();
  });

  it("renders the wrapped component correctly", () => {
    const MockAppWithLogging = WithLogging(MockApp);
    const { getByText } = render(<MockAppWithLogging />);
    expect(getByText(/Hello from Mock App Component/i)).toBeInTheDocument();
  });
});
