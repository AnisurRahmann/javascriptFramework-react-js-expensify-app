import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import React from 'react';
import expenses from '../reducer/fixtures/expesnses';

let addExpense ,history,wrapper;
beforeEach(()=>{
    addExpense=jest.fn();
    history={push:jest.fn()};
    wrapper=shallow( <AddExpensePage  addExpense={addExpense} history={history} /> )
})
test('test add expenses',() => {
  
    expect(wrapper).toMatchSnapshot();
})
test('check onSubmit',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})