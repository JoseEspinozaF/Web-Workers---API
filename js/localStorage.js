function color() {
    const color = document.getElementById('colores').value;
    const body = document.body.style.backgroundColor = color
    localStorage.setItem('storedValue', body);
}

if (localStorage.getItem("storedValue")) {
    const valorGuardado = localStorage.getItem("storedValue")
    document.body.style.backgroundColor = valorGuardado;
}