import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'

export  class AddExpensePage extends React.Component{
    onSubmit=(expenses)=>{
        this.props.addExpense(expenses)
            this.props.history.push('/');
        }
    render(){
        return(
            <div>
       <ExpenseForm 
         onSubmit={this.onSubmit} />
            </div>
        )
    }



  
}


const mapDispatchToProps = (dispatch) =>{
  return{
      addExpense:(expenses)=>dispatch(addExpense(expenses))
  }
}
export default connect(undefined,mapDispatchToProps)(AddExpensePage);