/* programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant.*/


function combOfThree() {
let output = [];

for(let i = 0; i <= 7; i++) {
    for(let j= i + 1; j <= 8 ; j++) {
        for (let k = j+ 1; k <= 9; k++) {
            output += i+""+j+""+""+ k;
            if ((i != 7) || (j != 8) || (k != 9))
                output += " ";
          }
      }
  }
  return output;
}

console.log(combOfThree());