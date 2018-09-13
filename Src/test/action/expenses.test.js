import {addExpense,removeExpense,editeExpense} from '../../actions/expenses'
test('actions genarators',()=>{
    const  action = removeExpense({id:'1234avbc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'1234avbc'
    })

})
test ('edite expense',()=>{
    const id=455;
    const updates={
        name:'new',
        place:'new'
    }
   const action=editeExpense(id,updates);
   expect(action).toEqual({
       type:'EDITE_EXPENSE',
       id:id,
       updates:updates
   })
})
test ('addExpense with data',()=>{
    const expenseData ={
        description:'some description',
        note:'some note',
        amount:'500',
        createdAt:'100'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})
test('addexpense whitohut data',()=>{
    const expenseData2 ={
        description:'',
        note:'',
        amount:0,
        createdAt:0
    }
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData2,
            id:expect.any(String)
        }
    })
})