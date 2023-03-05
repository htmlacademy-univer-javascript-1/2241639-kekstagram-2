function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//первая функция (рандомное число в диапазоне)

function truncate(str, maxlength) {
  if(str.length <= maxlength){return (true);}else{return (false);}
} //вторая функция (на длину строки)
