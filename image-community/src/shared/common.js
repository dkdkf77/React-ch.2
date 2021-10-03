
export const emailCheck = (email) => {
  let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

  return _reg.test(email);
}
// 정규식 패턴 // 사이에 들어 간다
    // 이메일 aa_-.123Aaa@aa.com
    // ^= 첫글자가 숫자 0~9까지 거나 소문자 a-z 거나 A-Z 
    // _reg 확인 방법