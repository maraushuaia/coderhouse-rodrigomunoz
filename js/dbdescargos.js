// ESTE DOCUMENTO ESTÁ EN ELABORACION AL 22/01/2023 17:40HS
// Creo un objeto DOCUMENTO
class descargo {
    constructor(id, cuil, idCausa, email, domicilioReal, nota, link, fechaEnvio) {
        this.id = id;
        this.cuil = cuil;        
        this.idCausa = idCausa;
        this.email = email;
        this.domicioReal = domicilioReal;
        this.nota = nota;
        this.link = link;
        this.fechaEnvio = fechaEnvio;
    }
}

//Busco crear un ARRAY con multiples OBJETOS(documentos) y sus métodos
class dbDescargos {
    baseDescargos = [];
    
    agregar(id, cuil, idCausa, email, domicilioReal, nota, link, fechaEnvio){
        this.baseDocumentos.push(new documento(id, cuil, idCausa, email, domicilioReal, nota, link, fechaEnvio));
    }

    imprimir(){
        this.baseDocumentos.forEach(element => {
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


const almacenar = () =>{
    console.log("Entró al proceso para almacenar información de Descargo.!");
    let datos = document.getElementById("formEmail").value;
    console.log(datos);
}

almacenar();

/*
formEmail
formDomicilioReal
formMensaje
formArchivo
 */