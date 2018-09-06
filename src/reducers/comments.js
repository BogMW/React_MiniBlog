const defaultState = getComments();

async function getComments(){
    return await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => json)
}

function comments(state = defaultState, action) {
    switch(action.type) {
        case 'GET_COMMENTS':
            console.log('Get all comments');
            return state; 
        default: 
            return state; 
    }
} 

export default comments;