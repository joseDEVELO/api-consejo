const boton = document.querySelector(".reproducir-boton");
const consejo = document.querySelector(".texto h2");
const id = document.querySelector(".texto p")

boton.addEventListener("click", async () => {
    /* llamando la API */
        const API = await fetch('https://api.adviceslip.com/advice')
        let data = await API.json()
        consejo.innerHTML = `" ${data.slip.advice} "`
        id.innerHTML = `CONSEJO #${data.slip.id}`
    
})


ssadfada