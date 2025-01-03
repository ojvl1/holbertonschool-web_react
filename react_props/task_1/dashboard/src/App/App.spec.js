import React from "react";
import { shallow } from "enzyme";
import App from "../App/App.jsx";

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should contain the Header component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("should contain the Login component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("should contain the Footer component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});
