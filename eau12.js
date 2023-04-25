/* un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle. */

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
function my_bubble_sort(array) {
    parseArg(array);

    for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (Number(array[i]) > Number(array[j])) 
            {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            }
        }
    }
    
    let newArray = display(array);
    return newArray;
}

const arg = process.argv.slice(2);
console.log(my_bubble_sort(arg));