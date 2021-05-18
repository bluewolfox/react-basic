import * as model from '../model.js';
import { toolBarView } from '../views';

export const toolBarContorl = {
  init() {
    const { routines, selected } = model.state;
    const routine = routines.find((routine) => routine.id === selected);
    toolBarView.update({ routine });
  },
};
