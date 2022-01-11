import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Pipeline from '../pages/Pipeline'


const Routes = () => {
    return (
        <Switch>           
            <Route path='/pipeline' component={Pipeline } />  
            
        </Switch>
    )
}

export default Routes
