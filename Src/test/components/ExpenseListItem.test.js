import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import expenses from '../reducer/fixtures/expesnses';
test('testing expense list items',() => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})