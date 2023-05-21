import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_POST } from "../redux/types";
import { setPosts } from "../redux/postsReducer";
import axios from "axios";

const axiosrequest1 = axios.get('https://jsonplaceholder.typicode.com/posts');
const axiosrequest2 = axios.get('https://jsonplaceholder.typicode.com/users');
const axiosrequest3 = axios.get('https://jsonplaceholder.typicode.com/photos');

const fetchUPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            axios.all([axiosrequest1, axiosrequest2, axiosrequest3]).then(axios.spread(function (res1, res2, res3) {
                const { data: posts } = res1;
                const { data: users } = res2;
                const { data: photos } = res3;
                const usersObj = Object.fromEntries(users.map((n) => [n.id, n]));
                const photosObj = Object.fromEntries(photos.map((n) => [n.id, n]));
                resolve(posts.map((n) => ({
                    photo: photosObj[n.userId],
                    post: n,
                    user: usersObj[n.userId]
                })));
            }));
        }, 500);
    });
};

function* fetchPostsWorker() {
    const posts = yield call(fetchUPosts);
    yield put(setPosts(posts));
};

export function* postsWatcher() {
    yield takeEvery(FETCH_POST, fetchPostsWorker);
};