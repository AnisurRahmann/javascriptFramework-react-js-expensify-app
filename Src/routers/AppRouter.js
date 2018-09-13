import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditeExpensePage from './../components/EditeExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';








const AppRouter = ( ) => (

    <BrowserRouter>
    <div>
    <Header  />
    <Switch>
            <Route   path="/" component={ExpenseDashboardPage}  exact={true}/>
            <Route   path="/add" component={AddExpensePage}  />
            <Route   path="/edite/:id" component={EditeExpensePage}  />
            <Route   path="/help" component={HelpPage}  />
            <Route    component={NotFoundPage}  />
        </Switch>
    </div>
    </BrowserRouter>


);

export default AppRouter;



