import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './Application/SiteLayout/components/Layout';
import { Home } from './Application/Home/components/Home';
import { Dashboard } from './Application/Dashboard/components/Dashboard';
import { Form } from './components/Form';
import { Login } from './Application/Login/components/Login';
import { Register } from './Application/Register/components/Register';
import { Calendar } from './Application/Dashboard/components/Calendar';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/form' component={Form} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/calendar' component={Calendar} /> 
</Layout>;