import { render, screen } from "@testing-library/react";
import Footer from "./Footer.jsx";

describe("Testing the Footer", () => {
  test("testing the second p element", () => {
    render(<Footer />);
    const paragraph = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes("Copyright 2024 - Holberton School")
      );
    });
    expect(paragraph).toBeInTheDocument();
  });
});
