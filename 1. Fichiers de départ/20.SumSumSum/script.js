function sum(min,max) {

 let count = 0

  for(let i = min; i <= max; i ++){
    count = count + i
  }

return count

}


/* ÉNONCÉ 📚 */


/*
  Vous recevez deux nombres en entrée et devez additionner tous les nombres qui se trouvent entre ces deux valeurs, ces deux valeurs comprises.
*/


/* Tests à passer 🧪 */

console.log(sum(4, 6));       // 15
console.log(sum(400, 6000));  // 17923200
console.log(sum(1, 475814));  // 113199719205