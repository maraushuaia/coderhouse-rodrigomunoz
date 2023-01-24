// Guardo en SESSION STORAGE el CUIL que ingresó
const guardarIdCausaSeleccionadaStorage = (tipoRegistro, idCausa) => {
  sessionStorage.setItem(tipoRegistro, idCausa, JSON.stringify(tipoRegistro, idCausa));
};

//Capturo datos del FORMULARIO LOGIN y GUARDO
const formulario = document.getElementById('enviaDescargo');
formulario.addEventListener("submit", guardarEnvioDescargo);

function guardarCredenciales() {
  const idCausaActiva = document.getElementById("idCausaActiva").value;
  guardarIdCausaSeleccionadaStorage("idCausaActiva", idCausaActiva);
};