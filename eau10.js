/* programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé. */


function findFirstIndex()
{
  const mystr = process.argv.slice(2);
  if (mystr == "") {
    console.error("erreur");
    process.exit(1);
  }
  
  let newStr = "";
  
  for (let i = 0; i < mystr.length - 1 ; i++) {
    newStr += mystr[i];
  }
  newStr = newStr.split(/[ \t\n]+/);
  let lastWord = mystr[mystr.length - 1];
  return newStr.indexOf(lastWord);
}
  
console.log(findFirstIndex());