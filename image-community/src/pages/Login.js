import React from "react";
import {Text, Input, Grid, Button} from "../elements";
import {getCookie, setCookie, deleteCookie} from "../shared/Cookie"

import {useDispatch} from "react-redux"
// as 하면 별명 주기
import {actionCreators as userActions} from "../redux/modules/user";

const Login = (props) => {
  // 로그인 페이지 콤포넌트 
  // setCookie 설정 만료일 3일로 user id = perl 이고 pwd = pppp 이다.
  const dispatch = useDispatch();

  const login = () => {
    dispatch(userActions.loginAction({user_name: 'perl'}));
  };

  return(
    <React.Fragment>
      <Grid padding="16px">
        <Text size ="32px" bold>
          로그인
        </Text>

        <Grid padding = "16px 0px">
          <Input
          label ="아이디"
          placeholder = " 아이디를 입력해주세요."
          _onChange = {() => {
            console.log("아이디 입력 완료!")
          }}/>
        </Grid>
        <Grid padding= "16px 0px">
        <Input
          label ="비밀번호"
          placeholder = " 비밀번호를 입력해주세요."
          _onChange = {() => {
            console.log("비밀번호 입력 완료!")
          }}/>
        </Grid>
        <Button text = "로그인 하기" _onClick={() => {
          console.log('로그인 했어');
          login();
          }}></Button>
      </Grid>

    </React.Fragment>
  )
}

export default Login;