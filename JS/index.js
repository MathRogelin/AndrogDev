const navbar = document.querySelector("#navbar")
const labelIcon = document.querySelector("header label")

navbar.addEventListener("change", (e)=>{
    if(navbar.checked){
        console.log("Abriu menu...")
        labelIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }else{
        console.log("Fechou menu...")
        labelIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
})