import {getRandomInt, getRandomArrayElement, getRandomUniqNumber} from './utils.js';

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

const PHOTOLENGTH = 25;
const NUMBERCOMMENT = 200;

const generateId = getRandomUniqNumber(1, PHOTOLENGTH);
const generatePhotoId = getRandomUniqNumber(1, PHOTOLENGTH);
const generateCommentId = getRandomUniqNumber(1, NUMBERCOMMENT);
const IMGS = ['img/avatar-1.svg','img/avatar-2.svg','img/avatar-3.svg','img/avatar-4.svg','img/avatar-5.svg','img/avatar-6.svg'];

const createComment = () => ({
  id: generateCommentId(),
  avatar: getRandomArrayElement(0, IMGS.length - 1),
  message: getRandomArrayElement(0, MESSAGES.length - 1),
  name: getRandomArrayElement(0,NAMES.length - 1)
});

const createDescriptionOfPhoto = function() {
  return {
    id: generateId(),
    url: `photos/${generatePhotoId()}.jpg`,
    description: 'Описание картинки',
    likes: getRandomInt(15, 200),
    comments: Array.from({length: getRandomInt(1, 10)}, createComment),
  };
};

const createPhotos = () => Array.from({length: PHOTOLENGTH}, createDescriptionOfPhoto);
export { createPhotos , createComment, createDescriptionOfPhoto };
