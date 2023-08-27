import moment from "moment";
// import uuid from "react-uud";

const initData = () => {
  const TodoItem = {
    id: "",
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:mm:ss"),
    content: "",
    complete: false,
  };
  return TodoItem;
};
export { initData };
