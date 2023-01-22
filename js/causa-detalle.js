const buscarDetalles = (idCausa, cuil) => {
    let imprimir = "";

    //Busco todos los antecedentes de la persona
    let antecedentes = restaurarAntecedentesLocalStorage(cuil);
    
    //Busco que el registro exista, para luego en el IF imprimir
    let encontrado = antecedentes.some(encontrado => idCausa == encontrado.idCausa);

    // Levanto la información guardada en el ARRAY de Antecedentes de la persona, buscando solo los datos de la causa
    // seleccionada
    let causa = antecedentes.find(causa => idCausa == causa.idCausa);
    
    if (encontrado != null) {
        imprimir += 
            `<div class="card mt-4 mb-4 rounded-0 shadow-sm">
                <div class="card-header">
                    <h4 class="py-2">Número de causa: ${causa.numeroCausa}</h4>
                    <h6 class="py-2">Tipo de infracción: ${causa.materia}</h6>
                </div>
                <div class="card-body">
                    <div class="pt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Fecha Infracción:</th>
                                    <td>${causa.fechaInfraccion}</td>
                                </tr>
                                <tr>
                                    <th>Dominio:</th>
                                    <td>${causa.dominio}</td>
                                </tr>
                                <tr>
                                    <th>Infracción:</th>
                                    <td>${causa.detalleInfraccion}</td>
                                </tr>
                                <tr>
                                    <th>Monto de la multa:</th>
                                    <td>$${causa.importeMulta}</td>
                                </tr>
                                <tr>
                                    <th>Dirección de infracción:</th>
                                    <td>${causa.direccionInfraccion}</td>
                                </tr>
                                <tr>
                                    <th>Pago bonificado:</th>
                                    <td>A la fecha sí puede acceder al pago bonificado, lo que reduce el monto de la multa en un 50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-12 gap-2 mx-auto text-center pt-3">
                    <a class="col-6 mx-2" href="./pago.html"><button class="btn btn-primary mb-3 px-5" type="button">Pagar</button></a>
                    <a class="col-6 mx-2" href="./descargo.html"><button class="btn ro-btn-light mb-3 px-5" type="button">Descargo</button></a>
                    <a class="col-6 mx-2" href="./causas-activas.html"><button class="btn btn-secondary mb-3 px-5" type="button">Volver</button></a>
                </div>
            </div>`;

            document.getElementById("causas_antecedentes").innerHTML = imprimir;
        }
        
    else {
            imprimir += '<div style="margin-top: 1em; margin-bottom: 15.5em;"><div class="alert alert-success text-center m-5" role="success">A la fecha no registra causas en curso.</div></div>';
            document.getElementById("causas_antecedentes").innerHTML = imprimir;
        }
}






/*
const seleccionarCausa = (id) => {
    
    console.log();

    let imprimir = "";

    for (let causa of causas) {
        imprimir += `<div class="card mb-4 rounded-0 shadow-sm">
                        <div class="card-header">
                            <h5 class="py-2">Causa N°: ${causa.numeroCausa} (${causa.materia})</h5>
                        </div>
                        <div class="card-body">
                            <div class="pt-3">
                                <table class="table">
                                <thead>
                                    <tr>
                                    <th>Items</th>
                                    <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th>Fecha Infracción:</th>
                                    <td>${causa.fechaInfraccion}</td>
                                    </tr>
                                    <tr>
                                    <th>Dominio:</th>
                                    <td>${causa.dominio}</td>
                                    </tr>
                                    <tr>
                                    <th>Infracción:</th>
                                    <td>${causa.detalleInfraccion}</td>
                                    </tr>
                                    <tr>
                                    <th>Monto de la multa:</th>
                                    <td>$${causa.importeMulta}</td>
                                    </tr>
                                    
                                    <tr>
                                    <th>Dirección de infracción:</th>
                                    <td>${causa.direccionInfraccion}</td>
                                    </tr>

                                    <tr>
                                    <th>Pago bonificado:</th>
                                    <td>A la fecha sí puede acceder al pago bonificado, lo que reduce el monto de la multa en un 50%</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    <div class="col-12 gap-2 mx-auto text-center pt-3">
                        <a class="col-6 mx-2" href="./pago.html"><button class="btn btn-primary mb-3 px-5" type="button">Pagar</button></a>
                        <a class="col-6 mx-2" href="./descargo.html"><button class="btn ro-btn-light mb-3 px-5" type="button">Descargo</button></a>
                        <a class="col-6 mx-2" href="./causas-activas.html"><button class="btn btn-secondary mb-3 px-5" type="button">Volver</button></a>
                    </div>
                    
                    </div>`;
        }
        document.getElementById("caratulaCausa").innerHTML = imprimir;
};

seleccionarCausa(idUsuario());
*/