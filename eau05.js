/* programme qui détermine si une chaîne de caractère se trouve dans une autre.*/

function strInStr(arg, tofind) {
  let str = "";
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === tofind[0]) {
      for (let j = 0; j < tofind.length; j++) {
        while (tofind[j] === arg[i] && j < tofind.length) {
          str += tofind[j];
          i++;
          j++;
        }
      }
    }
  }
  if (str === tofind)
    return true;
  return false
}

function display(arg, tofind) {
  if (!arg || !tofind || process.argv[4])
    return "error";
  return strInStr(arg, tofind);
}

const arg = process.argv[2];
const tofind = process.argv[3];

console.log(display(arg, tofind));