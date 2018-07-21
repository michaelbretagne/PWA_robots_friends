import React from "react";
import ErrorBoundary from "./ErrorBoundry";
import { shallow } from "enzyme";

it("expect to render ErrorBoundary component", () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});

it("expect to get initial state", () => {
  const wrapper = shallow(<ErrorBoundary />);
  expect(wrapper.state()).toEqual({ hasError: false });
});

it("expect to get updated state", () => {
  const wrapper = shallow(<ErrorBoundary />);
  wrapper.setState({ hasError: true });
  expect(wrapper.state()).toEqual({ hasError: true });
});
