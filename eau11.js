/* programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres.
 Nombres négatifs acceptés.*/


function parseArg(str) {
  if (str =="" || str.length < 2) {
    console.error("erreur");
    process.exit(1);
  }
  for (let i= 0; i < str.length; i++) {
    if (!(/^[0-9\s\n+-]+$/.test(str[i]))) {
      console.error("erreur");
      process.exit(1);
    }
  }
  return str;
}

function sortStr(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) > Number(str [j])) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  return str;
}

function findMinAbs(argv)
{

  parseArg(argv);

  let newStr = sortStr(argv);
  let minAbs = Number(newStr[1] - newStr[0]);

  for (let i =0; i < argv.length; i++) {
    let diff = Math.abs(newStr[i + 1] - newStr[i]);
    if (diff < minAbs) {
      minAbs = diff;
    }
  }
  return minAbs;
}

const argv = process.argv.slice(2);
console.log(findMinAbs(argv));