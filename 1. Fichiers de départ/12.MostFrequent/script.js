function mostFrequent(arr) {

 let itemToReturn = arr[0]
 const occurences = {}

 for (i=0; i<arr.length; i++){
    const current = arr[i]

    if(occurences[current]){
        occurences[current]++
    } else {
        occurences[current] = 1
    }

    if(occurences[current] > occurences[itemToReturn]){
        itemToReturn = current
    }
 }
 return itemToReturn
}


/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne l'élément le plus présent dans un tableau. */


/* Tests à passer 🧪 */

console.log(mostFrequent([3, "a", "a", "a", "b", "b", 2, 3, "a", 3, "a", 2, 4, 9, 3])); // "a"
console.log(mostFrequent(["y","z","z","x","z"]));                                       // "z"
console.log(mostFrequent(["John", "Tom", "Peter", "Peter", "Jack", "Jack", "Jack"]));   // "Jack"
