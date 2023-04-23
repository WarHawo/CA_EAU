/* Programme qui affiche ses arguments reçus à l’envers.
 */

function reversArg() {
    const myArgv = process.argv.slice(2);
    let result = [];

    if (myArgv == "")
        return ("Error");
    for (let i = myArgv.length -1 ; i >= 0 ; i--) {
        result += myArgv[i];
        if (i !== 0)
            result += "\n";
    }
    return result;
}

console.log(reversArg())
