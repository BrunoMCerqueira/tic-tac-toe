import React from "react";
import { shallow } from "enzyme";
import WrapSquares from "../WrapSquares";

describe("Test WrapSquare Component", () => {
  it("Renders ok", () => {
    shallow(<WrapSquares />);
  })
});