//PostList.js
// react 
import React from "react"
import { useSelector, useDispatch} from "react-redux"
// router

// 포스트 목록 페이지에서 불러 오기
import Post from "../components/Post"
import {actionCreators as postActions} from "../redux/modules/Post";

// props로 상속 받는 컴퍼넌트를 하나 만들어 준다. 
// post에서 받는다.
const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list)
  
  console.log(post_list)
  
  React.useEffect(()=>{
    
    if(post_list.length === 0){
      dispatch(postActions.getPostFB());
    }
    
  }, []);

  return (
    <React.Fragment>
      {/* <Post/> */}
      {post_list.map((p, idx)=>{
        return <Post key={p.id} {...p}/>
      })}
    </React.Fragment>

  )
}

export default PostList;