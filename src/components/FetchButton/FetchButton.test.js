import React from 'react';
import { shallow } from '../../setupTests';

import FetchButton from './FetchButton';

describe('FetchButton component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <FetchButton
        text="Text"
        onClick={() => null}
        isDisabled={false}
      />,
    );
    expect(wrapper).toHaveLength(1);
  });
});
