"use strict";

import { VideoSystem } from "./VideoSystem.js";
import { Category } from "./Category.js";

export function testApp() {
    // Instancia singleton
    const nuevaInstancia = VideoSystem.getInstance("Nueva");
    const nuevaInstancia2 = VideoSystem.getInstance("nueva2");

    // Comprobación singleton
    console.log(`Nombre de la instancia 1: ${nuevaInstancia.name}`);
    console.log(`Nombre de la instancia 2: ${nuevaInstancia2.name}`);

    // Crear categorías
    const cat1 = new Category("Acción", "Películas de acción");
    const cat2 = new Category("Drama")
    nuevaInstancia.addCategory(cat1);
    nuevaInstancia.addCategory(cat2);

    // Muestro categorías
    for (const cat of nuevaInstancia.categories) {
        console.log(cat.name, cat.description);
    }

}

window.onload = testApp;