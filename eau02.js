/* Programme qui affiche ses arguments reçus à l’envers.
 */

const myArgv = process.argv.slice(2);

if (myArgv == "")
    console.log("Erreur: veuillez rentrer au moins un argument");
for (let i = myArgv.length -1 ; i >= 0 ; i--) {
    console.log(myArgv[i]);
}