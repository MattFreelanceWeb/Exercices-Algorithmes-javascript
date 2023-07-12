function isValidHour(str) {
  const strArr = str.split("");

  const hour = Number(strArr[0] + strArr[1]);
  const min = Number(strArr[3] + strArr[4]);
  const sec = Number(strArr[6] + strArr[7]);

  if( hour < 0 || min < 0 || sec < 0){
    return false
  }

  if ( hour <= 24 &&  min <= 60 &&  sec <= 60) {
    return true;
  } else {
    return false
  }

}

/* ÉNONCÉ 📚 */

/*
  Créez un algorithme qui détecte si la chaîne de caractères qu'on lui passe est une date au format hh:mm:ss ou pas.
  Retourne true si c'est vrai et false si c'est faux.
*/

/* Tests à passer 🧪 */

console.log(isValidHour("11:35:30")); // true
console.log(isValidHour("90:90:90")); // false
console.log(isValidHour("qsdljqslkdjqslkjdqsklj")); // false
console.log(isValidHour("-28:25:60 ")) // false
console.log(isValidHour("ab:bc:25")) // false