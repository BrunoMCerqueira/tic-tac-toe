import React from "react";
import { shallow } from "enzyme";
import SquareGame from "../SquareGame";

describe("Test WrapSquare Component", () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<SquareGame square="X"  handleClick=""/>); });

  it("Renders button with square content", () => {
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").text()).toEqual("X");
  })
});