import React from "react";
import { Switch, Route } from "react-router-dom";
// import PostGrid from "./PostGrid";
import SinglePost from "./SinglePost";

import { Provider } from 'react-redux';
import store from '../store';
import GridConnect from "./GridConnect";

const Main = () => (
  <main>
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={GridConnect} />
            <Route path="/post/:id" component={SinglePost} />
        </Switch>
    </Provider>

  </main>
);

export default Main;
