import React from "react";
import {Text, Input, Grid, Button} from "../elements";
import {getCookie, setCookie, deleteCookie} from "../shared/Cookie"

import {useDispatch} from "react-redux"
// as 하면 별명 주기
import {actionCreators as userActions} from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  // 로그인 페이지 콤포넌트 
  // setCookie 설정 만료일 3일로 user id = perl 이고 pwd = pppp 이다.
  const dispatch = useDispatch();

  const [id, setID] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {

    console.log(id);

    if(id === "" || pwd === ""){
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    if(!emailCheck(id)){
      window.alert("이메일 형식이 맞지 않습니다.!");
      return;
    }

    dispatch(userActions.loginFb(id, pwd));
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
          _onChange = {(e) => {
            setID(e.target.value);
          }}
        />
        </Grid>
        <Grid padding= "16px 0px">
        <Input
          label ="비밀번호"
          placeholder = " 비밀번호를 입력해주세요."
          type= "password"
          _onChange = {(e) => {
            setPwd(e.target.value);
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