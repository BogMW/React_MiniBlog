export function getPosts() {
    return {
        type: 'GET_POSTS'
    }
}

export function post(postId, i) {
    return {
        type: 'GET_POST',
        postId,
        i
    }
}

export function filterPosts(e) {
    return {
        type: 'FILTER_POSTS',
        searchString: e.target.value
    }
}


export function getComments() {
    return {
        type: 'GET_COMMENTS'
    }
}