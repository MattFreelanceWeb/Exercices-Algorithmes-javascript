function sameLetters(arr) {

  const arrStrN1 = arr[1].split('')
  let countTrue = 0

  for(i of arrStrN1){
    if(arr[0].includes(i)){
      countTrue++
    }
  }

  return countTrue === arrStrN1.length
}


/* ÉNONCÉ 📚 */

/*
   Créez un Algorithme qui vérifie si le premier argument contient au moins une fois toutes les lettres du second, si oui, on retourne true, sinon on retourne false.
 */

/* Tests à passer 🧪 */

 console.log(sameLetters(["concupiscence", "sens"]));  // true
 console.log(sameLetters(["chat", "chien"]));          // false
 console.log(sameLetters(["bonjour", "jour"]));        // true


