/* Programme qui affiche ses arguments reçus à l’envers.
 */

function reversArg(myArgv) {
  let reverseArray = [];

  if (myArgv == "")
      return ("Error");
  for (let i = myArgv.length -1 ; i >= 0 ; i--) {
      reverseArray += myArgv[i];
      if (i !== 0)
          reverseArray += "\n";
  }
  return reverseArray;
}

const myArgv = process.argv.slice(2);
console.log(reversArg(myArgv));