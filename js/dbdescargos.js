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

const buscarDescargosCausa = (idCausa, cuil) => {
    let baseDB = restaurarDocumentosLS();
    if (baseDB !== null){
        for (let documento of baseDB) {
            if ((documento.idCausa === idCausa) &&(documento.cuil === cuil)) {
                documentosEnUnaCausa.push(documento)
            }
        }
    }
    else{
        return false;
    }
}

const eliminarDescargo = (idCausa, cuil) => {
    console.log("Entró al proceso de eliminar Documento.");
    
    let posicion = documentosEnUnaCausa.findIndex(eliminar =>
         ((eliminar.idCausa === idCausa) && (eliminar.cuil === cuil)))
    
    console.log("Posición encontrada? =>", posicion);

    if (posicion > 0) {
        console.log("Está buscando la posición:", posicion);
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
    console.log("Incorporaré un documento en la causa ID NRO.: ", causaSeleccionada());
};

const enviarFormulario = (email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio) => {
    let almacenar = new documento(causaSeleccionada(),usuario(),email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio);
    almacenar.guardarDescargo(almacenar);
    console.log("Capturo Mensaje y almaceno como Objeto: =>",almacenar);
    guardarDBDocumentosLS(baseDocumentos, almacenar);
};

const recuperarDBLocalS = (idPersona) => {
    return JSON.parse(localStorage.getItem(idPersona));
}

const restaurarDocumentosLS = () =>{
    return JSON.parse(localStorage.getItem("documentos"));
}

const guardarDocumentosLS = (info) =>{
    localStorage.setItem("documentos", JSON.stringify(info));
}

const guardarDBDocumentosLS = (baseDocumentos, ultimoDocumento) =>{
    baseActual = restaurarDocumentosLS();
    if (baseActual === null) {
        //console.log("Base Actual en LS =>", baseActual);
        guardarDocumentosLS(baseDocumentos);
    }
    else{
        console.log("Encontré información guardada en Local Storage");
        console.log("Local Storage Previo Actualizacionr => ", baseActual);
        console.log("Se incorporará este Ultimo documento => ", ultimoDocumento);
        let actualizar = baseActual;
        actualizar.push(ultimoDocumento);
        guardarDocumentosLS(actualizar);
        console.log("Local Storage Actualizado => ", actualizar);
    }
};

enviarDescargo();

