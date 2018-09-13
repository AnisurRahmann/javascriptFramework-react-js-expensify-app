import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';


// ACTION GENARATORS
 //ADD EXPENSEs
const addExpense = ({description='',note='',amount=0,createdAt=0}={}) => ({
  type:'ADD_EXPENSE',
  expense:{
      id:uuid(),
      description,
      note,
      amount,
      createdAt
  }
})
 //REMOVE EXPENSES
const removExpense = ({id})=>({
  type:'REMOVE_EXPENSE',
  id

});
 //EDITE EXPENSE
const editeExpense = (id,updates) => ({
 type:'EDITE_EXPENSE',
  id,
  updates
});
 //SET FILTER TEXT
const setFilterText = (text='') => ({
    type:'SET_FILTER_TEXT',
    text
});
 //sort by amount
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',

})
 //sort by date
 const sortByDate = () => ({
    type:'SORT_BY_DATE',
    
})
 //set start date
const setStartDate = (startDate) =>  ({
    type:'SET_START_DATE',
    startDate

}) ;
//set end date
const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})
//set default expenses
const defaultExpenses=[];
//expenses reducer
const expensesReducer=(state=defaultExpenses,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE' :
          return [
            ...state,
           action.expense,
        ]
        case 'REMOVE_EXPENSE' :
          return  state.filter(({id})=>{
            return id !== action.id
          });
        case  'EDITE_EXPENSE' :
          return state.map((expense) => {
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.updates
                }
            }else{

            }
          });
       
        default :
          return state;
    }

};
//default filter reducers
const defaultFilters={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
//filters reducer
const filterReducer=(state=defaultFilters,action)=>{
  switch (action.type) {
      case 'SET_FILTER_TEXT' :
        return {
            ...state,
            text:action.text
        }
     case 'SORT_BY_AMOUNT' :
       return{
           ...state,
           sortBy:'amount'
       }
     case 'SORT_BY_DATE' :
       return {
           ...state,
           sortBy:'date'
       }
       case 'SET_START_DATE' :
        return {
            ...state,
            startDate:action.startDate
        }
       case 'SET_END_DATE' :
         return {
             ...state,
             endDate:action.endDate
         }
        default:
            return state
  }

}
//gevisible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=>{
        const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
        const matchStardDate = typeof startDate !== 'number' || expense.createdAt>=startDate;
        const matchEndDate = typeof endDate !== 'number' || expense.createdAt<=endDate;
        
         return matchText && matchEndDate && matchStardDate ;

    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1; 
        }else if (sortBy === 'amount'){
            a.amount > b.amount ? 1 : -1
        }
        
    })

}

//store creation
const store = createStore(
  combineReducers({
      expenses:expensesReducer,
      filters:filterReducer

  })

);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses= getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})

//dispatching actions
 const ItemOne=store.dispatch(addExpense({description:'first item',amount:300,createdAt:-1000}));
 const ItemTwo=store.dispatch(addExpense({description:'2nd item',amount:600,createdAt:1000}));

// store.dispatch(removExpense({id:ItemOne.expense.id}));
// store.dispatch(editeExpense(ItemTwo.expense.id,{amount:1000}));
 //store.dispatch(setFilterText('item'));
 store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());
 //store.dispatch(setStartDate(-5125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));




const demoState = {
    expenses:[{
      id:'adjsa',
      description:'something descrpit',
      note:'just a note',
      amount:100,
      createdAt:0
    }],
    filters:{
      text:'rent',
      sortBy:'amount',//amount or date
      startDate:undefined,
      endDate:undefined
    }
};