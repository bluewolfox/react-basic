import View from "./View";

class TodoList extends View {
  $errorMessage = "할일이 존재하지 않습니다.";
  $parentElement = document.querySelector(".exercise-list");

  // exercise elements
  toggleButton = document.querySelector(".add-exercise-button");
  form = document.querySelector(".add-exercise-form");
  formInputs = this.form.querySelectorAll("input");
  cancelButton = document.querySelector(".ex-cancel");

  deleteButton = document.querySelector(".delete-exercise-button");

  constructor() {
    super();
    this.modifyId = null;
    this._showform();
    this.cancelButton.addEventListener("click", this._closeform.bind(this));
  }

  onload(handler) {
    window.addEventListener("load", handler);
  }

  // 할일 폼 닫기
  _closeform() {
    this.form.classList.remove("show");
  }

  // 할일 입력폼 보이기/감추기
  _showform() {
    const { classList } = this.form;
    const escHandler = (e) => {
      if (e.key === "Escape") {
        classList.remove("show");
        document.removeEventListener("keyup", escHandler);
      }
    };
    const handler = () => {
      const routines = document.getElementsByClassName("routine-item");
      if (!routines.length) return;
      this.modifyId = null;
      for (const input of this.formInputs) input.value = "";
      classList.toggle("show");
      classList.contains("show")
        ? document.addEventListener("keyup", escHandler)
        : document.removeEventListener("keyup", escHandler);
    };

    this.toggleButton.addEventListener("click", handler);
    this.$parentElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("exercise-modify") && !classList.contains("show")) {
        for (const input of this.formInputs) input.value = "";
        this.form.classList.add("show");
        this.modifyId = e.target.closest(".exercise-item").dataset.id;
      }
    });
  }

  // 할일 추가
  updateTodo(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const exercise = Object.fromEntries([...new FormData(this.form)]);
      const { name } = exercise;
      // 발리데이션 #########
      if (!(name)) return alert("할 일을 입력해야 합니다."); // prettier-ignore
      const id = this.modifyId === null ? null : +this.modifyId;
      handler({ id, name });
      this._closeform();
    });
  }

  // 할일 삭제
  deleteTodo(handler) {
    const deleteHandler = () => {
      const checkboxes = document.querySelectorAll(".exercise-checkbox");
      let deleteIds = [];
      for (const element of checkboxes) {
        if (element.checked) {
          const { id } = element.closest(".exercise-item").dataset;
          deleteIds.push(+id);
        }
      }
      // 선택된 데이터 없을시 삭제 불가
      if (checkboxes.length) {
        if (!deleteIds.length) return alert("선택한 할일이 없습니다.");
        const pass = confirm("선택하신 할일을 삭제 하시겠습니까?");
        if (pass) handler(deleteIds);
      }
    };
    this.deleteButton.addEventListener("click", deleteHandler);
  }

  $generageMarkup() {
    const { routine } = this.$data;
    return routine.exercises.map((ex, index) => this.markup(ex, index)).join("");
  }

  markup(exercise) {
    const { id, name } = exercise;
    return `
      <li class="exercise-item" data-id="${id}">
        <div class="exercise-title-field">
          <input type="checkbox" id="exercise-${id}" name="exercise" class="exercise-checkbox" />
          <label for="exercise-${id}" class="exercise-title">
            <div>${name}</div>
          </label>
        </div>
        <button class="exercise-modify"></button>
      </li>
    `;
  }
}

export const todoListView = new TodoList();
