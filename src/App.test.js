import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('Test App Component with Enzyme', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<App />); });

  it('Renders without crashing', () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });

  it('Contains a `p` indicating player', () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });

  it('Contains a main squares wrapper', () => {
    expect(wrapper.find("main")).toHaveLength(1);
  });
});
