import React from 'react';
import DashBoardPage from '../../components/DashboardPage';
import { shallow } from 'enzyme';

test('should Render DashBoardPage', () => {
    const wrapper = shallow(<DashBoardPage />)
    expect(wrapper).toMatchSnapshot();
});