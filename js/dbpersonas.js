const usuariosGlobales = [
    {id:1, dniPersona:1234, nombre: "Rodrigo"},
    {id:2, dniPersona:12345, nombre: "Jonatan"},
    {id:3, dniPersona:123456, nombre: "Franco"},
    {id:4, dniPersona:1234567, nombre: "Maximiliano"},
]

const guardarPersonasLocalStorage = (idGlobal, credenciales) => {
    localStorage.setItem(idGlobal, JSON.stringify(credenciales));
};

const restaurarCredencialesLocalStorage = function(dniPersona) {
    return JSON.parse(localStorage.getItem(dniPersona));
};

const rodrigo = guardarPersonasLocalStorage("1", usuariosGlobales);