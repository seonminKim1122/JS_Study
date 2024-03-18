const birthday = '18.04.1982';
const age = Date.now - birthday;

// birthday 와 age 를 대문자 상수로 바꾸는 것은 괜찮은 선택인가?
// 대문자 상수는 하드코딩된, 이미 알고 있는 값을 가진 변수의 네이밍에 사용합니다.
// 생년월일은 바뀔 일이 없어 대문자 상수로 변환하는 게 적합하지만, age 는 올해랑 내년이 다르기 때문에 런타임에 결정되므로 대문자 상수로의 변환은 부적절합니다.