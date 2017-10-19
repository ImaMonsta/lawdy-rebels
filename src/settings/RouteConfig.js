import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

export const RouteConfig = () =>  (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:roomId" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );