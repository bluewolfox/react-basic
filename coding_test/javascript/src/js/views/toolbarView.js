import View from './View';

class ToolBarView extends View {
  $parentElement = document.querySelector('.exercise-control');
  onload(handler) {
    window.addEventListener('load', handler);
  }

  $generageMarkup() {
    const { routine } = this.$data;
    return `
      <div class="buttons">
        <button class="add-exercise-button ${!routine ? 'disabled' : ''}">할일 추가</button>
        <button class="delete-exercise-button ${!routine ? 'disabled' : ''}">삭제</button>
      </div>
    `;
  }
}

export const toolBarView = new ToolBarView();
