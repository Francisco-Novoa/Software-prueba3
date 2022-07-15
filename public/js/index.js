{
    window.addEventListener('load', function () {

        const mail = document.getElementById("mailInput")
        const pass = document.getElementById("passInput")
        document.getElementById("loginButton").addEventListener("click", async () => {
            try {
                const result = await axios.post("/api/login", { correo: mail.value, password: pass.value })
                console.log(result)
                this.window.localStorage.setItem("masterbikes", JSON.stringify({
                    id: result.data.id,
                    token: result.data.token,
                    nombre: result.data.nombre
                }))
                this.window.location.replace("/secure_site.html")
            } catch (error) {

            }
        })
        const correo = document.getElementById("emailInput2")
        const pass2 = document.getElementById("passInput2")
        const rut = document.getElementById("rutInput")
        const name = document.getElementById("nameInput")
        const lastname = document.getElementById("lastnameInput")
        const phone = document.getElementById("phoneInput")
        const address = document.getElementById("addressInput")
        document.getElementById("registerButton").addEventListener("click", async () => {
            try {
                const result = await axios.post("/api/users", {
                    correo: correo.value,
                    rut: rut.value,
                    password: pass2.value,
                    nombre: name.value,
                    apellidos: lastname.value,
                    fono: phone.value,
                    direccion: address.value
                })
                console.log(result)
                this.window.localStorage.setItem("masterbikes", JSON.stringify({
                    id: result.data.id,
                    token: result.data.token,
                    nombre: result.data.nombre
                }))
                this.window.location.replace("/secure_site.html")
                99
            } catch (error) {
                console.error(error)
            }
        })

        const loginArea = document.getElementById("loginArea")
        const cookie = JSON.parse(this.window.localStorage.getItem("masterbikes"))
        const saludo = document.getElementById("saludo")
        const logout = document.getElementById("logoutArea")
        if (cookie?.token) {
            loginArea.setAttribute("class", "d-none")
            saludo.innerHTML = `¡Hola ${cookie?.nombre}!`
            logout.classList.remove("d-none")
        }

        const logoutButton = document.getElementById("logout").addEventListener("click", () => {
            this.window.localStorage.removeItem("masterbikes")
            window.location.replace("/")
        })
    })
}