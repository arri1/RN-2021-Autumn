export const SET_TITLE = 'SET_TITLE';

export const setTitle = (id,title, body, like) => dispatch => {
    dispatch({
        type: SET_TITLE,
        payloadID:id,
        payloadTitle: title,
        payloadBody: body,
        payloadLikes: like
    })
};

