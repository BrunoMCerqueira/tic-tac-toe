import React from "react";
import { shallow } from "enzyme";
import NextPlayer from "../NextPlayer";

describe("Test component Next Player", () => {
  it("renders a `p` element", () => {
    const p_element = shallow(<NextPlayer/>);
    expect(p_element).toHaveLength(1);
    expect(p_element.text()).toEqual('Next Player: X');
  })
})