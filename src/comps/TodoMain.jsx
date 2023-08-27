import TodoInput from "./TodoInput";
import { useState, useEffect } from "react";
import "../css/Todo.css";
import TodoList from "./TodoList";
import { initData } from "../data/initData";
import uuid from "react-uuid";

// JS 에서 날짜와 관련된 여러가지 문제를 해결한 plug in
// Date 라고 하는 날짜와 관련된 객체 있지만
// 실무에서는 거의 moment 를 사용한다
// import moment from "moment";

const TodoMain = () => {
  /**
   * State 끌어 올리기
   * TodoInput 과 TodoList 에 있던 state 들을
   *  TodoMain 부모 컴포넌트로 이동
   * 1. TodoInput 에서 입력된 content state 의 값을
   * 2. TodoList 의 todoList state 배열에 추가하여
   * 3. TodoList > TodoItem 을 통하여 화면에 출력을 해야한다
   *
   * 이 상황에서 TodoInput 과 TodoList 는 같은 부모의 형제간이다
   *    React 에서는 형제간에 state 를 절대 공유할수 없다
   *    React 부모가 만들어서 전달해준 State 만 볼수 있다
   *    자식이 만든 State 는 부모도 볼수 없다
   *
   * 이 상황을 해결하기 위하여 자식 Comps 있던 state와 state 함수를
   * 부모 Comps 인 TodoMain 으로 끌어 올리기를 한다
   * 그리고, 자식 Comps 에 전달해주어야 한다
   */
  const [todo, setTodo] = useState(() => initData());
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    setTodo(initData());
    console.log("todo Effect");
  }, [todoList]);

  const todoListAdd = (content) => {
    const newTodo = { ...todo, id: uuid(), content };
    setTodoList([...todoList, newTodo]);
  };

  const itemComplete = (id) => {
    // 완료처리 예정
    const compTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...compTodoList]);
  };

  const itemDelete = (id) => {
    // id 에 해당하는 데이터 삭제
    if (window.confirm("정말 삭제 할거야?")) {
      // list를 forEach 하면서 item의 id 와 일치하는 데이터가 있으면
      // 해당 데이터를 제외하면서 새로운 리스트 만들기
      // 전달받은 Id 와 일치하지 않은 item 만 모아서 새로운 배열 만들기
      const deleteTodoList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  // Content 를 클릭했을때 선택된 item 을 찾아주는 함수
  const updateItemSelect = (id) => {
    const selectTodoList = todoList.filter((item) => {
      return item.id === id;
    });
    // update 를 위한 데이터 todo 에 저장
    setTodo({ ...selectTodoList[0] });
  };

  // 내용을 변경하고 저장을 클릭했을때 내용을 변경하는 함수
  const todoInput = (content) => {
    if (!todo.id) {
      todoListAdd(content);
    } else {
      const updateTodo = { ...todo, content };
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return updateTodo;
        }
        return item;
      });
      setTodoList([...updateTodoList]);
    }
  };

  return (
    <div className="todo">
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        todoInput={todoInput}
      />
      <TodoList
        itemDelete={itemDelete}
        todoList={todoList}
        itemComplete={itemComplete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};
export default TodoMain;
