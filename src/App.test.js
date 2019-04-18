import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('Test App Component with Enzyme', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<App />); });

  it('renders without crashing', () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it('Renders a main squares wrapper', () => {
    expect(wrapper.find("main")).toHaveLength(1);
  });
});
