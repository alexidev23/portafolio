// menu activo

const li = document.querySelectorAll(".links")
const section = document.querySelectorAll("section")

function activeMenu() {
    let len = section.length
    while(--len && window.scrollY + 67 < section[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"))
    li[len].classList.add("active")
}

activeMenu()

window.addEventListener("scroll", activeMenu)


//Modal

const modal = document.querySelector('dialog')
const salir = document.getElementById('salir')
const abrir = document.getElementById('abrir')

abrir.addEventListener('click', () => modal.showModal())
salir.addEventListener('click', () => modal.close())

// Prueba de informacion para portafolio

const proyectos = [
    {
        "titulo": "Calculadora",
        "tecnologias": ["html","css","javascript"],
        "descripcion": "Este es mi primer proyecto, se trata de unacalculadora que resulve operaciones simples",
        "img": ""
    },

    {
        "titulo": "Portafolio - Entrega final",
        "tecnologias": ["html","css","javascript"],
        "descripcion": "Este es mi primer proyecto, se trata de unacalculadora que resulve operaciones simples",
        "img": ""
    },

    {
        "titulo": "Encriptador de texto",
        "tecnologias": ["html","css","javascript"],
        "descripcion": "Este es mi primer proyecto, se trata de unacalculadora que resulve operaciones simples",
        "img": ""
    },

    {
        "titulo": "Pagina web - Pasteleria",
        "tecnologias": ["html","css","javascript"],
        "descripcion": "Este es mi primer proyecto, se trata de unacalculadora que resulve operaciones simples",
        "img": ""
    }
]

for (x of proyectos) {
    console.log(x.titulo)
}