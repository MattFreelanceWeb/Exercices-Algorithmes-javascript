function addPrime(num) {
  let arrToReturn = [];

  const isPrime = (number) => {
    if (number < 2) return false;

    for (i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (j = 1; j <= num; j++) {
    if (isPrime(j)) {
      arrToReturn.push(j);
    }
  }

  return arrToReturn.reduce((a, b) => a + b, 0);
}

/* ÉNONCÉ 📚 */

/*
  Additionnez tous les nombres premiers contenus dans un nombre donné, en comptant ce nombre.
  Les nombres premiers sont les nombres qui peuvent seulement être divisés par 1 et par eux-mêmes.
  1 n'est pas un nombre premier.
  La liste des nombres premiers commence comme cela :
  2, 3, 5, 7, 11, 13, 17, 19 etc ...
*/

/* Tests à passer 🧪 */

console.log(addPrime(10)); // 17
console.log(addPrime(5)); // 10
console.log(addPrime(13)); // 41
