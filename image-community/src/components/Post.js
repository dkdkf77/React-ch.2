import React from "react";
//컴포넌트 임포트
import Grid from "./Grid";


// 사용자 이미지 , 유저 네임, 작성시간, 수정 버튼, 게시글 이미지, 게시글 텍스트, 게시글 댓글
// 유저 정보 + 게시글 정보
// 수정은 내 정보에 가깝다.

//2021.10.01 1-10 강의
// text , image가 들어 가야 한다.

const Post = (props) => {


//Grid 안에 묶어 줘야 한다.

    return (
      <React.Fragment>
        <Grid padding = "16px">
          <div>user profile / user name / inser_dt </div>
          <div>contents</div>
          <div>image</div>
          <div>comment cnt</div>
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
    user_profile: "https://i1.wp.com/rubyweb.kr/wp-content/uploads/2019/04/iutjiptotolo.png?fit=735%2C456",
  },
  //게시글에 들어가는 이미지
  image_url: "https://i1.wp.com/rubyweb.kr/wp-content/uploads/2019/04/iutjiptotolo.png?fit=735%2C456",
  // 댓글
  contents : "고양이네요",
  // 댓글 갯수
  comment_cnt: 10,
  // 날짜 , 시간
  insert_dt : "2021-10-01 01:30:00",
};

export default Post;
