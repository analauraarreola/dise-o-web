var hamburguer = document.querySelector('.hamburger-icon');
hamburguer.addEventListener('click', ()=>){
    var nav= document.querySelector ('.toggle');
    console.log("clickec");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else{
        nav.styele.display ="block"
    }
}}