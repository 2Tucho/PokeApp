import React from "react";
import { shallow } from "enzyme";
import DetailView from "./DetailView";

describe("DetailView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailView />);
    expect(wrapper).toMatchSnapshot();
  });
});
