export const getRange = (from: number, to: number): Array<number | string> => {
  const arr = [];
  for (let i = from; i >= to; i--) {
    arr.push(i);
  }
  return arr;
};
export const years = getRange(new Date().getUTCFullYear() - 5, 1945);
export const monthDays = new Map();
monthDays.set('January', 31);
monthDays.set('February', 28);
monthDays.set('March', 31);
monthDays.set('April', 30);
monthDays.set('May', 31);
monthDays.set('June', 30);
monthDays.set('July', 31);
monthDays.set('August', 31);
monthDays.set('September', 30);
monthDays.set('October', 31);
monthDays.set('November', 30);
monthDays.set('December', 31);
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
