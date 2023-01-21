/*
let newColors = colores.map((color, index) => {
  if(index === 2){
    return color
  }
});
console.log(newColors);


let detalles = restaurarAntecedentesLocalStorage(usuario()).map((idCausa, index) => {
  if (index === idCausa){
    return detalles
  }
});


*/

// Busco los detalles de cada causa

/*
const detallesCausa = () => {
    let idUsuario = usuario();

    const contenido = restaurarAntecedentesLocalStorage(idUsuario,"T-222222-0/2022");
    
    console.log (contenido);

    let imprimir = "";

    for (let causa of contenido) {
    imprimir += `<div class="card mb-4 rounded-0 shadow-sm">
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
    document.getElementById("caratulaCausa").innerHTML = imprimir;
}

detallesCausa(usuario());
*/

/*
                <div class="tab-pane active " id="home">
                  <div class="card mb-4 rounded-0 shadow-sm">
                    <div class="card-header">
                      <h5 class="py-2">Causa N°: T-123456-0/2022</h5>
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
                                  <td>15/10/2022</td>
                                </tr>
                                <tr>
                                  <th>Dominio:</th>
                                  <td>AA123ZZ</td>
                                </tr>
                                <tr>
                                  <th>Infracción:</th>
                                  <td>Cruzar semáforo con luz roja</td>
                                </tr>
                                <tr>
                                  <th>Monto de la multa:</th>
                                  <td>$76.600</td>
                                </tr>
                                <tr>
                                  <th>Pago bonificado:</th>
                                  <td>A la fecha sí puede acceder al pago bonificado, lo que reduce el monto de la multa en un 50%</td>
                                </tr>
                                <tr>
                                  <th>Dirección de infracción:</th>
                                  <td>Av. Leandro N. Alem 37500</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 gap-2 mx-auto text-center pt-3">
                    <a class="col-6 mx-2" href="./pago.html"><button class="btn btn-primary mb-3 px-5" type="button">Pagar</button></a>
                    <a class="col-6 mx-2" href="./descargo.html"><button class="btn ro-btn-light mb-3 px-5" type="button">Descargo</button></a>
                    <a class="col-6 mx-2" href="./causas-activas.html"><button class="btn btn-secondary mb-3 px-5" type="button">Volver</button></a>
                  </div>
                </div>
*/