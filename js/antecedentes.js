// Creo el renderizado de los antecedentes de una persona
// Para ello busco con el CUIL de la persona 

const renderCausasAntecedentes = (cuil) => {
    const causas = restaurarAntecedentesLocalStorage(cuil);
    let imprimir = "";
    
    // Si la persona posee antecedentes los imprimo, caso contrario informo que no tiene en curso
    if (causas != null) { 
        for (let causa of causas) {
            imprimir += `<div class="col-md-3 mb-3 pt-5">
                <div>
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal text-center">${causa.materia}</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title text-center">$${causa.importeMulta}</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Causa N°: ${causa.numeroCausa}</li>
                                <li>Fecha Infracción: ${causa.fechaInfraccion}</li>
                                <li>Infracción: ${causa.detalleInfraccion}</li>
                                <li>¿Pude pagar bonificado?: SI editarlo</li>
                            </ul>
                            <form action="../app/causa-detalle.html">
                                <button type="submit" class="w-100 btn btn-lg btn-primary">Ver detalles</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById("causas_antecedentes").innerHTML = imprimir;
    }
    else {
        imprimir += '<div class="tamano-app"><div class="alert alert-success text-center m-5" role="success">A la fecha no registra causas en curso.</div></div>';
        document.getElementById("causas_antecedentes").innerHTML = imprimir;
    }
}

// Obtengo el CUIL almacenado en Session Storage que usaré para buscar antecedentes
const usuario = () =>{
    return JSON.parse(sessionStorage.getItem("cuil"));
}

// Busco las causas del usuario que ingresó
renderCausasAntecedentes(usuario());