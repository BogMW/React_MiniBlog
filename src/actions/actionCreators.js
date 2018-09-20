export function getPosts(posts) {
    return {
        type: 'GET_POSTS',
        posts: posts
    }
}

export function getSinglePost(post) {
    return {
        type: 'GET_POST',
        singlePost: post
    }
}

export function getPostUser(user) {
    return {
        type: 'GET_USER',
        postUser: user
    }
}

export function getComments(comments) {
    return {
        type: 'GET_COMMENTS',
        comments 
    }
}