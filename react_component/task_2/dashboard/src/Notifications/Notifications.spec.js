import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("Notifications renders without errors", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Notifications renders the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications"
    );
  });

  it("Notifications renders Notification Item and correct html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("NotificationItem")).toBeDefined();
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("logs the correct message when a notification is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        notifications={[
          { id: 1, type: "default", value: "New course available" },
        ]}
      />
    );
    wrapper.find("NotificationItem").simulate("click");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );
    consoleSpy.mockRestore();
  });
});
