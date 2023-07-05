// function conversion(deg) {
//   if (typeof deg === 'number') {
//         const degfahrenheit = Math.trunc(deg * (9 / 5) + 32);
//     return degfahrenheit;
//   } else {
//     return "Données en entrée non-correctes.";
//   }
// }

//oneliner

const conversion = (deg)=> typeof deg !== 'number' ? 'Données en entrée non-correctes.' : Math.trunc(deg * (9 / 5) + 32)

/* ÉNONCÉ 📚 */

/* 
Créez un algorithme qui sert à convertir des degrés Celsius en degrés Fahrenheit.
Le résultat doit être de type nombre, sans chiffre après la virgule.
Si on donne un autre type qu'un nombre en argument, vous devez retourner "Données en entrée non-correctes."

Formule pour convertir les degrés Celsius en degrés Fahrenheit : (degCel * (9/5) + 32);
*/

/* Tests à passer 🧪 */

console.log(conversion(-37)); // -34
console.log(conversion(14)); // 57
console.log(conversion(0)); // 32
console.log(conversion("abc")); // Données en entrée non-correctes.
