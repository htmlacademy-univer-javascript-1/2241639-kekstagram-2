import {getRandomInt, getRandomArrayElement, getRandomUniqNumber} from './tools.js';

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
  id: generateCommentId(),
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
export {createDescriptionOfPhoto};
