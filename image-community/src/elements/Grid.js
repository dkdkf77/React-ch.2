//2021.10.01 1-10 강의
import React from "react";
import styled from "styled-components";


// Grid 컴포넌트 만들어 주기 

const Grid = (props) => {
  const {is_flex, width, margin, padding, bg , children} = props;
// Grid는 바깥을 감싸는 것이라  내부는 children에서 받아 오는 것이다.

  const styles = {
    is_flex : is_flex,
    width : width,
    margin : margin,
    padding : padding,
    bg : bg,
  };


  return(
    <React.Fragment>
      <GridBox {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  )
}

// 오류 방지 초기값 설정 
Grid.defaultProps = {
  children: null,
  is_flex : false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
}

// 스타일 컴퍼넌트 사용 => 
// 넓이 프롭스 값으로 가져 오기 ${(props)=> props.width}
// 프롭스 값에 패딩이 있으면 들고 오고 아니면 다른 값을 들고 와라  ${(props) => props.padding?}
const GridBox = styled.div`
    width : ${(props) => props.width};
    height : 100%
    box-sizing : border-box;
    ${(props) => (props.padding? `padding : ${props.padding};` : "")}
    ${(props) => (props.margin? `margin : ${props.margin};` : "")}
    ${(props) => (props.bg? `background-cikir : ${props.bg};` : "")} 
    ${(props) => 
    (props.is_flex? `display: flex; aligh-items: center; justify-content : space-between 
    ` : "")} 
    
`;

export default Grid;

