import React from "react";
import { mount } from "enzyme";
import PlayerWins from "../PlayerWins";

describe("Test PlayerWins Component", () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<PlayerWins />)});
  
  it("renders a p element showing the winner", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  })
})