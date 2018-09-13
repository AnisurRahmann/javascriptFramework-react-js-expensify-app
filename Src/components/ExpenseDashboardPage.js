import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilters from './ExpensesFilters';

const ExpenseDashboardPage = () => (
    <div>
       <ExpensesFilters />
       <ExpensesList />
    </div>
);
export default ExpenseDashboardPage;