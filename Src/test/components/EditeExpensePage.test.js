import React from 'react';
import {shallow} from 'enzyme';
import {EditeExpensePage} from '../../components/EditeExpensePage';
import expenses from '../reducer/fixtures/expesnses';

let wrapper , editeExpense , removeExpense ,history;
beforeEach(()=>{
    editeExpense=jest.fn();
    removeExpense=jest.fn();
    history=({push:jest.fn()})
    wrapper= shallow(
        <EditeExpensePage
        editeExpense={editeExpense}
        removeExpense={removeExpense}
        history={history}
        expenses={expenses[2]}
        
        /> )
})

test('test edite expense page',()=>{
    expect(wrapper).toMatchSnapshot();
})
test('handle edite xpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editeExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
})
test('handle remove xpense',()=>{
     wrapper.find('button').simulate('click');
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
})