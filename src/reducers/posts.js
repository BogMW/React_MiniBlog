async function filterPosts(searchString){
    return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.filter(post => post.title.includes(searchString) || post.body.includes(searchString))
    )
    .catch(err => console.log(err))
}

function posts(state = {}, action) {
    switch(action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'GET_POST':
            return {
                ...state,
                post: action.singlePost
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.postUser
            }
        case 'FILTER_POSTS':
            return filterPosts(action.searchString);
        default: 
            return state
    }
}

export default posts;