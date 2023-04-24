/* programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus. */

function parseStr(str) {
  if (!str || process.argv[4]) {
    console.error("erreur");
    process.exit(1);
  }
  if ((!/^\d+$/.test(str))) {
      console.error("erreur");
      process.exit(1);
  }
  return str ;
}

function arrayMinMax(arg1, arg2)
{
  parseStr(arg1);
  parseStr(arg2);
  
  let output = "";
  
  let min =0;
  let max = 0;
  
  if (arg1 >= arg2) {
    min = arg2;
    max = arg1;
  }
  else {
    min = arg1;
    max = arg2;
  }
  for (let i = min; i < max ; i++) {
    output += i;
  if (i !== max - 1)
    output += " ";
  }
  return output;
}

let arg1 = process.argv[2];
let arg2 = process.argv[3];

console.log(arrayMinMax(arg1, arg2));