import { ADD_COMMENT, LOAD_COMMENTS, LOAD_ALL_COMMENTS, LOAD_COMMENTS_PAGE } from '../constants'


export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            comment, articleId
        },
        generateRandomId: true
    }
}

export function loadComments(articleId) {
    return {
        type: LOAD_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadAllComments() {
    return {
        type: LOAD_ALL_COMMENTS,
        callAPI: `/api/comment`
    }
}

export function loadCommentsPage(page, offset) {
    return {
        type: LOAD_COMMENTS_PAGE,
        payload: { page },
        callAPI: `/api/comment?limit=5&offset=${offset}`
    }
}
