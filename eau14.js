/*programme qui trie les éléments donnés en argument par ordre ASCII.*/

function parseStr(str) {
  if (str == "" || str.length < 2) {
    console.error("erreur");
    process.exit(1);
  }
  return str;
}

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function sortStrAscii(str) {
  parseStr(str);

  let newArray = sortArray(str);
  return newArray;
}

const str = process.argv.slice(2);
console.log(sortStrAscii(str));