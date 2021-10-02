// 액션과 리듀서를 편하게 만들어 준다
import {createAction,handleActions} from "redux-actions";
// immer 불변성 관리 편하게 해준다.
import {produce} from "immer";
import {Action} from "argparse";
import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie";

// firebase export
import {auth} from "../../shared/firebase";
import _ from "lodash";

// 액션생성 함수를 만들어야 액션 객체를 만들어서 쓸수 있다.

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER =  "SET_USER";

// action creators =액션 생성 함수
// 리덕스 액션즈가 없었을때 설정 방법 
// const logIn = () => {
//   return {
//     type : LOG_IN,
//     ... etc
//   }
// }
// 객체로 넘겨주고 리듀서에서 쓸때 
// const reducer = () => {
// switch(Action.type){
//   case "LOG_IN" : {
//     state.user = action.user ; ...
//   }
// }
// }
const logOut = createAction(LOG_OUT, (user) => ({
  user
}));
const getUser = createAction(GET_USER, (user) => ({
  user
}));
const setUser = createAction(SET_USER, (user) => ({
  user
}));

// handleAction 사용시
// const reducer = handleActions({
//     [LOG_IN] : (state, action) => {

//     },

// }, {});


//initialState
const initialState = {
  user: null,
  is_login: false,
};
// 유저의 이니셜
const user_initial = {
  user_name : 'seunghwan12',
}

// middleware actions
const loginAction = (user) => {
  return function (dispatch, getState, {history}) {
    console.log(history)
    dispatch(setUser(user));
    history.push('/');
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, {history}){
    auth
    .createUserWithEmailAndPassword(id, pwd)
    .then((user) => {
    
    console.log(user);

    // 디스플레이 네임에서 유저 네임으로 바꿔 주고 유저네임, 아이디,유저 프로필을 넘겨 주고, 메인 페이지로 돌아가게 해준다 
    // error가 뜨면 콘솔 로그에 error라고 띄워줘
    auth.currentUser.updateProfile({
      displayName: user_name,
    }).then(()=>{
      dispatch(setUser({user_name: user_name, id: id, user_profile: ''}));
      history.push('/');
    }).catch((error)=>{
      console.log(error);
    });
      // Signed in
      
    // ...
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
    console.log(errorCode, errorMessage);
    // ..
    });
  }
}
//reducer
//immer를 여기다 써준다 
// produce 쓰는 방법 state, 원본 값을 받아 온다 .
// 로그인 했을때 initialState에 정해 놓은 것을 user -> 정보를 받아 오고, is_login = true가 된다.
export default handleActions({
  [SET_USER]: (state, action) => produce(state, (draft)=>{
    setCookie("is_login","success");
    draft.user = action.payload.user; //payload에 우리가 준 정보가 담긴다.
    draft.is_login = true; // 로그인 버튼을 누르면 정보를 가져와서 바꿔줌
    
  }),
  [LOG_OUT]: (state, action) => produce(state, (draft)=>{
    deleteCookie("is_login");
    draft.user = null;
    draft.is_login = false; // logout을 누르면 다시 초기 상태로 만듬
  }),
  [GET_USER]: (state, action) => produce(state, (draft)=>{}),
  
  }, 
  initialState
);

// action creator export

const actionCreators = {
  logOut,
  getUser,
  loginAction,
  signupFB,
}

export { actionCreators };