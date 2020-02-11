import React from 'react';
import { shallow } from '../../setupTests';
import formatPlanet from '../../assets/js/utils/formatPlanet';
import mockPlanet from '../../assets/js/mocks/mockPlanet';

import PlanetInfo from './PlanetInfo';

describe('PlanetInfo component', () => {
  it('renders a formatted mocked planet', () => {
    const wrapper = shallow(<PlanetInfo planet={formatPlanet(mockPlanet)} />);
    expect(wrapper).toHaveLength(1);
  });
});
