import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Form } from './components/Form';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Calendar } from './components/Calendar';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/form' component={Form} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/calendar' component={Calendar} /> 
</Layout>;