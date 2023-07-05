function removeDuplicates(arr) {
    const cleanedArray = []
    for(i = 0 ; i < arr.length ; i++){
        if(!cleanedArray.includes(arr[i])){
            cleanedArray.push(arr[i])
        }
    }
   return cleanedArray 
}


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */


/* Tests à passer 🧪 */

console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]




