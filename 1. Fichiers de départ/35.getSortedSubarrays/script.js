function getSortedSubarrays(arr) {

  let arrToRetun = []

  let occurences = []

  for(item of arr){
    if(!occurences.includes(item)){
      arrToRetun.push(arr.filter(i=>i===item))
      occurences.push(item)
    }
  }
  
 return arrToRetun
}


/* ÉNONCÉ 📚 */

/*
  Créez un algorithme qui regroupe les mêmes valeurs d'un tableau dans des sous-tableaux.
  Retournez tous les sous-tableaux dans un tableau.
*/



/* Tests à passer 🧪 */

console.log(getSortedSubarrays([2, 1, 2, 1])); // [[2, 2], [1, 1]]
console.log(getSortedSubarrays([5, 4, 5, 5, 4, 3])); // [[5, 5, 5], [4, 4], [3]]
console.log(getSortedSubarrays(["b", "a", "b", "a", "c"])); // [["b", "b"], ["a", "a"], ["c"]]




