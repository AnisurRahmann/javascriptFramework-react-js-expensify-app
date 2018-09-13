import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpnes = (
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}
)=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id

});

//EDITE_EXPENSE
const editeExpense = (id,updates)=>({
    type:'EDITE_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER
const setTextFilter = (text='')=>({
    type:'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = ()=>({
    type:'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = ()=> ({
    type:'SET_START_DATE'
});
//SET_END_DATE
const setEndDate = ()=> ({
    type:'SET_END_DATE'
});
//getVisiblExpenses

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number' || expesne.createdAt>=startDate;
        const endDateMatch=typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch &&  textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1;
        }else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1;
        }
        
    });
}


//Expenses Reducer
const expensesReducerDefaultState=[];
const expensesReducer = (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id!==action.id);

        case 'EDITE_EXPENSE' :
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }


};

//filters reducer
//text=>'',sortBy=>'date',startDate & enddate=.undefined
const filtersReducerDefaultState={
    text:'',
    sortBy:'',
    startDate:undefined,
    enddate:undefined
};
const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
        
    }
}

//store creation
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);
store.subscribe(()=>{
    const state=store.getState();
    const Visibledata=getVisibleExpenses(state.expenses,state.filters);
    console.log(Visibledata);
});
const expenseOne=store.dispatch(addExpnes({description:'rent',amount:100,createdAt:1000}));
  const expenseTwo=store.dispatch(addExpnes({description:'coffee',amount:300,createdAt:2000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch( editeExpense(expenseTwo.expense.id,{amount:500}));
 //store.dispatch(setTextFilter('e'));
 //store.dispatch(sortByDate());
 store.dispatch(sortByAmount());
 //store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
const demoState = {
    expenses : [{
        id:'dfajdfaf',
        description:'january rent',
        note:'this was the final payment for that adress',
        amount:56500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined
    }
};

