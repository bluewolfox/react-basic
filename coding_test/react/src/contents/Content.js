import React from "react";
import AddTodoForm from "./AddTodoForm";
import RoutineForm from "./RoutineForm";
import RoutineItem from "./RoutineItem";

const Content = ({ state, setState }) => {
  return (
    <div className="contents-field">
      <nav className="routine-navigator">
        {state.addRoutine && <RoutineForm state={state} setState={setState} />}
        <ul className="routine-list">
          {state.data.map((item, index) => {
            const active = item.id === state.selected;
            return (
              <RoutineItem
                key={index}
                active={active}
                item={item}
                state={state}
                setState={setState}
              />
            );
          })}
        </ul>
      </nav>

      <section className="exercise-section">
        <div className="exercise-list-field">
          <ul className="exercise-list">{/* 여기가 해야할 곳 */}</ul>

          {state.addTodo && <AddTodoForm state={state} setState={setState} />}
        </div>
      </section>
    </div>
  );
};

export default Content;
