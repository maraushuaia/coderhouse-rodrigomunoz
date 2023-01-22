// Obtengo el CUIL almacenado en Session Storage que usaré para buscar antecedentes
const usuario = () =>{
    return JSON.parse(sessionStorage.getItem("cuil"));
};