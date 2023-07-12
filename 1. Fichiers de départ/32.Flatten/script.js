function flatten(arr) {
  const arrToReturn = [];

  const flatThisArray = (item) => {
    if (Array.isArray(item)) {
      for (i = 0; i < item.length; i++) {
        flatThisArray(item[i]);
      }
    } else {
      arrToReturn.push(item);
    }
  };
  for (i of arr) {
    flatThisArray(i)
  }

  return arrToReturn
}

/* ÉNONCÉ 📚 */

/*
  Cet algorithme prend un tableau composé lui-même de plusieurs sous-tableaux en
  entrée.
  Vous devez "aplatir" les différentes couches de tableaux, c'est-à-dire
  retourner un seul tableau qui contient les valeurs de tous les tableaux qui le
  composent.
  Attention : Ne pas utiliser la méthode JavaScript "flat()", il faut trouver une solution personnalisée.
*/

/* Tests à passer 🧪 */
console.log(flatten([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
console.log(flatten([1, [2], [3, [[4]]]])); // [1,2,3,4]
console.log(flatten([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(flatten([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
