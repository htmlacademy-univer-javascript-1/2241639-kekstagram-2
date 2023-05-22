
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//рандомное число в диапазоне

function truncate(str, maxlength) {
  if(str.length <= maxlength){return (true);}
  {return (false);}
} //проверка на длину строки

function getRandomArrayElement (elements){
  return elements [getRandomInt(0, elements.length - 1)];
}//получение рандомного элемента из масива

const getRandomUniqNumber = function(from, to) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInt(from, to);
    if (previousValues.length >= (to - from + 1)) {
      alert.error(`Перебраны все числа из диапазона от ${  from  } до ${  to}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(from, to);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};//получение уникального номера

const isEscapeKey = (evt) => evt.key === 'Escape';

const mixArray = (array) => (array.sort(() => Math.random() - 0.5));

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}


export {getRandomInt, truncate, getRandomArrayElement, getRandomUniqNumber, isEscapeKey, mixArray, debounce, throttle};
