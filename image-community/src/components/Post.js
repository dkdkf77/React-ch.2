import React from "react";
//컴포넌트 임포트

// 모아서 여러줄의 임포트를 하나로 줄일수 있다. 
import {Grid, Image, Text, Input} from "../elements"



// 사용자 이미지 , 유저 네임, 작성시간, 수정 버튼, 게시글 이미지, 게시글 텍스트, 게시글 댓글
// 유저 정보 + 게시글 정보
// 수정은 내 정보에 가깝다.

//2021.10.01 1-10 강의
// text , image가 들어 가야 한다.

const Post = (props) => {


//Grid 안에 묶어 줘야 한다.
// 1번째 Grid에 이미지가 들어 가야 한다.

    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex>
            <Image shape="circle" src={props.src}/>
            <Text bold>{props.user_info.user_name}</Text>
            <Text>{props.insert_dt}</Text>
          </Grid>
          <Grid padding = "16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.src}/>
          </Grid>
          <Grid padding = "16px">
            <Text bold>댓글{props.comment_cnt}개</Text>
          </Grid>   
        </Grid>
      </React.Fragment>
    )
}


// 게시글 정보에 유저 정보는 목록의 데이터를 가지고 있다가 게시글 하나에 전달 해주는게 좋다
// props 로 받아 와야 한다.
// props가 없어서 오류 및 화면이 깨지는 것을 방지 하기 위해 미리 데이터를 넣어 놓는 것이다.

// 필요 값을 넣어 준다 . key : value

Post.defaultProps = {
  // 유저 네임, 유저 프로필
  user_info : {
    user_name : "SeungHwan",
    user_profile: "https://media.istockphoto.com/vectors/background-illustration-in-the-sea-vector-id1236656435?k=20&m=1236656435&s=170667a&w=0&h=mNvfyUQDQ1wU3iVQRcUZnzXDpMfUcFOV1lFvXF8tk1U=",
  },
  //게시글에 들어가는 이미지
  image_url: "https://media.istockphoto.com/vectors/background-illustration-in-the-sea-vector-id1236656435?k=20&m=1236656435&s=170667a&w=0&h=mNvfyUQDQ1wU3iVQRcUZnzXDpMfUcFOV1lFvXF8tk1U=",
  // 댓글
  contents : "고양이네요",
  // 댓글 갯수
  comment_cnt: 10,
  // 날짜 , 시간
  insert_dt : "2021-10-01 01:30:00",
};

export default Post;
