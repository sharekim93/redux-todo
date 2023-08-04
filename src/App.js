import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import AddContainer from "./components/AddContainer";
import TodoList from "./components/TodoList";
import reducer from "./reducers";

// redux 에서 이제는 redux toolkit 을 사용하라고 한다.
// 현재는 배우는 과정이니 다음엔 toolkit 으로 해보자.
const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <h1>Redux Todo-list</h1>
      <Provider store={store}>
        <AddContainer />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
