import React from 'react';
import {shallow} from 'enzyme';
import expense from   '../reducer/fixtures/expesnses';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';
import { WSAEPROVIDERFAILEDINIT } from 'constants';

test('test expense form',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})
test('test expense form with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expense[1]} />);
    expect(wrapper).toMatchSnapshot();
})
test('test expnese submit handler',()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{

        }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)

    
})
test('test expnse form description on input change',() => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('descriptions')).toBe(value)

})
test('render amppunt on input change',() => {
    const value ='New note';
    const wrapper = shallow( <ExpenseForm />  )
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
})
test('set amount if valid',() => {
    const value = '12.50'
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})
test('not set amount if valid',() => {
    const value = '12.505'
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})
test('call on sbumit from',() => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow( <ExpenseForm expenses={expense[0]} onSubmit={onSubmitSpy}  /> )
    wrapper.find('form').simulate('submit',{
        preventDefault:() => {  }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expense[0].description,
        note:expense[0].note,
        amount:expense[0].amount/10,
        createdAt:expense[0].createdAt
    })
})
// test('change on single date picker',()=> {
//   const now = moment();
//   const wrapper = shallow( <ExpenseForm  /> );
//   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//   expect(wrapper.state('createdAt')).toEqual(now);
// })
// test('onfocus handle change',() => {
//     const focused=true;
//     const wrapper= shallow(<ExpenseForm />)
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
//     expect(wrapper.state('calenderFocused')).toBe(focused)
// })