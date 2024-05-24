class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <ul class="sidebar__lista container">

        <li class="sidebar__elemento">
            <a class="sidebar__enlace titulo-nav-modulo sidebar__elemento--borde" href="index.html">Inicio</a>
        </li>

        <li class="sidebar__elemento">
            <a class="sidebar__enlace sidebar__elemento--borde" href="informaciongeneral.html">Información general</a>
        </li>
        
        <li class="sidebar__elemento sangria-menu">
            <a class="sidebar__enlace" href="./topic1/topic-1.html"><b></b>Tema 1. Introducción a la seguridad de la información</a>
        </li>

        <li class="sidebar__elemento sangria-menu">
            <a class="sidebar__enlace" href="./topic1/topic-1_1.html">Tema 2. Seguridad de la información
            </a>
        </li>

        <li class="sidebar__elemento sangria-menu">
            <a class="sidebar__enlace" href="#">Tema 3. Ciberseguridad
            </a>
        </li>

        <li class="sidebar__elemento sangria-menu">
            <a class="sidebar__enlace" href="#">Tema 4. Aplicación de la seguridad de la información 
            </a>
        </li>

    </ul>
        `;
    }
}

customElements.define("menu-component-2", Menu2);
