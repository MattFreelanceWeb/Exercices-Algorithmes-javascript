// function getVowelsNumber(txt) {
//     const vowelsRegexp = new RegExp(/[aeiouy]/gi)
//     const vowelsNumer = txt.match(vowelsRegexp)

//   if(vowelsNumer){
//     return vowelsNumer.length
//   } else {
//     return 0
//   }

// }


// oneliner 
const getVowelsNumber = (txt)=> txt.match(/[aeiouy]/gi)? txt.match(/[aeiouy]/gi).length : 0


/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */


/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumber("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumber("zzzZZZzz"));                                  // 0