import React from 'react';

class Comments extends React.Component {

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
        .then(response => response.json())
        .then(json => {
            this.props.getComments(json);
        })
        .catch(err => console.log(err))
    }

    render() {
        const  comments = this.props.comments?this.props.comments:[];
        return (
            <div className='col-sm-12'>
               {comments.map(comment => {
                   return (
                    <div className="card" key={comment.id}>
                        <div className="card-body">
                            <p>
                                {comment.body}
                            </p> 
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{comment.email}</cite>
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