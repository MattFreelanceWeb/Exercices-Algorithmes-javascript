// function abreviation(str) {

//  const strArray = str.split(' ')
//  const surname = strArray[1]
//  const surnameArray = surname.split('')
//  const firstLetterSurname = surnameArray[0]

//  const abreviation = strArray[0] + ' ' + firstLetterSurname +'.'

//  return abreviation
// }

//oneliner 
const abreviation = (str) => `${str.split(' ')[0]} ${str.split(' ')[1].charAt(0)}.`


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* Tests à passer 🧪 */

console.log(abreviation("John Doe"));           // John D.
console.log(abreviation("Romy Schneider"));     // Romy S.
console.log(abreviation("Alfred Hitchcock"));   // Alfred H.

