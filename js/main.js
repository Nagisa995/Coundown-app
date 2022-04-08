import {
  DEFAULT_UI_ELEMENTS,
  COUNTDOWN_COMPLETE,
} from './const';

import {
  countdownTimeOnUI,
} from './view';

import {
  addSetDateInStorage,
  getSetDateFromStorage,
  clearStorage,
} from './storage';

import {
  intervalToDuration,
  isAfter,
  formatDuration,
} from 'date-fns';

DEFAULT_UI_ELEMENTS.UI_FORM.addEventListener('submit', countdownDate);

function countdownDate() {
  event.preventDefault();

  const setDate = new Date(DEFAULT_UI_ELEMENTS.UI_SET_DATE.value);

  addSetDateInStorage(setDate);
  countdown();
}

function countdown() {
  const setDate = getSetDateFromStorage();
  const countdownIsComplete = isAfter(Date.now(), setDate);

  if (countdownIsComplete) {
    clearStorage();
    return countdownTimeOnUI(COUNTDOWN_COMPLETE);
  }

  const countdownTime = intervalToDuration({start: Date.now(), end: setDate});

  countdownTimeOnUI(formatDuration(countdownTime));

  setTimeout(countdown, 1e3);
}
