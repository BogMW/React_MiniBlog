import React from "react";
import { Switch, Route } from "react-router-dom";
import SinglePost from "./SinglePost";
import PostGrid from './PostGrid';

import { Provider } from 'react-redux';
import store from '../store';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return {
      posts: state.posts,
      comments: state.comments
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const connected = connect(mapStateToProps, mapDispatchToProps);

const Main = () => (
  <main>
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={connected(PostGrid)} />
            <Route path="/post/:id" component={connected(SinglePost)} />
        </Switch>
    </Provider>
  </main>
);

export default Main;
