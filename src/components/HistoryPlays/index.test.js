import React from "react";
import { shallow } from "enzyme";
import HistoryPlays from "../HistoryPlays";

describe("Test HistoryPlays Component", ()=>{
  let wrapper = shallow(<HistoryPlays />);

  it("render a list", () => {
    expect(wrapper.find("ol")).toHaveLength(1);
  })
})