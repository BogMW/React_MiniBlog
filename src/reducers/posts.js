const defaultState = getPosts();

async function getPosts(){
    return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json)
}

async function filterPosts(searchString){
    return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.filter(post => post.title.includes(searchString) || post.body.includes(searchString))
    )
    .catch(err => console.log(err))
}

function posts(state = defaultState, action) {
    switch(action.type) {
        case 'GET_POSTS':
            return state
        case 'GET_POST':
            return state    
        case 'FILTER_POSTS':
            return filterPosts(action.searchString);
        default: 
            return state
    }
}

export default posts;