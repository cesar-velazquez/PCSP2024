class lectorInmersivo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="modal fade" id="information-1" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="btn-cerrar-modal" data-dismiss="modal" aria-label="Close"
                        accesskey="X">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>

                <div class="modal-body">

                    <div class="container">

                        <div class="text-center mb-3">

                            <p class="parrafo mt-4">
                                <strong>Información de ayuda</strong>
                            </p>

                        </div>

                        <p class="parrafo">
                            Para navegar dentro de la experiencia y acceder de forma más rápida en algunos elementos
                            como botones, enlaces, evaluaciones, puedes utilizar los siguientes atajos:
                        </p>

                        <p class="parrafo mb-0"><b>Windows</b></p>

                        <ul class="parrafo ml-4">
                            <li>Abrir menú principal Alt + M</li>
                            <li>Cerrar menú principal Alt + C</li>
                            <li>Archivo de lectura fácil Alt + L</li>
                        </ul>

                        <p class="parrafo mb-0"><b>MacOS</b></p>

                        <ul class="parrafo ml-4">
                            <li>Abrir menú principal <i lang="en">Control</i> + <i lang="en">Option</i> + M</li>
                            <li>Cerrar menú principal <i lang="en">Control</i> + <i lang="en">Option</i> + C</li>
                            <li>Archivo de lectura fácil <i lang="en">Control</i> + <i lang="en">Option</i> + L</li>
                        </ul>

                    </div>

                </div>

                <div class="modal-footer">
                    <button id="cerrarLectorIn" type="button" class="btn btn-cerrar-modal waves-effect waves-light"
                        style="border-radius: 7px;" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
        
        `;

    }
}

customElements.define('modal-lectorinmersivo', lectorInmersivo);