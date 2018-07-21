import React from "react";
import Scroll from "./Scroll";
import { shallow } from "enzyme";

it("expect to render Scroll component", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
