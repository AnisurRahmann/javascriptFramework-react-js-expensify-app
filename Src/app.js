import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from  './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


//css imports
import  './styles/styles.scss';
import 'normalize.css/normalize.css';
import { Stream } from 'stream';
import 'react-dates/lib/css/_datepicker.css';



// addexpense -> water bill
// addExpense -> gas bill
// setTextFilter -> bill(2 items) -> water(1 item)
// getVisibleExpenses -> print visible ones to screen 



 const store = configureStore();

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
)

 ReactDOM.render(jsx, document.getElementById('root'));

