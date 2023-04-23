/* Programme qui affiche le N-ème élément de la célèbre suite de Fibonacci.
(0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0. */

function Fibonacci(n) {
    let suite = [];
    suite[0] = 0;
    suite[1] = 1;
    for (let i = 2; i <= n; i++) {
        suite[i] = (suite[i -1] + suite[i -2]);
    }
    return suite[n];
}
function nFib() {
    myArgv = process.argv[2];
    let n = Number(myArgv);
    if (isNaN(n) || process.argv[3] || n < 0)
        return (-1);
    else
        return (Fibonacci(n));
}

console.log(nFib());