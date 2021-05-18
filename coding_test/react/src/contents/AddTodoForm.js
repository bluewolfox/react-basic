import React, { useState } from "react";

const AddTodoForm = ({ state, setState }) => {
  const [todo, setTodo] = useState("");

  const onSubmitTodo = (e) => {
    e.preventDefault();
    const stateObj = [...state.data];
    stateObj[state.selected].exercises = [
      ...stateObj[state.selected].exercises,
      { name: todo },
    ];
    setState({ type: "DATA", value: stateObj });
    setState({ type: "ADD_TODO", value: false });
  };

  return (
    <form className="add-exercise-form" onSubmit={onSubmitTodo}>
      <div className="add-exercise-field">
        <div className="input-field">
          <div className="exercise-name-input">
            <label htmlFor="ex-name">할일</label>
            <input
              type="text"
              placeholder="할일을 입력하세요"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-field">
          <button className="ex-submit" type="submit">
            저장
          </button>
          <button
            className="ex-cancel"
            type="button"
            onClick={() => setState({ type: "ADD_TODO", value: false })}
          >
            취소
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
