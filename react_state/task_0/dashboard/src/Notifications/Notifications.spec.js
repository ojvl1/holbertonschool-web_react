import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Notifications />', () => {
  it('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it("Notifications renders the text 'Here is the list of notifications' when notifications are provided", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    expect(wrapper.find('p').text()).toEqual(
      'Here is the list of notifications'
    );
  });

  it('logs the correct message when a notification is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    const notificationItem = wrapper.find('NotificationItem').first();
    notificationItem.simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );
    consoleSpy.mockRestore();
  });

  it('does not re-render when the length of the notifications prop does not change', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
      ],
      displayDrawer: true,
    });
    expect(shouldUpdate).toBe(false);
  });

  it('re-renders when the length of the notifications prop changes', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: 'default', value: 'New course available' },
        ]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Project deadline approaching' },
      ],
      displayDrawer: true,
    });
    expect(shouldUpdate).toBe(true);
  });

  it('calls handleDisplayDrawer when clicking on the menu item', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    wrapper.find('div').at(0).simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
