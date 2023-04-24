/* programme qui détermine si une chaîne de caractères ne contient que des chiffres.*/

function numberOnly(str) {
  if (!str || process.argv[3]) {
    return 'error';
  }
  for (let i= 0; i < str.length; i++) {
    if (!(/^[0-9\s\n]+$/.test(str[i]))) {
      return false;
    }
  }
  return true;;
}

const str = process.argv[2];
console.log(numberOnly(str));
