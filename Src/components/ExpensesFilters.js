import React from 'react';
import {connect} from 'react-redux';
import  {DateRangePicker} from 'react-dates';
import uuid from 'uuid';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters';

export class ExpensesFilters extends React.Component{
    state={
        calenderFocused:null
    }
    onDatesChange = ({startDate,endDate}) =>{
        this.props.setStartDate(startDate);
        console.log(this.props.startDate)
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calenderFocused) => {
        this.setState(()=>({calenderFocused}))
    }
    onTextFilterChange =(e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange=(e)=>{
        if(e.target.value === 'Amount'){
        this.props.sortByAmount();
        } else if(e.target.value === 'date'){
            this.props.sortByDate();
        }
    }



    render(){
        return(
            <div>
                    <input type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextFilterChange }
                />
                <select value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="Amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker  
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calenderFocused}
                  onFocusChange={this.onFocusChange}
                  isOutsideRange={()=>false}
                  numberOfMonths={1}
                  showClearDates={true}
                 
                />
        </div>
        )
    }
}

const mapStateToProps =  (state) => {
    return {
        filters:state.filters
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate:(starDate)=>dispatch(setStartDate(starDate)),
        setEndDate:(endDate)=>dispatch(setEndDate(endDate)),
        setTextFilter:(text)=>dispatch(setTextFilter(text)),
        sortByAmount:()=>dispatch(sortByAmount()),
        sortByDate:()=>dispatch(sortByDate())

        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpensesFilters);