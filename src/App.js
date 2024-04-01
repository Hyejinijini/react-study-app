// import & export 사용 방법 !
/*
  1. import (식별자: 변수, 함수 클래스) from "(경로)";
    → 변수는 { 변수 } 중괄호를 사용
  2. export { 식별자 }; 
    → 함수형 컴포넌트를 작성 후 괄호 전부 닫고 마지막 줄에서 작성
*/

import './App.css'; // import를 이용해 App.css 파일을 불러오기
import { useState } from 'react'; // React State Hook → 리액트 패키지에서 useState 함수 불러오기
import AppChild from './components/Appchild'; // import를 이용해 우리가 만든 Appchilde 컴포넌트 불러오기

function App() { 
  // 자바스크립트 부분
  console.log("함수 컴포넌트 렌더링");
  // 첫 번째 리액트 값 넣기
  // title 변수 선언 및 할당
  const title = "리액트를 시작하자";
  // 두 번째 리액트 값 넣기 state 사용
  // 저장한 state는 set을 사용해서만 바꿀 수 있어요
  /*
    useState의 반환값은 배열이라서 중괄호 대신 대괄호 사용
    여기서 date: 상태 값 할당
    setDate: 해당 값을 변경할 수 있는 함수가 할당
  */
  const [date, setDate] = useState("2024년 3월 31일");

  // 자식한테 줄 자산
  // cfildTitle 변수 선언 및 할당
  const childTitle = "너는 자식이야";

  // btnHanlder 함수 정의
  const btnHanlder = () => {
    setDate("4월 1일");
  }

  // jsx 부분
  return (
    // jsx 를 작성할 때 인라인으로 style 속성을 사용하려면, className으로 작성해줘야함
    <div className="App">
      <div className='nav'>
        <div>개발 일기</div>
      </div>
      <div className='list'>
        {/* // 변수를 사용할 때는 { 변수 } 중괄호를 사용 */}
        <h2>{title}</h2>
        <p>{date}</p>
        {/* 버튼 클릭하면 btnHanlder 함수 실행 */}
        <button type='button' onClick={btnHanlder}>4월 1일로 변경</button>
      </div>
      {/* // 위에서 import로 가져온 함수 컴포넌트 childTitle에 childTitle변수 적용 */}
      <AppChild title={childTitle} />
    </div>
  );
}

export default App;
