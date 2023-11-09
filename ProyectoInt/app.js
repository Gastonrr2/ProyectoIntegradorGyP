console.log("inicio");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLogo =document.querySelector(".mobile-logo")
const modal = document.getElementById("form_pop");

    mobileMenuIcon.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });

    document.getElementById("abrirModal").addEventListener("click", function () {
      document.getElementById("form_pop").style.display = "block";
      console.log("hola");
    });
    
    document.getElementById("cerrarModal").addEventListener("click", function () {
      document.getElementById("form_pop").style.display = "none";
    });
    






 
