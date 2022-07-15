{
  window.addEventListener("load", function () {
    const mail = document.getElementById("mailInput");
    const pass = document.getElementById("passInput");
    document
      .getElementById("loginButton")
      .addEventListener("click", async () => {
        try {
          const result = await axios.post("/api/login", {
            correo: mail.value,
            password: pass.value,
          });
          console.log(result);
          window.localStorage.setItem(
            "masterbikes",
            JSON.stringify({
              id: result.data.id,
              token: result.data.token,
              nombre: result.data.nombre,
            })
          );
          console.log(window.localStorage.getItem("masterbikes"));
          window.location.replace("/secure_site.html");
        } catch (error) {
          console.error(error);
        }
      });

    const correo = document.getElementById("emailInput2");
    const pass2 = document.getElementById("passInput2");
    const rut = document.getElementById("rutInput");
    const name = document.getElementById("nameInput");
    const lastname = document.getElementById("lastnameInput");
    const phone = document.getElementById("phoneInput");
    const address = document.getElementById("addressInput");
    document
      .getElementById("registerButton")
      .addEventListener("click", async () => {
        try {
          const result = (
            await axios.post("/api/users", {
              correo: correo.value,
              rut: rut.value,
              password: pass2.value,
              nombre: name.value,
              apellidos: lastname.value,
              fono: phone.value,
              direccion: address.value,
            })
          ).data;
          window.localStorage.setItem(
            "masterbikes",
            JSON.stringify({
              id: result.data.id,
              token: result.data.token,
              nombre: result.data.nombre,
            })
          );
          console.log(window.localStorage.getItem("masterbikes"));
          window.location.replace("/secure_site.html");
        } catch (error) {
          console.error(error);
        }
      });

    const loginArea = document.getElementById("loginArea");
    const toSS = this.document.getElementById("ss");
    const cookie = JSON.parse(window.localStorage.getItem("masterbikes"));
    const saludo = document.getElementById("saludo");
    const logout = document.getElementById("logoutArea");
    const register = this.document.getElementById("register");
    if (cookie?.token) {
      register.setAttribute("class", "d-none");
      loginArea.setAttribute("class", "d-none");
      saludo.innerHTML = `¡Hola ${cookie?.nombre}!`;
      logout.classList.remove("d-none");
    } else {
      toSS.setAttribute("class", "d-none");
    }
  });
}
