import React from 'react';
import { shallow } from '../../setupTests';

import FetchError from './FetchError';

describe('FetchError component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FetchError />);
    expect(wrapper).toHaveLength(1);
  });
});
