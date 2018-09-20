import React from 'react';
import { Link } from 'react-router-dom';

class PostGrid extends React.Component {

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.props.getPosts(json)
        })  
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

    filterPosts = (e) => {
        e.persist();
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
                this.props.getPosts(json.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value)))
            } 
        )
        .catch(err => console.log(err))
    }

    render() {
        const posts = this.props.posts.posts?this.props.posts.posts:[];
        
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search post" aria-label="Search post" aria-describedby="button-addon2" onKeyUp={this.filterPosts}/>
                </div>
                <div className="row">
                    {posts.map(post => this.renderPost(post))}
                </div>             
            </div>
        );
    }

}

export default PostGrid;