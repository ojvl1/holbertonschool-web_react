import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "../../../../task_4/dashboard/src/Notifications";

describe("Notifications Component Tests", () => {
  test('renders the notifications title "Here is the list of notifications"', () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test("renders a close button", () => {
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("renders three list items as notifications", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test('clicking the close button logs "Close button has been clicked" to the console', () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore();
  });
});
