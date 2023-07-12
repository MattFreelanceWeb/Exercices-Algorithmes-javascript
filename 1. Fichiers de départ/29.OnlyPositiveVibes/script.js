function onlyPositives(arr) {
  let count = 0;

  for (number of arr) {
    if (number >= 0) {
      count = count + number;
    }
  }
  return count;
}

/* ÉNONCÉ 📚 */

/*
  Additionnez tous les nombres positifs d'un tableau donné et retournez le résultat.
  Exemple:  [1,-2,3] => 4
  Attention, s'il n'y a que des nombres négatifs, retournez 0.
*/

/* Tests à passer 🧪 */

console.log(onlyPositives([1, -2, 3, 4, 5])); // 13
console.log(onlyPositives([-10, -20, -30])); // 0
console.log(onlyPositives([95, -45, 10, -84, 200])); // 305
