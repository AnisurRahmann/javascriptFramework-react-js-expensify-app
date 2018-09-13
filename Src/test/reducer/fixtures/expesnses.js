import moment from 'moment';

export default [
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