import { FETCH_COMMENTS, SET_COMMENTS } from "./types";


const initialState = {
    comments: {},
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return { ...state, comments: {
                // разделяем коменты по посту, сделал для того чтобы при открытии другого коментария предыдущий не пропадал 
                ...state.comments, [action.payload[0].postId]: action.payload
            }}
        default: return state
    }
};

export const setComments = payload => ({type: SET_COMMENTS, payload})
export const fetchComments = (postId) => ({ type: FETCH_COMMENTS, postId })