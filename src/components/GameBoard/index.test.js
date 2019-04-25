import React from "react";
import { mount } from "enzyme";
import GameBoard from "../GameBoard";

describe("Test GameBoard Component", ()=>{
  let wrapper;
  beforeEach(() => { 
    wrapper = mount(<GameBoard
      squares={Array(9).fill("")}
      handleClick={() => console.log()}
      player={"X"}/>
    ); 
  });

  it('Contains a `p` indicating player', () => {
    expect(wrapper.find("p.player-playing-design")).toHaveLength(1);
  });

  it("Renders a `main` element", () => {
    expect(wrapper.find("main")).toHaveLength(1);
  })

  it('Renders 9 squares buttons', () => {
    expect(wrapper.find("button.square-design")).toHaveLength(9);
  });
})