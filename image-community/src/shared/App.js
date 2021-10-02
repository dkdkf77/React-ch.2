import React from "react"
import './App.css';

//router 
import {BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import {history} from "../redux/configureStore";

//component import
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Header from "../components/Header";
import {Grid, Button} from "../elements";
import Signup from "../pages/Signup";
import Permit from "./permit";

import {actionCreators as userActions} from "../redux/modules/user";
import {useDispatch} from "react-redux";
import { apiKey } from "./firebase";


//yarn add redux react-redux redux-thunk redux-logger history@4.10.1 connected-react-router@6.8.0
// 리덕스 관련 새로고침으로 인한 자료 망가짐을 방지하는 패키지
//yarn add immer redux-actions
//자동화 해서 편하게 만들어 주는 리덕스 액션

function App() {
  const dispatch = useDispatch();

  const _session_Key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_Key)? true: false;

  React.useEffect(() => {
    if(is_session) {
      dispatch(userActions.loginCheckFB);
    }

  },[]);
  return (
    //App.js 필요없는 파일 없애고 넣기
    // shared로 App.css 파일과 App.js 파일 옮기기
    // 파일 옮기고 나서 index.js 에 App.js 경로 바로 잡기

  
    //PostList로 라우팅 하기 , exact = 같은 항목 빼기  , component = {PostList}, import 하기
    //브라우저라우터 -> 커넥티드라우터 그리고 히스토리 주기
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history ={history}> 
          <Route path ="/" exact component={PostList}/>
          <Route path ="/login" exact component={Login}/>
          <Route path = "/signup" exact component={Signup}/>
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+"></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
