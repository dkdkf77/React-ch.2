// 1. 함수 3가지를 빈것으로 넣어 놓는다.

//가지고 오는 함수, splite를 사용해야 한다.
const getCookie = (name) => {
 let value = "; "+document.cookie;
 
 let parts = value.split(`; ${name}=`); // aa=xx / aaa; abbb=sssss;

 if(parts.length === 2) { // pop 배열의 마지막 요소를 때우는거, 쉬프트 배열의 첫번째 요소를 때우는거
  return parts.pop().split(";").shift(); // aa=xx / aaa; abbb=sssss; => aaa; abbb=sssss; 만 나온다
 }
};

//이름과 값과 만료일을 가져와야 한다 exp의 =5 는 exp를 인수로 받아 오지 않아도 
//setCookie의 함수는 exp 를 사용할 수 있는 기본 값을 넣어 준다 
// let date = new Date () = 날짜를 받아 오기 위해 변수 설정 
//  date.setTime(date.getTime() + exp*24*60*60*1000); 
// 만료일 만큼의 날짜를 설정
// date.toUTCString() = 문자로 넘겨 받는다 
const setCookie = (name, value, exp=5) => {

    let date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = `${name}=${value}; expires= ${date.toUTCString()}`;
}

const deleteCookie = (name) => {
    let date = new Date ("2020-01-01").toUTCString();

    console.log(date);

    document.cookie = name+"=; expires="+date;
};

export {getCookie, setCookie, deleteCookie};