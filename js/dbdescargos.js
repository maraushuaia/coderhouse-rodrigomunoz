// ESTE DOCUMENTO ESTÁ EN ELABORACION AL 22/01/2023 17:40HS
// Creo un objeto DOCUMENTO
class descargo {
    constructor(id, cuil, idCausa, email, domicilioReal, mensaje, archivo, fechaHoy) {
        this.id = id;
        this.cuil = cuil;        
        this.idCausa = idCausa;
        this.email = email;
        this.domicioReal = domicilioReal;
        this.mensaje = mensaje;
        this.link = link;
        this.fechaEnvio = fechaEnvio;
    };
}

//Busco crear un ARRAY con multiples OBJETOS(documentos) y sus métodos
class dbDescargos {
    baseDescargos = [];
    
    agregar(id, cuil, idCausa, email, domicilioReal, mensaje, archivo, fechaHoy){
        this.baseDescargos.push(new descargo(id, cuil, idCausa, email, domicilioReal, mensaje, archivo, fechaHoy));
    };

    imprimir(){
        this.baseDescargos.forEach(element => {
            console.log(element);
        });
    }
}

const guardarDescargoLocalStorage = (id,descargo) => {
    localStorage.setItem(id, JSON.stringify(descargo));
}

//Busco los antecedentes guardados en LOCAL STORAGE
const buscarDescargoLocalStorage = function(idCausa, cuil) {
    return JSON.parse(localStorage.getItem(idCausa, cuil));
}

guardarDescargoLocalStorage();


const guardarEnvioDescargo = (cuil, idCausa) =>{
    console.log("Entró al proceso para almacenar información de Descargo.!");
    let email = document.getElementById("formEmail").value;
    let domicilioReal = document.getElementById("formDomicilioReal").value;
    let mensaje = document.getElementById("formMensaje").value;
    let archivo = document.getElementById("formArchivo").value;

    console.log(email);
    console.log(domicilioReal);
    console.log(mensaje);
    console.log(archivo);
    console.log("Busco causas del CUIL: "+usuario());
    console.log("Busco causa ID NRO.: "+IdCausaActiva());

    let fechaHoy = new Date();
    
    //let documentoRecibido = dbDescargos.agregar(1, usuario(), idCausa, email, domicilioReal, mensaje, archivo, fechaHoy);
    //console.log(documentoRecibido);
}



guardarEnvioDescargo();