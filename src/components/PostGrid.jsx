import React from 'react';
import { Link } from 'react-router-dom';

class PostGrid extends React.Component {

    state = {
        posts: []
    }

    componentWillMount() {
        this.props.posts.then(response => this.setState({posts: response}));
    }

    componentWillReceiveProps() {
        this.props.posts.then(response => this.setState({posts: response}));
    }

    renderPost = (post) => {
      return (
        <div key={post.id} className="col-sm-6">
            <div className="card mb-3">
            <div className="card-header">
                <Link to={`/post/${post.id}`}>
                    {post.title}
                </Link>  
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{post.body}</p>
                </blockquote>
            </div>
            </div>
        </div>
    )}

    render() {
        const { posts } = this.state;
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search post" aria-label="Search post" aria-describedby="button-addon2" onKeyUp={this.props.filterPosts}/>
                </div>
                <div className="row">
                    {posts.map(post => this.renderPost(post))}
                </div>             
            </div>
        );
    }

}

export default PostGrid;