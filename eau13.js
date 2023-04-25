/* programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection */

function parseArg(argv) {
  if (argv == "" || argv.length < 2) {
    console.error("erreur");
    process.exit(1);
  }
  for (let i= 0; i < argv.length; i++) {
    if (!(/^[0-9\s\n+-]+$/.test(argv[i]))) {
      console.error("erreur");
      process.exit(1);
    }
  }
  return argv;
}

function display(argv) {
  let newArray = "";
  for (let i = 0; i < argv.length; i++) {
      newArray += argv[i];
      if (i != argv.length -1)
          newArray += " ";
  }
  return newArray;
}

function my_select_sort(array) {
  
  array = parseArg(array);
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let inxMin = i;
    for (let j = i + 1; j < len; j++) {
      if (Number(array[j]) < Number(array[inxMin])) {
        inxMin = j;
      }
    }
    if (inxMin !== i) {
      [array[i], array[inxMin]] = [array[inxMin], array[i]];
    }
  }
  return display(array);
}

const arg = process.argv.slice(2);
console.log(my_select_sort(arg));