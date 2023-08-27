// 부모 Component 에서 전달한 Properties 는 props 라는 키워드를
// 매개변수로 지정하여 받는다
const TodoItem = (props) => {
  const { item, itemComplete, itemDelete, updateItemSelect } = props;

  const compClickHandler = (e, id) => {
    // 완료 버튼을 클릭했을때 완료 처리
    itemComplete(id);
  };

  const deleteClickHandler = (e, id) => {
    itemDelete(id);
  };

  const contentClickHandler = (e, id) => {
    updateItemSelect(id);
  };

  return (
    <div className="item">
      <div
        className="delete"
        onClick={(e) => deleteClickHandler(e, item.id)}
      >
        &times;
      </div>
      <div className="sdate">
        <div>{props.item.sdate}</div>
        <div>{props.item.stime}</div>
      </div>
      <div
        onClick={(e) => contentClickHandler(e, item.id)}
        className={props.item.complete ? "content line" : "content"}
      >
        {props.item.content}
      </div>
      <div
        className="complete"
        onClick={(e) => compClickHandler(e, item.id)}
      >
        &#x2713;
      </div>
    </div>
  );
};

export default TodoItem;
