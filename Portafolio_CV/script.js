
((d) => {
const $btnMenu = d.querySelector(".menu-btn"),
$menu = d.querySelector(".menu");

$btnMenu.addEventListener("click",(e)=>{
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
});

d.addEventListener("click",(e)=>{
    if(!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
})
})(document);


// validar formulario
//todas las variables que hagan referencia al DOM se le agrege el $ ---->Buena practic
((d) =>{
const $form = d.querySelector(".contact-form"),
$loader = d.querySelector(".contact-form-loader"),
$response = d.querySelector(".contact-form-response");

$form.addEventListener("submit",e=>{
e.preventDefault();
$loader.classList.remove("none");
fetch("https://formsubmit.co/ajax/aguirrem220795@gmail.com",{
    method:"POST",
    body:new FormData(e.target)
})
.then((response) => (response.ok?response.json():Promise.reject(response)))
.then((json) =>{
    console.log(json)
    location.hash = "#gracias";
    $form.reset();    
})
.catch(error =>{
    console.log(error);
    let message = error.statusText || "Ocurrió un error al enviar, intenta nuevamente"
    $response.querySelector("H3").innerHTML= `Error ${error.status}:${message}`
}).finally(()=>{
    $loader.classList.add("none");
    setTimeout(()=>{
        location.hash = "#cerrar";
    },3000)
})
});
})(document);