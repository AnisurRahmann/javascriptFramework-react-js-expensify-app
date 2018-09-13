import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from  'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses' ;
export const ExpensesList = (props) => {
    return (
        <div>
        {
            props.expenses.length === 0 ? (
                <h1>no Expenses List</h1>
            ) : (
                    props.expenses.map((expense) => {
                        return  <ExpenseListItem key={expense.id}{...expense}/>
                        })
                )
        }
        </div>
    )
}
const  mapStateToProps =  (state) => {
    return {
        expenses:SelectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesList);