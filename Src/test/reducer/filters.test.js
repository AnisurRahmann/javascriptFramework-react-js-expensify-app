import  filterReducer from  '../../reducers/filters';
import moment from 'moment';
 test('default filters value',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
 })
 test('set filter text',()=>{
    const text='my text';
    const action={
        type :'SET_TEXT_FILTER',
        text
    }
    const state = filterReducer(undefined,action);
    expect(state.text).toBe(text)
 })
test('set sort by amount',()=>{
    const sortBy="amount"
    const action={
        type:'SORT_BY_AMOUNT',
        sortBy
    }
    const state= filterReducer(undefined,action);
    expect(state.sortBy).toBe('amount')
})
test('set sorb by date',()=>{
    const sortBy='date'
    const action={
        type:'SORT_BY_DATE',
        sortBy
    }
    const state = filterReducer(undefined,action);
    expect(state.sortBy).toBe('date');
})
test('set start date',()=>{
    const startDate=1000;
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filterReducer(undefined,action);
    expect(state.startDate).toBe(startDate)
})
test('set end date',()=>{
    const endDate=1000;
    const action={
        type:'SET_END_DATE',
        endDate
    }
    const state=filterReducer(undefined,action);
    expect(state.endDate).toBe(endDate);
})
