const padTo2Digits = (num: number) => String(num).padStart(2, '0');

export const getTime = (stringDate: string) => {
  const date = new Date(stringDate);
  return `${padTo2Digits(date.getHours())  }:${  padTo2Digits(date.getMinutes())}`;
};
