// selecionar objetos
const navbar = document.querySelector("#navbar")
const labelIcon = document.querySelector("header label")
const linksNav = document.querySelectorAll("header nav ul li a")
// abrir e fechar navbar
function navbarEstado(){
    navbar.addEventListener("change", (e)=>{
        if(navbar.checked){
            console.log("Abriu menu...")
            labelIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        }else{
            console.log("Fechou menu...")
            labelIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
        }
    })
}

// ancoras
function ancoras(){
    linksNav.forEach((link, i)=>{
        // debug
        console.log(`${i + 1}: `, link)
        // evento de click fecha a nav
        link.addEventListener("click", (e)=>{
            // evitar recarregar a página
            e.preventDefault()
            navbar.checked = false
            navbar.dispatchEvent( new Event("change"))
        })
    })
}

function verificarNavbar(){
    /* Ideia do chat */
    // fechar navbar se clicar fora
    document.addEventListener("click", (e) => {
        // variavel com parâmetro e elementos da navbar, label e header
        const isClickInsideNavbar = navbar.contains(e.target) || labelIcon.contains(e.target) || e.target.closest("header nav")
        // se NÃO clicou dentro da navbar e o menu está aberto, então fecha
        if (!isClickInsideNavbar && navbar.checked) {
            navbar.checked = false
            navbar.dispatchEvent(new Event("change"))
            // debug
            console.log("Clicou fora da navbar")
        }
    })
}

// chama funções
navbarEstado()
ancoras()
verificarNavbar()
