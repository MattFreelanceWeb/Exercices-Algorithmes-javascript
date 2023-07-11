function getTime() {
    const date =new Date

    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    return hour +':'+min+':'+sec

};


/* ÉNONCÉ 📚 */

/*
 Créez un algorithme qui retourne l'heure affichée sous la forme : hh:mm:ss
 Utilisez l'objet date qui regorge d'informations pratiques lorsqu'on manipule le temps en JS.
*/


/* Tests à passer 🧪 */

console.log(getTime()); // 12:00:00 (par ex)




