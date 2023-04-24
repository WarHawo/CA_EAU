/* Programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.*/

function toUpperString(str) {
  let upperStr = "";
  for (let i = 0; i < str.length; i++) {
    const charAscii = str.charCodeAt(i);
    if (charAscii >= 97 && charAscii <= 122)
        upperStr += String.fromCharCode(charAscii - 32);
    else
      upperStr += str[i];
  }
  return upperStr;
}

function toLowerString(str) {
  let lowerStr = '';
  for (let i = 0; i < str.length; i++) {
    const charAscii = str.charCodeAt(i);
    if (charAscii >= 65 && charAscii <= 90)
        lowerStr += String.fromCharCode(charAscii + 32);
    else
      lowerStr += str[i];
  }
  return lowerStr;
}

function parseStr(str) {
  if (!str || process.argv[3]) {
    console.error("erreur");
    process.exit(1);
  }
  for (let i= 0; i < str.length; i++) {
    if (!(/^[A-Za-z\s\n]+$/.test(str[i]))) {
      console.error("erreur");
      process.exit(1);
    }
  }
  return str;
}

function upperOneOfTwo(str) {
  let output = "";
  
  parseStr(str);
  for (let i = 0; i < str.length; i++) {
    if ((i % 2) === 0)
      output += toUpperString(str[i]);
    else
      output += toLowerString(str[i]);
  }
  return output;
}

const myArgv = process.argv[2];
console.log(upperOneOfTwo(myArgv));
