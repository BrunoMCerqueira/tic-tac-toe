import React from "react";
import { mount } from "enzyme";
import WrapSquares from "../WrapSquares";

describe("Test WrapSquare Component", () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<WrapSquares />); });

  it("Renders ok", () => {
    expect(wrapper.find("main")).toHaveLength(1);
  })

  it('Renders 9 squares buttons', () => {
    expect(wrapper.find("button.square-design")).toHaveLength(9);
  });
});