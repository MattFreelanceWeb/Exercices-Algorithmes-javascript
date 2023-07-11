function getLongestWord(str) {
  const arrStr = str.split(" ");
  let wordMaxLength = arrStr[0];
  for (i = 0; i < arrStr.length; i++) {
    if(arrStr[i].length > wordMaxLength.length){
        wordMaxLength = arrStr[i]
    }
  }
  return wordMaxLength.length
}

/* ÉNONCÉ 📚 */

/* Trouvez la longueur du mot le plus long dans une phrase et retournez-la. */

/* Tests à passer 🧪 */

console.log(getLongestWord("Du sublime au ridicule il n'y a qu'un pas.")); // 8
