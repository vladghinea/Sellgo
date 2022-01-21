import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Pipeline from '../pages/Pipeline'
import Users from '../pages/Users'
import Workboard from '../pages/Workboard'
import RegisterForm from './Account/RegisterForm'
import App from '../App'
import Dashboard from '../pages/Dashboard'


const Routes = () => {
    return (
        <Switch>           
            <Route path='/pipeline' component={Pipeline } />  
            <Route path='/users' component={Users } /> 
            <Route path='/register' component={RegisterForm } />   
            <Route path='/workboard'component={Workboard}/>
            <Route path='/app'component={App}/>
            <Route path='/dashboard' component ={Dashboard} />
        </Switch>
    )
}

export default Routes
