import React from "react";
import { mount } from "enzyme";
import WrapGame from "../WrapGame";

describe("Test WrapSquare Component", () => {
  let wrapper;
  beforeEach(() => { 
    wrapper = mount(<WrapGame />);
  });

  it('When player clicks button shift current player', () => {
    expect(wrapper.find('p').text()).toEqual('Next Player: X');
    wrapper.find('button').at(1).simulate('click');
    wrapper.update();
    expect(wrapper.find('p').text()).toEqual('Next Player: O');
  });

  it('First click button fill with `X` and second click fill with `O`', () => {
    wrapper.find('button').at(1).simulate('click');
    wrapper.update();
    expect(wrapper.find('button').at(1).text()).toEqual('X');
    wrapper.find('button').at(2).simulate('click');
    wrapper.update();
    expect(wrapper.find('button').at(2).text()).toEqual('O');
  });

  it('Click button produce a history element', () => {
    wrapper.find('button').at(1).simulate('click');
    wrapper.update();
    expect(wrapper.find('li')).toHaveLength(1);
  });

  it('Click on history element, update game', () => {
    wrapper.find('button').at(1).simulate('click');
    wrapper.update();
    expect(wrapper.find('button').at(1).text()).toEqual('X');
    expect(wrapper.find('li')).toHaveLength(1);
    wrapper.find('button').at(2).simulate('click');
    wrapper.update();
    expect(wrapper.find('button').at(2).text()).toEqual('O');
    expect(wrapper.find('li')).toHaveLength(2);
    wrapper.find('li').at(0).simulate('click');
    wrapper.update();
    expect(wrapper.find('button').at(1).text()).toEqual('X');
    expect(wrapper.find('button').at(2).text()).toEqual('');
  });

  it('When is a winner, display winner message', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.update();
    wrapper.find('button').at(6).simulate('click');
    wrapper.update();
    wrapper.find('button').at(1).simulate('click');
    wrapper.update();
    wrapper.find('button').at(4).simulate('click');
    wrapper.update();
    wrapper.find('button').at(2).simulate('click');
    wrapper.update();
    expect(wrapper.find('.winner-message').text()).toEqual('The winner is X');
  });
});
