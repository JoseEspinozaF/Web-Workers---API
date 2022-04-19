
function webStoragrInit() {
    if (typeof (Storage) !== "undefined") {
        const boton = document.getElementById("login2");
        boton.addEventListener("click", nuevoitem);
    } else {
        alert("Su navegador no soporta Web Storage")

    }

}

function nuevoitem() {
    const user = document.getElementById("usuario2").value;
    const passwordd = document.getElementById("pass2").value;
    sessionStorage.setItem("usuario", user);
    sessionStorage.setItem("contrasena", passwordd);
    const cajadatos = document.getElementById("cajadatos2");
    cajadatos.innerHTML = "<div  style='font-size: 1.4rem; font-family: Verdana, Geneva, Tahoma, sans-serif; color: red;'>" + sessionStorage.getItem("usuario") + " - " + sessionStorage.getItem("contrasena") + "</div>";

}

window.addEventListener("load", webStoragrInit);