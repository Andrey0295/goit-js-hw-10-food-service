const getCheckboxEl = document.querySelector('#theme-switch-toggle');
const getBodyEl = document.querySelector('body');

getCheckboxEl.addEventListener('change', changeTheme);

function changeTheme(evt) {
  getBodyEl.classList.toggle('dark-theme');
}
