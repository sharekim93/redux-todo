import { useSelector } from "react-redux";

const TodoList = () => {
  const todoListState = useSelector((state) => state.list);
  return (
    <table className="todoTable">
      <tr>할 일 목록</tr>
      {todoListState.map((item) => {
        return (
          <tr>
            <td>{item}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default TodoList;
