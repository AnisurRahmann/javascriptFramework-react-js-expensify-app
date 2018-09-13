import {setStartDate,setEndDate,setTextFilter,sortByAmount,sortByDate} from '../../actions/filters'
import moment from 'moment';
test('should genarate setStartdDate',()=>{
    const action=setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)

    })
});
test('should genarate setendDate',()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
});
test('set text filter',()=>{
    const text='text'
    const action=setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})
test('set text filter without $text',()=>{
    
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})
test('sort by amount',()=>{
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('sort by date',()=>{
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    })
})