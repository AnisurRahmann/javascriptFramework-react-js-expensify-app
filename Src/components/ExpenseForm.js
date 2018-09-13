import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

import 'react-dates/initialize';

 export default class ExpenseForm extends React.Component {
     constructor(props){
     super(props)
     this.state= {
        descriptions:props.expenses?props.expenses.description:'',
        amount:props.expenses?(props.expenses.amount/100).toString():'',
        note:props.expenses?props.expenses.note:'',
        createdAt:props.expenses?moment(props.expenses.createdAt):moment(),
        calenderFocused:false,
        error:''
    }

     }
     
     onDescriptionChange =  (e) => {
        const descriptions=e.target.value;
        this.setState(()=>({descriptions}))
     }
     onAmountChange = (e) => {
         const amount = e.target.value
         if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
         }

     }
     onNoteChange = (e) => {
         const note=e.target.value;
         this.setState(()=>({note}));
     }
     onDatechange = (createdAt) => {
         if(createdAt){
            this.setState(()=>({createdAt}));
         }
         
     }
     onFocusChange = ({focused}) => {
         this.setState (()=>({calenderFocused:focused}))
     }
     onSubmit = (e) => {
         e.preventDefault();
        if(!this.state.descriptions || !this.state.amount){
            this.setState(() => ({error:'please fill up requiremnts'}))
        }else{
            this.setState(() => ({error:''}));
            this.props.onSubmit ({
                description:this.state.descriptions,
                amount:parseFloat(this.state.amount) * 10,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note,


            })
        }
     }
     render(){
         return(
         <div>
         {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit={this.onSubmit}>
              <input type="text"
                placeholder="descriptions"
                value={this.state.descriptions}
                autoFocus
                onChange={this.onDescriptionChange}
                />
              <input
                type="number"
                placeholder="amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                />
               <SingleDatePicker
                 date={this.state.createdAt}
                 onDateChange={this.onDatechange}
                 focused={this.state.calenderFocused}
                 onFocusChange={this.onFocusChange}
                 numberOfMonths={1}
                 isOutsideRange={()=>false}
               
               />
              <textarea
                placeholder="add a note (optional)"
                onChange={this.onNoteChange}></textarea>
              <button>Add</button>
             </form>
         </div>)
     }
 }