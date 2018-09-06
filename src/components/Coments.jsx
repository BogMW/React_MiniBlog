import React from 'react';

class Comments extends React.Component {

    state = {
        comments: {}
    }

    componentWillMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
        .then(response => response.json())
        .then(json => this.setState({comments: json}))
        .catch(err => console.log(err))
    }

    render() {
        const comments = this.state.comments;
        return (
            <div className='col-sm-12'>
               {Object.keys(comments).map(key => {
                   return (
                    <div className="card" key={key}>
                        <div className="card-body">
                            <p>
                                {comments[key].body}
                            </p> 
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{comments[key].email}</cite>
                            </footer>
                        </div>
                    </div>
                   )
               })}
            </div>
        )
    }
}

export default Comments;