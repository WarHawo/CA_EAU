/* Programme qui affiche le N-ème élément de la célèbre suite de Fibonacci.
(0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0. */

function Fibonacci(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;
  for (let i = 2; i <= n; i++) {
      fibArray[i] = (fibArray[i -1] + fibArray[i -2]);
  }
  return fibArray[n];
}

function nElem(myArgv) {
  let n = Number(myArgv);
  if (isNaN(n) || process.argv[3] || n < 0)
      return (-1);
  else
      return (Fibonacci(n));
}

myArgv = process.argv[2];
console.log(nElem(myArgv));