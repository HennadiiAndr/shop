export const getBenefit = function (newPrice: number, price: number) {
  return newPrice - price;
};

export const getNewPrice = function (price: number, discount: number): number {
  return Math.round(price * (1 - discount / 100));
};

export const getDifTime = function (startTime: Date, finTime: Date) {
  const differ: number = finTime.getTime() - startTime.getTime();
  const roundquantitySec = Math.floor(differ / 1000);
  const difSec = roundquantitySec % 60;
  const difMin = Math.floor(roundquantitySec / 60) % 60;
  const roundquantityMin = Math.floor(roundquantitySec / 60);
  const difHour = Math.floor(roundquantityMin / 60) % 60;

  return {
    difSec,
    difMin,
    difHour
  };
};
