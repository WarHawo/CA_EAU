/* Programme qui affiche le premier nombre premier supérieur au nombre donné en argument. */

function isPremier(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if ((n % i) === 0)
            return false;
    }
    return true;
}

function nextPremier() {
    const myArgv = process.argv[2] - 0;

    if (isNaN(myArgv) || process.argv[3] || myArgv < 0)
        return -1;
    if (isPremier(myArgv))
        return myArgv;
    let i = myArgv
    while (!isPremier(i)) {
        i++;
    }
    return i;
}

console.log(nextPremier());