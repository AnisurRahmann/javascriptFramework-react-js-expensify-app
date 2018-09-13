import React from 'react';
import NotFoundPage from '../../components/NotFoundpage';
import {shallow} from 'enzyme';

test('Not Foun page testing',()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})