import React from "react";

const Toolbar = ({ state, setState }) => {
  const onDelete = () => {
    if (!state.deleteData.length) return alert("삭제할 항목이 없습니다.");
    const string = state.deleteData.map((el) => el.name).join(", ");
    if (!window.confirm(`[${string}] 삭제하시겠습니까?`)) return;
    const stateData = [...state.data];
    stateData[state.selected].exercises = stateData[
      state.selected
    ].exercises.filter((el) => !state.deleteData.includes(el));
    setState({ type: "DATA", value: stateData });
    setState({ type: "DELETE_DATA", value: [] });
  };

  return (
    <div className="toolbar">
      <header className="header">Lists</header>
      <section className="utils-section">
        <div className="routine-control">
          <button
            className="add-routine-button"
            onClick={() =>
              setState({ type: "ADD_ROUTINE", value: !state.addRoutine })
            }
          >
            목록 추가
          </button>
        </div>
        <div className="exercise-control">
          <div className="buttons">
            <button
              className="add-exercise-button"
              onClick={() =>
                setState({ type: "ADD_TODO", value: !state.addTodo })
              }
            >
              할일 추가
            </button>
            <button className="delete-exercise-button" onClick={onDelete}>
              삭제
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Toolbar;
