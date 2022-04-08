export function addSetDateInStorage(setDate) {
  localStorage.setItem('Set Date', setDate);
}

export function getSetDateFromStorage() {
  return new Date(localStorage.getItem('Set Date'));
}

export function clearStorage() {
  localStorage.clear();
}
