import { state, getRoutine, exercisesModel } from '../model.js';
import { toolBarView, todoListView } from '../views';

export const todoListControl = {
  init() {
    const { routines, selected } = state;
    const routine = routines.find((routine) => routine.id === selected);
    todoListView.render({ routine, location: 'todoList' });
  },
  update(exercise) {
    try {
      exercisesModel.update(exercise);
      const routine = getRoutine();
      todoListView.render({ routine, location: 'todoList' });
      toolBarView.update({ routine, location: 'toolbar' });
    } catch (err) {
      alert(err.message);
    }
  },
  delete(deleteIds) {
    const routine = getRoutine();
    exercisesModel.delete(deleteIds);
    todoListView.render({ routine, location: 'todoList' });
    toolBarView.update({ routine, location: 'todoList' });
  },
};
