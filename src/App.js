import './App.css';
import { useState } from 'react'; // React Hooks
import AppChild from './components/Appchild';

function App() {
  console.log("함수 컴포넌트 렌더링");
  // 첫 번째 리액트 값 넣기
  const title = "리액트를 시작하자";
  // 두 번째 리액트 값 넣기 state 사용
  // 저장한 state는 set을 사용해서만 바꿀 수 있어요
  const [date, setDate] = useState("2024년 3월 31일");

  // 자식한테 줄 자산
  const childTitle = "너는 자식이야";

  const btnHanlder = () => {
    setDate("4월 1일");
  }

  return (
    <div className="App">
      <div className='nav'>
        <div>개발 일기</div>
      </div>
      <div className='list'>
        <h2>{title}</h2>
        <p>{date}</p>
        <button type='button' onClick={btnHanlder}>4월 1일로 변경</button>
      </div>
      <AppChild title={childTitle} />
    </div>
  );
}

export default App;
