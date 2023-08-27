import TodoItem from "./TodoItem";

// 추가된 TodoList 배열의 리스트를 화면에 출력하는 Component
const TodoList = (props) => {
  // const [todoList, setTodoList] = useState([...SampleData]);
  const { todoList, itemComplete, itemDelete, updateItemSelect } =
    props;

  // 배열의 요소에 어떤 연산(가공)을 하고, 다시 새로운 배열을 생성
  // 배열.map((item)=>{ return 새로운 값 })
  // todoList 데이터의 각 요소를 item 이라는 변수(properties)에 담아서
  // TodoItem 에게 전달하는 Component List 를 만들기
  const todoItemList = todoList.map((todo) => {
    return (
      <TodoItem
        item={todo}
        key={todo.id}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    );
  });
  return <>{todoItemList}</>;
};

export default TodoList;
