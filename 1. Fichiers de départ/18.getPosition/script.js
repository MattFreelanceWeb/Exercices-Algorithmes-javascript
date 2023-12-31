// function getPosition(arr,num) {

//   const updatedArr = [...arr , num]
//   const sortedArr = updatedArr.sort()

//   return sortedArr.indexOf(num)
  
// }

//onliner
const getPosition = (arr,num) => [...arr,num].sort().indexOf(num)

/* ÉNONCÉ 📚 */

/*
  Créez un algorithme qui retourne la position du second argument dans la liste triée de nombres contenus dans le tableau qu'on passe en premier argument. 
*/


/* Tests à passer 🧪 */

console.log(getPosition([10,30,40,20], 25));         // 2
console.log(getPosition([30,45,87,96,54,29], 60));   // 4
