import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Auth from './components/Auth';
import Post from './components/Post';

export default function Routes(){
    return(
        <Switch>

            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/post/:id' component={Post}/>
            <Route path='/new' component={Form}/> 
            <Route exact path='/' component={Auth}/>      
        </Switch>
    )
}