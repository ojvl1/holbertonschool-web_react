test('markNotificationAsRead removes the notification from the UI', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  render(<App />);

  fireEvent.click(screen.getByText('Your Notifications'));

  const notifications = screen.getAllByRole('listitem');
  expect(notifications).toHaveLength(3);

  fireEvent.click(notifications[0].querySelector('button'));

  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  
  const updatedNotifications = screen.getAllByRole('listitem');
  expect(updatedNotifications.length).toBe(2);
});