import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore, storage } from '../../shared/firebase';
import 'moment';
import moment from 'moment';

import { actionCreators as imageACtions } from './image';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

//post 하나에 게시글 뭐가 들어가야 하는지 정보
const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: 'SeungHwan',
  //   user_profile:
  //     'https://media.istockphoto.com/vectors/background-illustration-in-the-sea-vector-id1236656435?k=20&m=1236656435&s=170667a&w=0&h=mNvfyUQDQ1wU3iVQRcUZnzXDpMfUcFOV1lFvXF8tk1U=',
  // },
  //게시글에 들어가는 이미지
  image_url:
    'https://media.istockphoto.com/vectors/background-illustration-in-the-sea-vector-id1236656435?k=20&m=1236656435&s=170667a&w=0&h=mNvfyUQDQ1wU3iVQRcUZnzXDpMfUcFOV1lFvXF8tk1U=',
  // 댓글
  contents: '',
  // 댓글 갯수
  comment_cnt: 0,
  // 모멘트를 이용한 날짜 , 시간
  insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
};

const addPostFB = (contents = '') => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');
    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
    };

    const _image = getState().image.preview;
    console.log(_image);
    console.log(typeof _image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, 'date_url');

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);

          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              dispatch(addPost(post));
              history.replace('/');

              dispatch(imageACtions.setPreview(null));
            })
            .catch((err) => {
              window.alert("앗! 포스트 작성에 문제가 있어요!")
              console.log('post 작성에 실패했어요!', err);
            });
          //~~~.add({aaaasdfasdf})
        });
    }).catch((err) => {
      window.alert("앗! 이미지 업로드에 문제가 있어요!");
      console.log('앗! 이미지 업로드에 문제가 있어요!', err);
    })
  };
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();
        //['comment_cnt', 'contents', ..]
        // 배열의 내장함수
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf('user_') !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        post_list.push(post);
      });

      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };