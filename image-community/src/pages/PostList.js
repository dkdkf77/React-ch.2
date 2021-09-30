//PostList.js
// react 
import React from "react"
// router

// 포스트 목록 페이지에서 불러 오기
import Post from "../components/Post"

// props로 상속 받는 컴퍼넌트를 하나 만들어 준다. 
// post에서 받는다.
const PostList = (props) => {

  return (
    <React.Fragment>
      <Post/>
    </React.Fragment>

  )
}

export default PostList;