// Guardo en SESSION STORAGE el ID de la Card y Causa Seleccionada
// Esa info la utilizo para luego indexar los descargos de cada causa
const guardarCausaSeleccionadaSS = (idCausa) => {
    sessionStorage.setItem("cauSelect", JSON.stringify(idCausa));
};

const buscarCausaSeleccionadaSL = () => {
    return JSON.parse(sessionStorage.getItem("cauSelect"));
}


const verDetalles = (idCausa) => {
    
    let mostrarDetalles = "";
    guardarCausaSeleccionadaSS(idCausa);

    //Busco todos los antecedentes de la persona
    let antecedentes = restaurarAntecedentesLocalStorage(usuario());

    //Busco que la causa exista, para luego "mostrarDetalles"
    let encontrado = antecedentes.some(encontrado => idCausa == encontrado.idCausa);

    // Levanto la información guardada en el ARRAY de Antecedentes de la persona,
    // buscando solo los datos de la causa seleccionada y lo guardo en variable "causa"
    let causa = antecedentes.find(causa => idCausa == causa.idCausa);

    //Estos mensajes me sirven para ver en consola si los parametros se reciben correctamente
    console.log("Haz ingresado en el detalle de una causa. Sus datos son los siguientes:");
    console.log("Busco causas del CUIL: "+usuario());
    console.log("Busco causa ID NRO.: "+idCausa);
    console.log("¿Causa encontrada?: "+encontrado);
    console.log("Objeto de la Causa Encontrada: ", causa);

    //A continuación dibujo una serie de tabs con todos los datos de la causa
    mostrarDetalles += `<div class="row row-cols-1 mb-3 pt-3">
                            <!-- Nav tabs -->
                            <div class="container">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-bs-toggle="tab" href="#home">Carátula</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#menu1">Documentos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#menu2">Movimientos</a>
                                    </li>
                                </ul>
                            </div>

                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div class="tab-pane active" id="home">
                                    <div class="card mb-4 rounded-0 shadow-sm">
                                        <div class="card-header">
                                            <h4 class="py-2"><strong>Causa: ${causa.numeroCausa}</strong></h4>
                                            <h6 class="py-2">Origen: <strong>${causa.materia}</strong></h6>
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
                                                            <th>Dirección de infracción:</th>
                                                            <td>${causa.direccionInfraccion}</td>
                                                        </tr>

                                                        <tr>
                                                            <th>Dominio infraccionado:</th>
                                                            <td>${causa.dominio}</td>
                                                        </tr>

                                                        <tr>
                                                            <th>Detalle de infracción:</th>
                                                            <td>${causa.detalleInfraccion}</td>
                                                        </tr>

                                                        <tr>
                                                            <th>Monto de la multa:</th>
                                                            <td>$${causa.importeMulta}</td>
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
                                            <a class="col-6 mx-2" href="#"><button class="btn btn-primary mb-3 px-5" type="button">Pagar</button></a>
                                            <a class="col-6 mx-2" href="./descargo.html"><button class="btn ro-btn-light mb-3 px-5" type="submit" >Descargo</button></a>
                                            <a class="col-6 mx-2" href="./antecedentes.html"><button class="btn btn-secondary mb-3 px-5" type="button">Volver</button></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Tab DOCUMENTOS-->
                                <div class="tab-pane fade" id="menu1">
                                    <div class="pt-3">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                <th>Ord</th>
                                                <th>Descripción del documento</th>
                                                <th>Fecha del documento</th>
                                                <th>Ver</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                        <td>Carátula</td>
                                                        <td>15/10/2022</td>
                                                    <td><a href="#"><img class="icon-files" src="../img/file-solid.svg" alt=""></a></td>
                                                </tr>

                                                <tr>
                                                    <th>2</th>
                                                    <td>Acta de infracción</td>
                                                    <td>15/10/2022</td>
                                                    <td><a href="#"><img class="icon-files" src="../img/file-solid.svg" alt=""></a></td>
                                                </tr>

                                                <tr>
                                                    <th>3</th>
                                                    <td>Antecedentes del infractor</td>
                                                    <td>15/10/2022</td>
                                                    <td><a href="#"><img class="icon-files" src="../img/file-solid.svg" alt=""></a></td>
                                                </tr>
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <!-- Tab MOVIMIENTOS-->
                                <div class="tab-pane fade" id="menu2">
                                    <div class="pt-3">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Ord</th>
                                                    <th>Movimiento</th>
                                                    <th>Fecha del movimiento</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Ingresa el acta</td>
                                                    <td>15/10/2022</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Verificación para encuadre legal</td>
                                                    <td>15/10/2022</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Emisión de antecedentes</td>
                                                    <td>15/10/2022</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Cédula de emplazamiento lista para notificar</td>
                                                    <td>15/10/2022</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Emplazamiento notificado via ventanilla digital</td>
                                                    <td>17/10/2022</td>
                                                </tr>
                                                <tr>
                                                    <th>6</th>
                                                    <td>En espera de que el infractor accione</td>
                                                    <td>15/10/2022</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                        </div>`;
                    document.getElementById("causasAntecedentes").innerHTML = mostrarDetalles;
 }