import React from 'react';
import Comments from './Coments';

class singlePost extends React.Component {

    state = {
        post: {},
        user: {}
    }
    
    componentWillMount() {
         fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(json => {
            this.setState({post: json});
            fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`)
            .then(response => response.json())
            .then(json => this.setState({user: json}))
            .catch(err => console.log(err))
        }) 
        .catch(err => console.log(err))
    }
   
    render() {
        const { post, user }  = this.state;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <h4 className="card-header">{post.title}</h4>
                        <div className="card-body">
                            <p className="card-text">{post.body}</p>
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{user.email}</cite>
                            </footer>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mt-3">
                    <h3>Comments</h3>
                </div>
                <Comments postId={this.props.match.params.id}/>
            </div>
        )
    }
}

export default singlePost;