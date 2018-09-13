import moment from 'moment';

const filters = {
    text:'',
    sortBy:'date',
    starDate:undefined,
    endDate:undefined
}
const altfilters = {
    text:'bills',
    sortBy:'amount',
    starDate:moment(0),
    endDate:moment(0).add(4,'days')
}
export {filters , altfilters}