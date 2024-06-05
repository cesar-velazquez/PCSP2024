class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        
        <ul class="sidebar__lista container">

            <li class="sidebar__elemento">
                <a class="sidebar__enlace titulo-nav-modulo sidebar__elemento--borde" href="index.html">Inicio <span id="ident3" class="identificador2"> 3 </span> </a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="informaciongeneral.html">Información general <span id="ident4" class="identificador2"> 4 </span></a>
            </li>
            
            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="modulo-1.html">Módulo 1. Pensamiento crítico para la solución de problemas <span id="ident5" class="identificador2"> 5 </span></a>
            </li>

            <li class="sidebar__elemento sangria-menu">
            <a class="sidebar__enlace" href="modulo-1/actividad.html">Módulo 1. Actividades de aprendizaje <span id="ident6" class="identificador2"> 6 </span></a>
            </li>


            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="#">Módulo 2. Pensamiento crítico para formular problemas <span id="ident7" class="identificador2"> 7 </span></a>
            </li>

            <li class="sidebar__elemento sangria-menu">
            <a class="sidebar__enlace" href="tema1.html">Módulo 2. Actividades de aprendizaje <span id="ident8" class="identificador2"> 8 </span> </a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="#">Módulo 3. Pensamiento crítico para solucionar problemas<span id="ident9" class="identificador2"> 9 </span>
                </a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="glosario.html">Módulo 3. Actividades de aprendizaje <span id="ident10" class="identificador2"> 10 </span></a>
            </li>

        </ul>

        `;

    }
}

customElements.define('menu-component', Menu);

