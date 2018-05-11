import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { QuestionForm, Result } from '../scenes/';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={QuestionForm} />
      <Route path="/result" exact component={Result} />
    </Switch>
  </BrowserRouter>
);
