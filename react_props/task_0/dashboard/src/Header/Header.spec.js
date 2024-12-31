import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

describe("Testing the Header", () => {
  test("testing the h1 element", () => {
    render(<Header />);
    const header = screen.getByRole("heading", { name: "School dashboard" });
    expect(header).toBeInTheDocument();
  });
  test("testing the image element", () => {
    render(<Header />);
    const image = screen.getByAltText("holberton logo");
    expect(image).toBeInTheDocument();
  });
});
