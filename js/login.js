// Guardo en SESSION STORAGE el CUIL que ingresó
const guardarSesionStorage = (tipoRegistro, cuilAcceso) => {
    sessionStorage.setItem(tipoRegistro, cuilAcceso, JSON.stringify(tipoRegistro, cuilAcceso));
};

//Capturo datos del FORMULARIO LOGIN y GUARDO
const formulario = document.getElementById('formLogin');
formulario.addEventListener("submit", guardarCredenciales);

function guardarCredenciales() {
    const cuil = document.getElementById("cuil").value;
    guardarSesionStorage("cuil", cuil);
};