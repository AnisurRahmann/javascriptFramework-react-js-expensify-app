import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesFilters} from '../../components/ExpensesFilters';
import {filters,Altfilters} from '../reducer/fixtures/filters';

// let wrapper ,  setTextFilter, sortByAmount, sortByDate,setEndDate,setStartDate

// beforeEach(()=>{
//     setTextFilter=jest.fn();
//     sortByAmount=jest.fn();
//     sortByDate=jest.fn();
//     setEndDate=jest.fn();
//     setStartDate=jest.fn();
//     wrapper=shallow( 
//         <ExpensesFilters  
//             setTextFilter={setTextFilter}
//             sortByAmount={sortByAmount}
//             sortByDate={sortByDate}
//             setEndDate={setEndDate}
//             setStartDate={setStartDate}
//             filters={filters}

//         /> )
// })

// test('test expenses filter with filters data',()=> {
//     expect(wrapper).toMatchSnapshot();
// })
// test('test expenses filters with Altfilters data ',() => {
//     wrapper.setProps({
//         filters:Altfilters
//     })
//     expect(wrapper).toMatchSnapshot();
// })
// test('handle text change',() => {
//     const value = 'rent';
//     wrapper.find('input').simulate('change',{
//         target:value
//     })
//     expect(setTextFilter).toHaveBeenLastCalledWith(value);
// })
// test('sort by date',() => {
//     const value='date'
//     wrapper.setProps({
//         filters:Altfilters
//     })
//     wrapper.find('select').simulate('change',{
//      target:value
//     })
//     expect(sortByDate).toHaveBeenCalled();
// })
// test('sort by amount',() => {
//     const value='date'
//     wrapper.setProps({
//         filters:Altfilters
//     })
//     wrapper.find('select').simulate('change',{
//      target:value
//     })
//     expect(sortByAmount).toHaveBeenCalled();
// })