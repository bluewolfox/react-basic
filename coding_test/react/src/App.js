import React, { useReducer } from "react";
import Toolbar from "./toolbar/Toolbar";
import Content from "./contents/Content";
import "./App.scss";

const initialState = {
  addRoutine: false,
  addTodo: false,
  selected: 0,
  data: [
    { id: 0, name: "2021/05/16", exercises: [{ name: "리액트 공부하기" }] },
  ],
  deleteData: [],
};

const reducer = (state, action) => {
  // prettier-ignore
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_ROUTINE": return { ...state, addRoutine: action.value };
    case "ADD_TODO": return { ...state, addTodo: action.value };
    case "DATA": return { ...state, data: action.value };
    case "SELECTED": return { ...state, selected: action.value };
    case "DELETE_DATA": return { ...state, deleteData: action.value };
  }
};

function App() {
  const [state, setState] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <Toolbar state={state} setState={setState} />
      <Content state={state} setState={setState} />
    </div>
  );
}

export default App;
