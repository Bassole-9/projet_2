let envoi = document.querySelector("form")


envoi.addEventListener("submit", (e)=>{
    e.preventDefault()
    let choisir = JSON.parse(localStorage.getItem("userList") || [])
    let choix = document.querySelector("#choix")
    let montant = document.querySelector("#number")


    let user ={
        choix : choix,
        montant : montant
    }

    choisir.push(user)
    localStorage.setItem("userList", JSON.stringify("choisir"))
    window.location.href="./list.html"

})