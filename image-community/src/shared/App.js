import React from "react"
import './App.css';

//router 
import {BrowserRouter, Route} from "react-router-dom"
//component import
import PostList from "../pages/PostList";


function App() {
  return (
    //App.js 필요없는 파일 없애고 넣기
    // shared로 App.css 파일과 App.js 파일 옮기기
    // 파일 옮기고 나서 index.js 에 App.js 경로 바로 잡기

  
    //PostList로 라우팅 하기 , exact = 같은 항목 빼기  , component = {PostList}, import 하기
    <React.Fragment>
      
      <BrowserRouter>
        <Route pate ="/" exact component={PostList} / >
        
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
