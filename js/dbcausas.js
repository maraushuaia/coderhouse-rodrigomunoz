// Creo antecedentes de las personas que compondrán mi DB
const antecedentesRodrigo = [
    {idcausa:1, numeroCausa:"T-222222-0/2022", materia:"Tránsito", fechaInfraccion:"15/01/2022", dominio:"AA123BB", detalleInfraccion:"Circular con alcoholemia positiva", direccionInfraccion:"Av. Leandro N. Alem 37500", importeMulta:244000, documentos:[{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"},{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"},{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"}]},
    {idcausa:2, numeroCausa:"P-123456-0/2022", materia:"Obra Privada", fechaInfraccion:"01/04/2022", detalleInfraccion:"Violar paralización de Obra", direccionInfraccion:"Av. 25 de Mayo N°17698", importeMulta:125000, documentos:[{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/04/2022"}, {id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/04/2022"},]},
]

const antecedentesJonatan = [
    {idcausa:1, numeroCausa:"T-123456-0/2022", materia:"Tránsito", fechaInfraccion:"15/01/2022", dominio:"AA123BB", detalleInfraccion:"Cruzar semáforo con luz roja", direccionInfraccion:"Av. Leandro N. Alem 37500", importeMulta:97600, documentos:[{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"},{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"},{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"}]},
    {idcausa:2, numeroCausa:"Z-123456-0/2022", materia:"Zoonosis", fechaInfraccion:"10/02/2022", detalleInfraccion:"Can en via pública", direccionInfraccion:"Av. Maipu 4587", importeMulta:18300, documentos:[{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"}, {id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"},]},
    {idcausa:3, numeroCausa:"H-123456-0/2021", materia:"Comercio", fechaInfraccion:"10/10/2021", detalleInfraccion:"Ejercer actividad comercial sin habilitacion vigente", direccionInfraccion:"Av. Republica 37500", importeMulta:350000, documentos:[{id:1, idcausa:1, archivo:"archivoUNO", descripcion:"Este documento es una carátula", fechaDocumento:"15/01/2023"}]},
]

//Guardo los datos de los antecedentes en LOCAL STORAGE
const guardarAntecedentesLocalStorage = (idPersona, antecedente) => {
    localStorage.setItem(idPersona, JSON.stringify(antecedente));
}

//Busco los antecedentes guardados en LOCAL STORAGE
const restaurarAntecedentesLocalStorage = function(idPersona) {
    return JSON.parse(localStorage.getItem(idPersona));
}

// Guardo en LOCALSTORAGE todos los antecedentes de las personas que aceptaré operar
const persona1 = guardarAntecedentesLocalStorage("1234", antecedentesRodrigo);
const persona2 = guardarAntecedentesLocalStorage("12345", antecedentesJonatan);


//Busco el detalle de una causa
const detalleCausa = function(idPersona, idCausa){
    return detalle = restaurarAntecedentesLocalStorage(idPersona).find( causa => causa.idCausa === idCausa);
};