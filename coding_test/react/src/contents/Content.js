import React from "react";
import AddTodoForm from "./AddTodoForm";
import AddTodoItem from "./AddTodoItem";
import RoutineForm from "./RoutineForm";
import RoutineItem from "./RoutineItem";

const Content = ({ state, setState }) => {
  return (
    <div className="contents-field">
      <nav className="routine-navigator">
        {!!state.addRoutine && (
          <RoutineForm state={state} setState={setState} />
        )}
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
          <ul className="exercise-list">
            {state.data.length > 0 &&
              state.data[state.selected].exercises.map((item, index) => (
                <AddTodoItem
                  item={item}
                  state={state}
                  setState={setState}
                  key={index}
                  index={index}
                />
              ))}
          </ul>

          {state.addTodo && <AddTodoForm state={state} setState={setState} />}
        </div>
      </section>
    </div>
  );
};

export default Content;
