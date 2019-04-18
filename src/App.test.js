import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App Component with Enzyme', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />); });

  it('renders without crashing', () => {
    wrapper;
  });
});
