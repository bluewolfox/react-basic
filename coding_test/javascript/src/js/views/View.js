export default class Veiw {
  render(data) {
    if (!data) return this.renderError();
    const { location, routines, routine } = data;
    if (location === 'routine' && routines.length === 0) return this.renderError();
    if (location === 'todoList' && (!routine || (routine && routine.exercises.length === 0))) {
      return this.renderError();
    }
    if (Array.isArray(data) && data.length === 0) return this.renderError();

    this.$data = data;
    const markup = this.$generageMarkup();
    this.clear();
    this.$parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this.$data = data;
    const newMarkup = this.$generageMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this.$parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // 변경된 텍스트 업데이트
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }
      // 변경된 속성 업데이트
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach((attr) => curEl.setAttribute(attr.name, attr.value));
    });
  }

  clear() {
    this.$parentElement.innerHTML = '';
  }

  renderError(message = this.$errorMessage) {
    const markup = `
        <div class="error-message">
            <p>${message}</p>
        </div>
      `;
    this.clear();
    this.$parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
