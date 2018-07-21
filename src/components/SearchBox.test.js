import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";

it("expect to render SearchBox component", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
