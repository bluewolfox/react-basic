import React, { useState, useRef, useEffect } from "react";

const RoutineForm = ({ state, setState }) => {
  const formRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const closeHandler = (e) => {
      if (formRef.current.contains(e.target)) return;
      setState({ type: "ADD_TODO", value: false });
    };
    document.addEventListener("click", closeHandler);
    return () => document.removeEventListener("click", closeHandler);
  }, [formRef]);

  return (
    <form
      ref={formRef}
      className="add-routine-form"
      onSubmit={(e) => {
        e.preventDefault();
        const { data } = state;
        setState({
          type: "DATA",
          value: [...data, { id: data[data.length - 1].id + 1, name: value, exercises: [] }],
        });
        setState({ type: "ADD_ROUTINE", value: false });
      }}
    >
      <input
        className="add-routine-input"
        type="text"
        name="routine"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="목록을 추가하세요"
      />
    </form>
  );
};

export default RoutineForm;
