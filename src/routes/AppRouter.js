import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Header from '../components/Header';
import LoadMorePage from '../pages/LoadMorePage';
import PaginationPage from '../pages/PaginationPage';
import ProfilePage from '../pages/ProfilePage';

const AppRouter = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path='/' component={LoadMorePage} exact={true}></Route>
            <Route path='/pagination' component={PaginationPage} exact={true}></Route>
            <Route path='/profile' component={ProfilePage} exact={true}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;