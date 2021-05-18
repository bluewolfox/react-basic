export const state = {
  selected: 0, // routine id 값
  routines: [
    {
      id: 0,
      name: "2021/05/16",
      exercises: [],
    },
  ],
};

export const getRoutine = () => {
  return state.routines.find((routine) => routine.id === state.selected);
};

export const routineModel = {
  select(id) {
    state.selected = id;
  },
  add(routine) {
    const { routines, selected } = state;
    const len = routines.length;
    const id = len ? routines[0].id + 1 : 0;
    const insertData = { id, name: routine, exercises: [] };
    if (selected === null) state.selected = insertData.id;
    routines.unshift(insertData);
  },
  modify(payload) {
    state.routines[payload.id].name = payload.value;
  },
  delete(id) {
    state.routines = state.routines.filter((routine) => routine.id !== id);
    if (state.selected === id) state.selected = state.routines.length ? state.routines[0].id : null;
  },
};

export const exercisesModel = {
  update(payload) {
    const routine = getRoutine();
    // 현재 선택되어있는 루틴에 운동 추가
    if (!routine) throw new Error("추가할수있는 루틴이 존재하지 않습니다."); // prettier-ignore
    const existIndex = routine.exercises.findIndex((ex) => ex.id === payload.id);
    if (existIndex > -1) {
      routine.exercises[existIndex] = payload;
    } else {
      const len = routine.exercises.length;
      const id = len ? routine.exercises[len - 1].id + 1 : 0;
      routine.exercises.push({ ...payload, id });
    }
  },
  delete(deleteIds) {
    const routine = getRoutine();
    routine.exercises = routine.exercises.filter(
      (ex) => ex.id !== deleteIds.find((id) => ex.id === id)
    );
    return { routine };
  },
};
