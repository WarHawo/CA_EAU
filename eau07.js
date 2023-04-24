/* programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.*/

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
    if (!(/^[A-Za-z\s\n?!.,;\-_]+$/.test(str[i]))) {
      console.error("erreur");
      process.exit(1);
    }
  }
  return str;
}

function upperWords(argv) {
  parseStr(argv);

  let wordsTab = toLowerString(argv).split(/[ \t\n]+/);
  for (let i = 0; i < wordsTab.length ; i++) {
    let word = wordsTab[i];
    wordsTab[i] = toUpperString(word.charAt(0)) + word.slice(1);
  }

  return wordsTab.join(" ");
}

const str = process.argv[2];
console.log(upperWords(str));