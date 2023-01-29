const baseDocumentos = [];
const documentosEnUnaCausa = [];

class documento {
    constructor(idCausa, cuil, email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio) {
        this.idCausa = idCausa;
        this.cuil = cuil;
        this.email = email;
        this.domicilioReal = domicilioReal;
        this.mensaje = mensaje;
        this.tipoDocumento = tipoDocumento;
        this.archivo = archivo;
        this.fechaEnvio = fechaEnvio;
    };

    guardarDescargo(documento) {
        baseDocumentos.push(documento);
    }
}

const buscarDescargosCausa = (idCausa) => {
    let baseDB = baseDocumentos;
    for (let documento of baseDB) {
        if (documento.idCausa === idCausa) {
            documentosEnUnaCausa.push(documento)
        }
    }
}

const eliminarDescargo = (idCausa, cuil) => {
    let posicion = documentosEnUnaCausa.findIndex(eliminar =>
         ((eliminar.id === id) && (eliminar.idCausa === idCausa) && (eliminar.cuil === cuil)))
    
    if (posicion > 0) {
        documentosEnUnaCausa.splice(posicion,1);
    }
}

const causaSeleccionada = () =>{
    return JSON.parse(sessionStorage.getItem("cauSelect"));
};

const enviarDescargo = () => {
    const formulario = document.getElementById("enviaDescargo");
    formulario.onsubmit = (event) => {
        event.preventDefault();
        let email = document.getElementById("formEmail").value;
        let domicilioReal = document.getElementById("formDomicilioReal").value;
        let mensaje = document.getElementById("formMensaje").value;
        let tipoDocumento = document.getElementById("tipoContacto").value;
        let archivo = document.getElementById("formArchivo").value;
        let fechaEnvio = new Date();
        enviarFormulario(email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio);
    }
    console.log("Opero con el usuario CUIL: "+usuario());
    console.log("Incorporaré un contacto en causa ID NRO.: ", causaSeleccionada());
}

function enviarFormulario(email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio) {
    let almacenar = new documento(causaSeleccionada(),usuario(),email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio);
    almacenar.guardarDescargo(almacenar);
}

enviarDescargo();