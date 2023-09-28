let valider = document.querySelector(".valider")

valider.addEventListener("click", (e)=>{
    e.preventDefault();
    let bdUser=JSON.parse(localStorage.getItem("userList")) || [];
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let email = document.querySelector("#email").value;
    let ville = document.querySelector("#ville").value;
    let pays = document.querySelector("#pays").value;
    let number = document.querySelector("#number").value;
    let motDePasse = document.querySelector("#motdepasse").value;


    let user = {

        nom : nom,
        prenom : prenom,
        email : email,
        ville : ville,
        pays : pays,
        number : number,
        motDePasse : motDePasse
    }

    console.log(bdUser);

    bdUser.push(user)
    localStorage.setItem("userList", JSON.stringify(bdUser));
    window.location.replace("../index/for.html")
})


