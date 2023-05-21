import { FETCH_POST, SET_POSTS } from "./types";

const initialState = {
    posts: [],
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload }
        default: return state
    }
};

export const setPosts = payload => ({type: SET_POSTS, payload})
export const fetchPosts = () => ({ type: FETCH_POST })