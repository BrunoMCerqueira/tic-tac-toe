import React from "react";
import { shallow } from "enzyme";
import StartGame from "../StartGame";

describe("Test WrapSquare Component", () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<StartGame/>); });

  it("Renders button with square content", () => {
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").text()).toEqual("Start Game");
  })
});