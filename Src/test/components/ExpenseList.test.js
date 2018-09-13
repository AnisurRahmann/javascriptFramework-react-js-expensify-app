
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../reducer/fixtures/expesnses';
import {ExpensesList} from '../../components/ExpensesList';

test('test expenseList components',()=>{
    const wrapper = shallow( <ExpensesList expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot();
})
test('test expenseList components without any data',()=>{
    const wrapper = shallow( <ExpensesList expenses = {[]} />);
    expect(wrapper).toMatchSnapshot();
})