import View from './View';

class RoutineView extends View {
  $errorMessage = '목록이 존재하지 않습니다.';
  $parentElement = document.querySelector('.routine-list');
  $navElement = document.querySelector('.routine-navigator');

  // routine elements
  toggleButton = document.querySelector('.add-routine-button');
  form = document.querySelector('.add-routine-form');
  formInput = document.querySelector('.add-routine-input');

  constructor() {
    super();
    this._showform();
    document.addEventListener('click', this._routinFormClickOutside.bind(this));
  }

  onload(handler) {
    window.addEventListener('load', handler);
  }

  _closeform() {
    this.form.classList.remove('show');
  }

  _routinFormClickOutside(e) {
    if (!this.form.contains(e.target) && !this.toggleButton.contains(e.target)) {
      this._closeform();
    }
  }

  _showform() {
    const { classList } = this.form;
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        classList.remove('show');
        document.removeEventListener('keyup', escHandler);
      }
    };
    const handler = () => {
      this.formInput.value = '';
      classList.toggle('show');
      classList.contains('show')
        ? document.addEventListener('keyup', escHandler)
        : document.removeEventListener('keyup', escHandler);
    };
    this.toggleButton.addEventListener('click', handler);
  }

  addRoutine(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { routine } = Object.fromEntries([...new FormData(this.form)]);
      if (!routine) return alert('목록 이름을 입력해야합니다.');
      handler(routine);
      this._closeform();
    });
  }

  $generageMarkup() {
    const { routines, selected } = this.$data;
    return routines.map((routine) => this.markup({ routine, selected })).join('');
  }

  markup({ routine, selected }) {
    const active = routine.id === selected;
    return `
      <li class="routine-item ${active ? 'active' : ''}" data-id="${routine.id}">
        <input type="text" disabled value="${routine.name}" class="routine-title" />
        <div class="routine-utils">
          <button id="routine-modify"></button>
          <button id="routine-delete"></button>
        </div>
      </li>
    `;
  }

  clickRoutine({ select, modify, delete: deleteRoutine }) {
    this.$parentElement.addEventListener('click', function (e) {
      const item = e.target.closest('.routine-item');
      if (!item) return;
      const id = +item.dataset.id;

      if (e.target.id === 'routine-modify') {
        const modifyButton = document.getElementById('routine-modify');
        const input = item.querySelector('.routine-title');

        modifyButton.style.display = 'none';
        input.disabled = false;
        input.focus();
        input.setSelectionRange(0, input.value.length);

        const excutor = () => {
          input.disabled = true;
          modifyButton.style.display = 'block';
          modify({ id, value: input.value });
        };

        const blurHandler = () => {
          excutor();
          input.removeEventListener('blur', blurHandler);
        };

        const enterHandler = (e) => {
          if (e.key !== 'Enter') return;
          excutor();
          input.removeEventListener('keypress', enterHandler);
        };

        const events = [
          { name: 'blur', handler: blurHandler },
          { name: 'keypress', handler: enterHandler },
        ];
        events.forEach(({ name, handler }) => input.addEventListener(name, handler));
      } else if (e.target.id === 'routine-delete') {
        const pass = confirm('선택하신 루틴을 삭제 하시겠습니까?');
        if (pass) deleteRoutine(id);
      } else {
        select(id);
      }
    });
  }
}

export const routineView = new RoutineView();
