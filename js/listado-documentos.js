const listadoDocumentosEnviados = () => {
    let imprimirListado = "";

    if (buscarDescargosCausa(buscarCausaSeleccionadaSL(), usuario()) !== null) {

        let listadoDocumentos = documentosEnUnaCausa;
        let index = listadoDocumentos.length;
        console.log("Cantidad de Documentos =>", index);

        let orden = 0;

        console.log("Documentos de la Causas => ", listadoDocumentos);
        if (listadoDocumentos !== null) {
            for (let documento of listadoDocumentos) {
                orden = orden + 1;
                imprimirListado += 
                    `<div class="pt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width=64px">Ord</th>
                                    <th>Fecha de Envío</th>
                                    <th>Tipo de Contacto</th>
                                    <th>Mensaje</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                         
                            <tbody>
                                <tr>
                                    <th style="width: 10%;">${orden}</th>
                                    <td style="width: 20%;">${documento.fechaEnvio}</td>
                                    <td style="width: 15%;">${documento.tipoDocumento}</td>
                                    <td style="width: 53%;">${documento.mensaje}</td>
                                    <td><a href="#"><img class="icon-files" src="../img/delete-icons.svg" alt="" onclick="eliminarDescargo(${documento.idCausa}, usuario())"></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`
                document.getElementById("documentosEnviados").innerHTML = imprimirListado;
            }
        }                    
        else {
            imprimirListado += '<div style="margin-top: .5em; margin-bottom: 1em;"><div class="alert alert-success text-center m-5" role="success">A la fecha no hemos recibido correos.</div></div>';
            document.getElementById("documentosEnviados").innerHTML = imprimirListado;
            }
    }
}

listadoDocumentosEnviados();
