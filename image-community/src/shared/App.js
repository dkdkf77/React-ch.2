import React from "react"
import './App.css';

//router 
import {BrowserRouter, Route} from "react-router-dom"
//component import
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Header from "../components/Header";
import Grid from "../elements/Grid";
import Signup from "../pages/Signup";


function App() {
  return (
    //App.js 필요없는 파일 없애고 넣기
    // shared로 App.css 파일과 App.js 파일 옮기기
    // 파일 옮기고 나서 index.js 에 App.js 경로 바로 잡기

  
    //PostList로 라우팅 하기 , exact = 같은 항목 빼기  , component = {PostList}, import 하기
    <React.Fragment>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route path ="/" exact component={PostList}/>
          <Route path ="/login" exact component={Login}/>
          <Route path = "/signup" exact component={Signup}/>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
