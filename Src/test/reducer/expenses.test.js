import expenses from './fixtures/expesnses';
import expensesReducers from '../../reducers/expenses';

test('test deafault expenses',()=>{
    const state = expensesReducers(undefined,{type:'@@INIT'})
    expect(state).toEqual([]);
})
test('add expenses',()=>{
    const expense = {
        id:'123123',
        description:'ONE-new',
        note:'one',
        amount:100,
        createdAt:0

        
    }
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state=expensesReducers(expenses,action);
    expect(state).toEqual([...expenses,expense])
})
test('remove expenses',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[0].id
    }
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([expenses[1],expenses[2]])
})
test('dont remove expenses',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:'232323'
    }
    const state=expensesReducers(expenses,action)
    expect(state).toEqual(expenses)
})
test('edite expenses',()=>{
    const amount = 12000;
    const action = {
        type:'EDITE_EXPENSE',
        id:expenses[0].id,
        updates:{
            amount
        }
    }
    const state = expensesReducers(expenses,action);
    expect(state[0].amount).toBe(amount)
})
test('should not edite expenses',()=>{
    const amount = 12000;
    const action = {
        type:'EDITE_EXPENSE',
        id:'-1',
        updates:{
            amount
        }
    }
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses)
})
