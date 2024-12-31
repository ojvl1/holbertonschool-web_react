import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Testing the Footer", () => {
  test("testing the first p element", () => {
    render(<Login />);
    const paragraph = screen.getByText("Login to access the full dashboard");
    expect(paragraph).toBeInTheDocument();
  });
  test("testing the input elements", () => {
    render(<Login />);
    const email = screen.getByRole("textbox");
    const password = screen.getByRole("textbox", { type: "password" });

    expect(email).toBeInTheDocument(/@.*\.com$/);
    expect(password).toBeInTheDocument(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
    );
  });
  test("testing the label elements", () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText("Email:");
    const passLabel = screen.getByLabelText("Password:");

    expect(emailLabel).toHaveAttribute("type", "email");
    expect(passLabel).toHaveAttribute("type", "password");
  });
});
