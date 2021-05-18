import React, { useRef, useState } from "react";

const AddTodoItem = ({ index, item, state, setState }) => {
  const [exercise, setExercise] = useState(item.name);
  const exerciseRef = useRef(null);

  const onSubmitExercise = (e) => {
    e.preventDefault();
    exerciseRef.current.disabled = true;
    const assignData = [...state.data];
    assignData[state.selected].exercises[index] = { name: exercise };
    setState({ type: "DATA", value: assignData });
  };

  const deletedChange = (e) => {
    const stateData = [...state.deleteData];
    if (e.target.checked) {
      setState({ type: "DELETE_DATA", value: [...stateData, item] });
    } else {
      const removeData = stateData.filter((el) => el !== item);
      setState({ type: "DELETE_DATA", value: removeData });
    }
  };

  return (
    <li className="exercise-item">
      <div className="exercise-title-field">
        <input
          type="checkbox"
          className="exercise-checkbox"
          onChange={deletedChange}
        />
        <form onSubmit={onSubmitExercise}>
          <input
            type="text"
            className="exercise-title"
            value={exercise}
            ref={exerciseRef}
            disabled
            onBlur={onSubmitExercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </form>
      </div>
      <button
        type="button"
        className="exercise-modify"
        onClick={() => {
          exerciseRef.current.disabled = false;
          exerciseRef.current.focus();
        }}
      ></button>
    </li>
  );
};

export default AddTodoItem;
