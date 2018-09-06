import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import PostGrid from './PostGrid';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    } 
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const GridConnect = connect(mapStateToProps, mapDispatchToProps)(PostGrid);

export default GridConnect;