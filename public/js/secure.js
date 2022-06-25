{
    window.addEventListener('load', () => {
        const cookie = JSON.parse(this.window.localStorage.getItem("masterbikes"))
        const token = cookie?.token
        const id = cookie?.id
        const nombre = cookie?.nombre
        if (!token) {
            window.location.replace("/")
        }
        const logoutButton = document.getElementById("logout").addEventListener("click", () => {
            this.window.localStorage.removeItem("masterbikes")
            window.location.replace("/")
        })

        const saludo = document.getElementById("saludo").innerHTML = `¡Hola ${nombre}!`
    })
}