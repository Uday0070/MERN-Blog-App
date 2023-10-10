// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'loading...',
        message: 'Data is being loaded, please wait'
    },
    success: {
        title: 'Success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while loading response from the server please try again later'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect to server please check your network connection and try again later'
    }
}

//API SERVICE URL
//SAMPLE REQUEST
//NEED SERVICE CALL: {url: '/' method: POST/GET/PUT/DELETE, parms: true/false, query: false/true}
export const SERVICE_URLS = {
    userSignup: {url: '/signup', method: 'POST'},
    userLogin: {url: '/login', method: 'POST'},
    uploadFile: {url: '/file/upload', method: 'POST'},
    createPost: {url: 'create', method: 'POST'},
    getAllPosts: {url: '/posts', method: 'GET', params: true},
    getPostById: {url: 'post', method: 'GET', query: true},
    updatePost: {url: 'update', method: 'PUT', query: true},
    deletePost: {url: 'delete', method: 'DELETE', query: true},
    newComment: {url: '/comment/new', method: 'POST'},
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
}