import React, { useRef, useState } from "react";

const RoutineItem = ({ active, item, state, setState }) => {
  const itemRef = useRef(null);
  const [value, setValue] = useState(item.name);

  const onEditItem = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    const assignData = [...state.data];
    const index = assignData.findIndex((el) => el.id === item.id);
    assignData[index] = { ...assignData[index], name: value };
    setState({ type: "DATA", value: assignData });
  };

  const onClickItem = () => {
    setState({ type: "SELECTED", value: item.id });
    setState({ type: "DELETE_DATA", value: [] });
  };

  return (
    <li
      className={`routine-item ${active ? "active" : ""}`}
      onClick={onClickItem}
    >
      <form onSubmit={onEditItem}>
        <input
          ref={itemRef}
          type="text"
          disabled
          value={value}
          className="routine-title"
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => onEditItem}
        />
      </form>
      <div className="routine-utils">
        <button
          id="routine-modify"
          onClick={() => {
            itemRef.current.disabled = false;
            itemRef.current.focus();
          }}
        ></button>
        <button
          id="routine-delete"
          onClick={() => {
            setState({
              type: "DATA",
              value: state.data.filter((el) => item.id !== el.id),
            });
          }}
        ></button>
      </div>
    </li>
  );
};

export default RoutineItem;
