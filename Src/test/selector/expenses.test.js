import selectExpenses from '../../selectors/expenses'
import moment from 'moment';

const expenses=[
    {
        id:'1',
        description:'ONE',
        note:'one',
        amount:100,
        createdAt:0
    },{
        id:'2',
        description:'TWO',
        note:'two',
        amount:200,
        createdAt:moment().subtract(4,'days').valueOf()
    },{
        id:'3',
        description:'THREE',
        note:'three',
        amount:300,
        createdAt:moment().add(4,'days').valueOf()
    }
]
test('FILTER BY TEXT VALUE',()=>{
    const filters={
        text:'o',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined

    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});
test('FILTER BY START DATWE',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined,
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);

})
test('FILTER BY END DATE',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
})
test('filter by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})
test ('filter sortBy amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})
