const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'current-theme';

// ПОЛУЧИТЬЗНАЧЕНИЕ ИЗ LOCAL STORAGE И ЗАПИСАТЬ ЕГО В КЛАСС ДЛЯ БОДИ!!!!!!!!!!!!!

const getCheckboxEl = document.querySelector('#theme-switch-toggle');
const getBodyEl = document.querySelector('body');

getBodyEl.classList.add(Theme.LIGHT);

getCheckboxEl.addEventListener('change', handleChangeThemeEvent);

savedThemeInLocalStorage();

function handleChangeThemeEvent(evt) {
  if (getCheckboxEl.checked === true) {
    getBodyEl.classList.replace(Theme.LIGHT, Theme.DARK);

    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  } else {
    getBodyEl.classList.replace(Theme.DARK, Theme.LIGHT);

    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
}

function savedThemeInLocalStorage() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === Theme.DARK) {
    getBodyEl.classList.add(Theme.DARK);

    getCheckboxEl.checked = true;
  } else if (savedTheme === Theme.LIGHT) {
    getBodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}
