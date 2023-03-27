function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//первая функция (рандомное число в диапазоне)

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
    let currentValue = randomNumber(from, to);
    if (previousValues.length >= (to - from + 1)) {
      console.error(`Перебраны все числа из диапазона от ${  from  } до ${  to}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumber(from, to);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};//получение уникального номера

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.,',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [ 'Катя' , 'ГрЫгорий', 'Лиза', 'Данил', 'Вика',
  'Женя', 'Дементий', 'Вася', 'Виктор', 'Вова',
  'Иван', 'Морти', 'Арсен', 'Таня', 'Маша',
  'Соня', 'Биба', 'Жанна', 'Лёша', 'Руслан',
  'Наташа', 'Боба', 'Анжелика', 'Рик', 'Богдан' ];

const generateId = getRandomUniqNumber(1, 25);
const generatePhotoId = getRandomUniqNumber(1, 25);
const generateCommentId = getRandomUniqNumber(1, 100);

const createComment = () => ({
  id: generateId,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createDescriptionOfPhoto = function() {
  return {
    id: generateId(),
    url: `photos/${generatePhotoId()}.jpg`,
    description: 'Описание картинки',
    likes: getRandomInt(15, 200),
    comments: Array.from({length: getRandomInt(1, 6)}, createComment),
  };
};

getRandomInt(1,2);//2 бесполезные строки
truncate('бесполезный вызов чтоб ошибку не выдавало',38);
