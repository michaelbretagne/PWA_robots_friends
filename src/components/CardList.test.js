import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Sophia",
      email: "sophia@agi.comx",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
