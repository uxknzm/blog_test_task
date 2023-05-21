import { put, takeEvery, call } from "redux-saga/effects"
import axios from "axios";
import { FETCH_COMMENTS } from "../redux/types";
import { setComments } from "../redux/commentsReducer";


const fetchComments= (postId) => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

function* fetchCommentsWorker(action) {
    const {data} = yield call(fetchComments, action.postId);
    yield put(setComments(data));
};

export function* commentsWatcher() {
    yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
};