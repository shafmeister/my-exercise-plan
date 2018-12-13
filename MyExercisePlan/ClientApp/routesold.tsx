import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './Application/SiteLayout/components/Layout';
import Home from './Application/Home/components/Home';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
</Layout>;
