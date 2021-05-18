import { state, getRoutine, routineModel } from '../model.js';
import { routineView, toolBarView, todoListView } from '../views';

export const routineControl = {
  init() {
    routineView.render({ ...state, location: 'routine' });
  },
  add(routine) {
    routineModel.add(routine);
    routineView.render({ ...state, location: 'routine' });
    toolBarView.update({ routine: getRoutine(), location: 'toolbar' });
  },
  select(id) {
    try {
      if (id === state.selected) return;
      const routine = state.routines.find((routine) => routine.id === id);
      if (!routine) throw new Error('선택한 루틴이 존재하지 않습니다.');
      routineModel.select(id);
      todoListView.render({ routine: getRoutine(), location: 'todoList' });
      routineView.update(state);
    } catch (err) {
      alert(err);
    }
  },
  delete(id) {
    const { selected } = state;
    routineModel.delete(id);
    if (id === selected) todoListView.render({ routine: getRoutine(), location: 'todoList' });
    routineView.render({ ...state, location: 'routine' });
    toolBarView.update({ routine: getRoutine(), location: 'toolbar' });
  },
  modify(payload) {
    const id = state.routines.findIndex(({ id }) => id === payload.id);
    if (state.routines[id].name === payload.value) return;
    routineModel.modify({ ...payload, id });
    routineView.update(state);
  },
};
