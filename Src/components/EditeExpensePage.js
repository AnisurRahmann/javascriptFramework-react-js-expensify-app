import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editeExpense,removeExpense} from '../actions/expenses';

export class EditeExpensePage extends React.Component{
    onSubmit=(expenses)=> {
        this.props.editeExpense(this.props.expenses.id,expenses);
        this.props.history.push('/')
    }
    onRemove = () =>  {
        this.props.removeExpense({id:this.props.expenses.id});
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
     <ExpenseForm
        expenses={this.props.expenses}
        onSubmit={this.onSubmit}
      />
      <button onClick={this.onRemove }>DELETE</button>
    </div>
        )
    }


}

const mapStateToProps = (state,props) => {
   return {
       expenses:state.expenses.find((expnese)=>expnese.id===props.match.params.id)
   }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
      editeExpense:(expenses)=>dispatch(editeExpense(id,expenses)),
      removeExpense:(data)=>dispatch(removeExpense(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditeExpensePage);