let valider = document.querySelector("form")

valider.addEventListener("submit", (e)=>{
    e.preventDefault()
   let bdUser = JSON.parse(localStorage.getItem("userList"))
   let resultat;


   bdUser.forEach(element => {

    if ( document.querySelector("#email").value === element.email &&
    document.querySelector("#password").value === element.motDePasse) {
        resultat=element
        
    }
   
   });
   console.log(resultat);
   if (typeof resultat !== "undefined") {
    localStorage.setItem('session', JSON.stringify([resultat]))
    alert("connecter avec succes")
    window.location.href = "./acc.html"
   }else{
    alert('incorrect')
    window.location.reload()
   }




})

