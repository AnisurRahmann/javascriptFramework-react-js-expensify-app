import {createStore} from 'redux';




// somem rough

//action genarators
 const incrementCount = ({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
 });
 const decrementCount = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
 });
 const resetCount = ()=>({
     type:'RESET'
 })
 const setCount = ({count=0}={})=>({
  type:'SET',
  count
 })

const countReducer=(state={count:10},action)=>{
    switch(action.type){
        case 'DECREMENT':
          
         return {
             count:state.count+action.decrementBy
         };
        case 'INCREMENT' :
          
          return{
              count:state.count+action.incrementBy
          }
        case 'RESET' :
          return {
              count:0
          }
        case 'SET' :
          return{
              count:action.count
          }
        default:
          return state;
    }

 return state;

} 
const store = createStore(countReducer);

store.subscribe(()=>{
  console.log(store.getState());
});


// store.dispatch({
//  type:'INCREMENT',
//  Inby:5
// });
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(decrementCount({decrementBy:5}));
store.dispatch(resetCount());
store.dispatch(setCount({count:100}));

//destructuring
const book={
    title:'all lie about me',
    author:'Mr.Big Me',
    publisher:{

        name:'penguin'
    }

}


const {name:publisherName='anonymus'}= book.publisher;
console.log(publisherName);

//array destrucuraing
 const item=['choco(hot)','$2','$4','$8'];
   const [ItemName,,mediumPrice]=item;
   console.log( `a medium coffe ${ItemName} cost ${mediumPrice}`);



// const incrementCount = ({incrementBy=1}={}) =>({
//     type:'INCREMET',
//     incrementBy
// });
// const decrementCount =({decrementBy=1}={})=>({
//     type:'DECREMENT',
//     decrementBy
// });
// const setCount = ({count=0}={})=>({
//     type:'SET',
//     count
// });
// const resetCount = ()=>({
//     type:'RESET'
// });

// const counrReducer = (state={count:0},action)=>{
//     switch(action.type){
//         case 'INCREMENT':
            
//             return{
//                 count:state.count+action.incrementBy
//             };
//         case 'DECREMENT':
            
//             return{
//                 count:state.count - action.decrementBy
//             };
//         case 'RESET':
//             return{
//                 count:0
//             };
//         case 'SET':
//             return{
//                 count:action.count
//             };
//         default:
//             return state;
        
//     }



// } ;

// const store = createStore(counrReducer);


// const ubsubscribe=store.subscribe(()=>{
//     console.log(store.getState());
// });



// store.dispatch(incrementCount({ incrementBy:5 }));

// // store.dispatch({
// //     type:'INCREMENT',
// //     incrementBy:5
// // });

// store.dispatch(decrementCount());

// store.dispatch(decrementCount({decrementBy:10}));
// store.dispatch(setCount({count:100}));
// store.dispatch(resetCount());