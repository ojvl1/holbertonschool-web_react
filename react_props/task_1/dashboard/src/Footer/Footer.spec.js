import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer.jsx";
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";
import "@testing-library/jest-dom";

jest.mock("../utils/utils", () => ({
  getFooterCopy: jest.fn(),
}));

describe("Footer Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correct copyright text when isIndex is true", () => {
    const currentYear = new Date().getFullYear();
    getFooterCopy.mockReturnValue("Holberton School");

    render(<Footer />);

    const copyright = screen.getByText(
      `Copyright ${currentYear} - Holberton School`
    );
    expect(copyright).toBeInTheDocument();
    expect(getFooterCopy).toHaveBeenCalledWith(true);
  });
});
