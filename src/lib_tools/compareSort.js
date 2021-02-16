export function compareSort(keySort, isGrowth) {

  return function (firstValue, secondValue) {
    const isFirstValueNumber = typeof firstValue[keySort] === 'number';
    const isSecondValueNumber = typeof secondValue[keySort] === 'number';

    if (isFirstValueNumber && isSecondValueNumber) {
      return isGrowth ?
        firstValue[keySort] - secondValue[keySort] :
        secondValue[keySort] - firstValue[keySort];
    }

    const firstWord = firstValue[keySort].toLowerCase();
    const secondWord = secondValue[keySort].toLowerCase();

    return isGrowth ?
      firstWord > secondWord ? 1 : -1 :
      secondWord > firstWord ? 1 : -1;
  }

}