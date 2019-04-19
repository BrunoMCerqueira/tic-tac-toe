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

  it('Renders a history list', () => {
    expect(wrapper.find("ol")).toHaveLength(1);
  });

  it('When player clicks button shift current player', () => {
    expect(wrapper.find('p').text()).toEqual('Next Player: X');
    wrapper.find('button').at(1).simulate('click');
    wrapper.update();
    expect(wrapper.find('p').text()).toEqual('Next Player: O');
  });
});
