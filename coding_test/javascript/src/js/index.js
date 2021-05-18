import { toolBarView, routineView, todoListView } from "./views";
import { routineControl, todoListControl, toolBarContorl } from "./controller";
import "../scss/main.scss";

const app = function () {
  toolBarView.onload(toolBarContorl.init);
  routineView.addRoutine(routineControl.add);
  routineView.onload(routineControl.init);
  routineView.clickRoutine({
    select: routineControl.select,
    modify: routineControl.modify,
    delete: routineControl.delete,
  });
  todoListView.onload(todoListControl.init);
  todoListView.updateTodo(todoListControl.update);
  todoListView.deleteTodo(todoListControl.delete);
};

window.addEventListener("DOMContentLoaded", app);
