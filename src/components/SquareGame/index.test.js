import React from "react";
import { shallow } from "enzyme";
import SquareGame from "../SquareGame";

describe("Test WrapSquare Component", () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<SquareGame content="X"  handleClick={() => console.log("a")}/>); });

  it("Renders ok", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  })

  it('When player X click button, fill button with `X`', () => {
    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(wrapper.find('button').text()).toEqual('X');
  });
});