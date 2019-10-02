import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../home/home.component';

export const routes = (
    <Router>
      <Route path="/" component={Home} />
    </Router>
)