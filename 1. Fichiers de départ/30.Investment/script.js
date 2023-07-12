function investment(arr) {
  const weekdays= ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']

  let countInvestment = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > countInvestment) {
        countInvestment = arr[j] - arr[i];
        date = [weekdays[i],weekdays[j]]
      }
    }
  }
  if(countInvestment === 0){
    return `pas d'investissement à faire cette semaine`
  } else {
    return `vous aurez gagné ${countInvestment} en investissant le ${date[0]} et en revendant le ${date[1]}`
  }
}

//[2,50,10,20,80,60,20]
/* ÉNONCÉ 📚 */

/*
  Cet algorithme reçoit un tableau représentant le cours de l'or sur sept jours.
  Vous devez, grâce à un algorithme, retourner le meilleur jour pour investir et 
  le meilleur jour pour vendre.

  En prenant le premier test, le meilleur jour pour investir est Lundi, avec un cours
  à 2€ et le meilleur pour vendre est Vendredi, avec un cours à 80€.
  Le bénéfice sera donc de 78€.  

  Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
  le Lundi et de revendre le Vendredi pour un bénéfice de 78." 

  Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
  retourner le jour d'achat, le jour de vente, et le montant du bénéfice. 

  Si il n'y a pas de bénéfice possible, retournez : "Pas de bénéfice possible cette semaine."

  Bon courage !
*/

/* Tests à passer 🧪 */

console.log(investment([2, 50, 10, 20, 80, 60, 20])); // Investir Lundi, vendre Vendredi, benef : 78
console.log(investment([3560, 4550, 5457, 6542, 4320, 6050, 2002])); // Investir Jeudi, vendre Dimanche, benef : 2982
console.log(investment([38, 23, 28, 29, 24, 32, 35])); // Investir Mardi, vendre Dimanche, benef : 12
