/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
};

function isWeekend (day: Day): boolean {
  if (day === Day.SUNDAY || day === Day.SATURDAY) {
    return true;
  }  else {
    return false;
  };
};