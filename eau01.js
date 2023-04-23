/* programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant. */

function display (a , b) {
let result = [];
if (a < 10 && b < 10)
    result += ('0' + a + " " + '0' + b);
else if (a < 10 && b > 10)
    result += ('0' + a + " " + b);
else if (a > 10 && b < 10)
    result += (a + " " + '0' + b);
else 
    result += (a + " " + b);
if ( a != 98 || b != 99)
    result += (", ");
return result;
}

let tab ="";
 for (let i= 0; i < 99; i++) {
    for(let j = i + 1; j < 100; j++) {
        tab += display(i, j);
    }
 }
console.log(tab);