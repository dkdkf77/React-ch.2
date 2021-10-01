import styled from 'styled-components';
import React from 'react';


// image 컴퍼넌트 만들어 주기.
const Image = (props) => {
  // props에서 shape, src, size 받아 오기
  const {shape, src, size} = props;

  const styles = {
    src : src,
    size : size,
  }
  // 만약 형태가 circle이면 imagecircle 스타일은 불러 오고 그게 아니면 네모 그대로 출력

  if(shape === "circle"){
    return (
      <ImageCircle {...styles}></ImageCircle>
    )
  }

  if(shape === "rectangle"){
    return(
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    )
  }

  
  return (
    <React.Fragment>

    </React.Fragment>

  )
}

// image 관련 초기 자료 들어 가기 .
// rectangle = 네모
Image.defaultProps = {
  shape : "circle",
  src : "https://media.istockphoto.com/vectors/background-illustration-in-the-sea-vector-id1236656435?k=20&m=1236656435&s=170667a&w=0&h=mNvfyUQDQ1wU3iVQRcUZnzXDpMfUcFOV1lFvXF8tk1U=",
  size: 36,
}

// 웹사이트라 늘리면 늘어나고 줄이면 넓이가 줄어 들어야 하므로 
// <div> 2개와 <padding>을 이용 하여 만든다.
// 바깥 디브
const AspectOutter = styled.div`
  width : 100%
  min-width: 250px;
`;

// 안쪽 디브, 넓이의 4:3
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%
  overflow: hidden;
  background-image: url("${(props) => props.scr}");
  background-size: cover;
`;

// --size = 3개 똑같은 숫자를 만들기 귀찮을 때 CSS에서 변수를 설정 할수 있다.
const ImageCircle = styled.div`
  --size : ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size : cover;
  margin: 4px;
`;

export default Image;