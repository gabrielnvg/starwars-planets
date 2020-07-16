import React from 'react';
import { shallow } from '../../setupTests';

import FetchButton from './FetchButton';

const clickResult = 'The button was clicked!';
const mockCallback = jest.fn(() => clickResult);

describe('FetchButton component', () => {
  const wrapper = shallow(
    <FetchButton text="Text" onClick={mockCallback} isDisabled={false} />,
  );

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('simulates click events', () => {
    wrapper.find('button').simulate('click');
    expect(mockCallback.mock.results[0].value).toBe(clickResult);
  });
});
