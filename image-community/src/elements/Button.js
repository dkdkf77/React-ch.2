import React from "react";
import styled from "styled-components";

const Button = (props) => {
// 무한 루프 현상 = 로딩창이 계속 로딩이 안되고 무한으로 돌고 있다.
  const {text, _onClick, is_float, children, margin, width } = props;
  
  if(is_float){
    return (
      <React.Fragment>
        <FloatButton oncClick = {_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    )
  }

  const styles = {
    margin : margin,
    width : width,
  };
  return(
    <React.Fragment>
      <ElButton onClick={_onClick}>{text ? text: children}</ElButton>
    </React.Fragment>
  );
}

Button.defaultProps ={
  text : false,
  children : null,
  _onClick : () => {},
  is_float: false,
  margin: false,
  width: '100%',
};

// 버튼 스타일 주기 
const ElButton = styled.button`
  width: 100%; ${(props) => props.width}
  background-color : #212121;
  color: #ffffff;
  padding : 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  padding: 16px;
  box-sizing : border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius: 50px;
`;

export default Button;