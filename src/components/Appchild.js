// 컴포넌트 만드는 방법
// 1 - 대문자 이름으로 시작하는 함수를 만들어 줍니다.
// 2 - 그리고 그 함수를 export default 함수명 이렇게 모듈화를 해줍니다.
// 3 - return (html 코드) 해서 리턴 밑에는 무조건 jsx가 들어가요.
// 4 - 얘네가 우리가 만든 이 함수형 컴포넌트를 반환해주는 역할을 해줘요.
// 5 - 필요한거는 그 리턴 위에 자바스크립트로 하시면 됩니다.

function AppChild(props) {
    // 자바스크립트
    // props 란?
    // 부모가 자식한테 데이터를 주는 방법: props를 이용하면 된다.
    // 부모가 자식에게 props를 통해 데이터를 줄 수 있음
    // 준 데이터들은 props에 저장되어 있음
    console.log("AppChiled 렌더링", props);

    // 리턴 (jsx)
    return (
        <div>
            <h2>AppChild</h2>
            {/* App.js 에서 준 childTitle 변수 적용시키는 방법 */}
            <p>{props.title}</p>
        </div>
    );
}

export default AppChild;