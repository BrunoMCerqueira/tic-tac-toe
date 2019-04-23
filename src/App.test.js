import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('Test App Component with Enzyme', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<App />); });

  it('renders ok', () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });
});
