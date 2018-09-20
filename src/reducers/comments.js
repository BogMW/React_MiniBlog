function comments(state = [], action) {
    switch(action.type) {
        case 'GET_COMMENTS':
        return {
            ...state,
            comments: action.comments
        }
        default: 
            return state; 
    }
} 

export default comments;