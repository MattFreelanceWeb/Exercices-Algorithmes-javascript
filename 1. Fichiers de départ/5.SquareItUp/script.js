// function squareDigits(num){
//  const numToString = num.toString()
//  const numToStringArray = numToString.split('')
//  const squaredArray = []
//  for (number of numToStringArray){
//   const num = parseInt(number)
//   const squareNum = num ** 2
//   squaredArray.push(squareNum)
//  }
//  return squaredArray.join('')
// }

//oneliner

const squareDigits = (num) => num.toString().split('').map(item => item ** 2).join('')

/* ÉNONCÉ 📚 */


/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/


/* Tests à passer 🧪 */

console.log(squareDigits(5225));    // 254425
console.log(squareDigits(5555));    // 2525252525
console.log(squareDigits(1111));    // 1111