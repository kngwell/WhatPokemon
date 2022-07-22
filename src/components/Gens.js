import App from "../App";
const randomPoke1 = function getRandomInt(min, max) {
  min = Math.floor(0);
  max = Math.ceil(151);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomPoke2 = function getRandomInt1(min, max) {
  min = Math.floor(152);
  max = Math.ceil(251);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomPoke3 = function getRandomInt2(min, max) {
  min = Math.floor(251);
  max = Math.ceil(386);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomPoke4 = function getRandomInt3(min, max) {
  min = Math.floor(386);
  max = Math.ceil(493);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomPoke5 = function getRandomInt4(min, max) {
  min = Math.floor(493);
  max = Math.ceil(649);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomPoke6 = function getRandomInt5(min, max) {
  min = Math.floor(650);
  max = Math.ceil(721);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomPoke7 = function getRandomInt6(min, max) {
  min = Math.floor(721);
  max = Math.ceil(809);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomPoke8 = function getRandomInt6(min, max) {
  min = Math.floor(809);
  max = Math.ceil(905);
  return Math.floor(Math.random() * (max - min)) + min;
};
export {
  randomPoke1,
  randomPoke2,
  randomPoke3,
  randomPoke4,
  randomPoke5,
  randomPoke6,
  randomPoke7,
  randomPoke8,
};
