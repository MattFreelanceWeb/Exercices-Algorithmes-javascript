function capitalize(str) {

    let strArray = str.split(' ')
    const uppercaseArray =[]
    
    for ( word of strArray ){
    const firtLetter = word[0].toUpperCase()
    const restOfTheWord = word.substring(1)
    const wordToUppercase= firtLetter + restOfTheWord
    uppercaseArray.push(wordToUppercase)

    }

    return uppercaseArray.join(' ')

}


/* ÉNONCÉ 📚 */


/* 
Créez un Algorithme qui prend une phrase en argument et qui retourne cette même phrase avec la première lettre de chaque mot en majuscule.
*/


/* Test à passer 🧪 */

console.log(capitalize("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...

