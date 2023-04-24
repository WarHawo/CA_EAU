/* Programme qui affiche le premier nombre premier supérieur au nombre donné en argument. */

function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if ((n % i) === 0)
            return false;
    }
    return true;
}

function nextPrime(myArgv) {
    if (isNaN(myArgv) || process.argv[3] || myArgv < 0)
        return -1;
    if (isPrime(myArgv))
        return myArgv;
    let i = myArgv
    while (!isPrime(i)) {
        i++;
    }
    return i;
}

const myArgv = process.argv[2] - 0;
console.log(nextPrime(myArgv));