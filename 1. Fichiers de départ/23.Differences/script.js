function differences(arr1, arr2) {
    
  let arrToCompare = [];
  let otherArray = [];

  const returnedArr = [];

  if (arr1.length > arr2.length) {
    arrToCompare = arr1;
    otherArray = arr2;
  } else {
    arrToCompare = arr2;
    otherArray = arr1;
  }

  for (i of otherArray){
    !arrToCompare.includes(i) && returnedArr.push(i)
  }
  for (item of arrToCompare) {

    !otherArray.includes(item) && returnedArr.push(item)
  }

  return returnedArr
}

/* ÉNONCÉ 📚 */

/*
Codez un algorithme qui retourne les différences entre les deux tableaux qu'il reçoit en argument.
Retournez ces différences dans un nouveau tableau.
*/

/* Tests à passer 🧪 */

console.log(differences([1, 2, 3, 4, 5],[1, 2, 3, 5], )); //  [ 4 ]
console.log(differences(["x", "a", "c"], ["m", "k", "l"])); //  [ 'x', 'a', 'c', 'm', 'k', 'l' ]
console.log(differences([999, 777], [777, 444, 111])); //  [ 999, 444, 111 ]
