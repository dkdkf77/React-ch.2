import React from "react";
import { Grid, Text , Button} from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";


const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false); // 처음에는 로그인 안 했다.
  
  React.useEffect(() => {


      let cookie = getCookie("user_id");

      console.log(cookie); // 쿠키가 잘 들어 오는지 찍어 보기

      if (cookie){ // 만약 쿠키가 들어 온다면 setIsLogin이 true, 아니면 false
        setIsLogin(true);
      }else
        setIsLogin(false);
    });

  if (is_login){
    return(
      <React.Fragment>
        <Grid is_flex padding ="4px 16px">
          <Grid>
            <Text margin="0px" size ="24px" bold>헬로</Text>
          </Grid>
          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림"></Button>
            <Button text="로그아웃" _onClick ={() => {deleteCookie("user_id");}}></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }


  


  return (
    <React.Fragment>
      <Grid is_flex padding ="4px 16px">
        <Grid>
          <Text margin="0px" size ="24px" bold>헬로</Text>
        </Grid>
        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

Header.defaultProps = {}


export default Header
