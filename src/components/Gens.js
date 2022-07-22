export function getPokeFromGeneration(generation) {
  let min = 0;
  let max = 151;
  switch (generation) {
    case 1:
      min = Math.floor(0);
      max = Math.ceil(151);
      break;
    case 2:
      min = Math.floor(152);
      max = Math.ceil(251);
      break;
    case 3:
      min = Math.floor(252);
      max = Math.ceil(386);
      break;
    case 4:
      min = Math.floor(386);
      max = Math.ceil(493);
      break;
    case 5:
      min = Math.floor(494);
      max = Math.ceil(649);
      break;
    case 6:
      min = Math.floor(650);
      max = Math.ceil(721);
      break;
    case 7:
      min = Math.floor(722);
      max = Math.ceil(809);
      break;
    case 8:
      min = Math.floor(810);
      max = Math.ceil(905);
      break;
    default:
      break;
  }
  return Math.floor(Math.random() * (max - min)) + min;
}
