import TodoMain from "./comps/TodoMain";
import "./css/App.css";

// App Component Main
const App = () => {
  // 여러가지 설정

  // App Component 의 본문(Body)
  return (
    <div className="App">
      <header>
        <h1>오늘 할일</h1>
      </header>
      <TodoMain />
    </div>
  );
};

// App Component 를 다른 Component, Container 에서 import 할수 있도록
// Export 하기
export default App;
