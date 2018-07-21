import React from "react";
import MainPage from "./MainPage";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage container", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filter robot correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 5,
        name: "Sophia",
        email: "sophia@agi.com",
      },
    ],
    searchField: "sophia",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 5,
      name: "Sophia",
      email: "sophia@agi.com",
    },
  ]);
});

it("filter robot correctly2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 5,
        name: "Sophia",
        email: "sophia@agi.com",
      },
    ],
    searchField: "z",
    isPending: false,
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
