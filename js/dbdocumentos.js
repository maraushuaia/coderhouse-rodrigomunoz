// Creo un objeto DOCUMENTO
class documento {
    constructor(id, cuil, idCausa, descripcion, fecha, link) {
        this.id = id;
        this.cuil = cuil;        
        this.idCausa = idCausa;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.link = link;
    }
}

//Busco crear un ARRAY con multiples OBJETOS(documentos) y sus métodos
class dbDocumentos {
    baseDocumentos = [];
    
    agregar(id, cuil, idCausa, descripcionDocumento, fechaDocumento, link){
        this.baseDocumentos.push(new documento(id, cuil, idCausa, descripcionDocumento, fechaDocumento, link));
    }

    imprimir(){
        this.baseDocumentos.forEach(element => {
            console.log(element);
        });
    }
}

const guardarDocumento = () =>{
    
}

