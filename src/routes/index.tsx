import React from 'react'

import {Switch, Route} from 'react-router-dom'

import Dashborad from '../pages/dashboard'
import Country from '../pages/country'
import Dashboard from '../pages/dashboard'

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/country' component={Country} />
    </Switch>
)

export default Routes;
