class Ayuda extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div aria-hidden="true" class="modal fade" id="methods-help" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div aria-hidden="true" class="modal-content">

                <div class="modal-header">

                    <button aria-hidden="true" type="button" role="dialog" class="btn-cerrar-modal" data-dismiss="modal"
                        aria-label="Cerrar">
                        <span id="closed" aria-hidden="true">×</span>
                        <span id="cerrar" class="identificador3">cerrar</span>
                    </button>
                </div>

                <div class="modal-body">

                    <div class="container">

                        <div class="text-center">
                            <p aria-hidden="true" class="parrafo text-azul">
                                Comandos de voz
                            </p>
                        </div>
                        <p aria-hidden="true" class="mb-0 text-azul" ><b>Para utilizar esta función:</b></p>
                        <p aria-hidden="true" class="mb-2rem">
                            Presiona el botón <img src="./images/accesibilidad/comandosdeVozMayuda3.png"
                                alt="Icono de ayuda"> para activar el micrófono y los comandos.</p>
                        <p aria-hidden="true" class="text-azul mb-0">
                            <b>Elementos en pantalla:</b>
                        </p>
                        <ol aria-hidden="true" class="padding_left mb-2rem" style="list-style: lower-latin;">
                            <li>
                                En la parte inferior de la página, ubica el micrófono y la barra de voz.
                            </li>
                            <li>
                                El micrófono en verde indica que está recibiendo información.
                            </li>
                            <li>
                                La barra de voz escribirá la función que estás activando.
                            </li>
                        </ol>
                        <p aria-hidden="true" class="text-azul mb-0">
                            <b>Para navegar:</b>
                        </p>
                        <ol aria-hidden="true" class="padding_left" style="list-style: lower-latin;">
                            <li>
                                <p class="parrafo mb-0">
                                    Menciona de manera clara el número de la sección a la cual te deseas dirigir. Ejemplo:
                                </p>                            
                                <p class="parrafo mb-0">
                                    Uno o número uno (abrirá el menú).
                                </p>
                                <p class="parrafo mb-0">
                                    Dos o número dos (cerrará el menú). 
                                </p>
                            </li>
                            <li>
                            <p class="mb-0">
                            Menciona “desplazar hacia arriba” para visualizar la información superior.
                            </p>
                            </li>
                                                        <li>
                            <p class="mb-0">
                            Menciona “desplazar hacia abajo” para visualizar la información inferior.
                            </p>
                            </li>
                            <li>
                                <p class="mb-0 parrafo">Para abrir nuevamente esta ventana menciona: cero.</p>
                                <p class="mb-0 parrafo"> Para cerrarla menciona: cerrar.</p>
                            </li>
                            <li>
                                <p class="mb-0 parrafo">Para recargar la página menciona: F5</p>
                            </li>
                        </ol>

                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-cerrar-modal waves-effect waves-light"
                        style="border-radius: 7px;" data-dismiss="modal">
                        Cerrar    
                        <span id="btnCerrarv2" class="identificador3">cerrar</span>                    
                    </button>
                </div>

            </div>
        </div>
    </div>
        
        `;

    }
}

customElements.define('modal-ayuda', Ayuda);