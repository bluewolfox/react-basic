import React from "react";

const Toolbar = ({ state, setState }) => {
  return (
    <div className="toolbar">
      <header className="header">Lists</header>
      <section className="utils-section">
        <div className="routine-control">
          <button
            className="add-routine-button"
            onClick={() => setState({ type: "ADD_ROUTINE", value: !state.addRoutine })}
          >
            목록 추가
          </button>
        </div>
        <div className="exercise-control">
          <div className="buttons">
            <button
              className="add-exercise-button"
              onClick={() => setState({ type: "ADD_TODO", value: !state.addTodo })}
            >
              할일 추가
            </button>
            <button className="delete-exercise-button">삭제</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Toolbar;
