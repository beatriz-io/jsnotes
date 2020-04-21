import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './screens/Home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/Notes/index'
import UserEdit from './screens/users/edit'
import PrivateRouter from './components/auth/private_router';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRouter exact path='/notes' component={NotesIndex} />
            <PrivateRouter exact path='/users/edit' component={UserEdit} />
        </Switch>
    </BrowserRouter>
)

export default Routes;