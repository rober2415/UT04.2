"use strict";

import { VideoSystem } from "./VideoSystem.js";
import { Category } from "./Category.js";

export function testApp() {
    // Instanacia singleton
    const nuevaInstancia = VideoSystem.getInstance("Nueva");
    const nuevaInstancia2 = VideoSystem.getInstance("nueva2");

    // Comprobación singleton
    console.log(`Nombre de la instancia 1: ${nuevaInstancia.name}`);
    console.log(`Nombre de la instancia 2: ${nuevaInstancia2.name}`);

    // addCategory
    const cat1 = new Category("Categoría1", "Descripción categoría1");
    const cat2 = new Category("Categoría2")
    nuevaInstancia.addCategory(cat1);
    nuevaInstancia.addCategory(cat2);

    // Muestro categorías
    for (const cat of nuevaInstancia.categories) {
        console.log(cat);
    }

    // Errores addCategory
    try {
        nuevaInstancia.addCategory("notcategory");
    } catch (error) {
        console.error(error.message);
    }

    try {
        nuevaInstancia.addCategory(cat1);
    } catch (error) {
        console.error(error.message);
    }

    // removeCategory
    nuevaInstancia.removeCategory(cat1);

    // Muestro categorías
    for (const cat of nuevaInstancia.categories) {
        console.log(cat);
    }

    // Error removeCategory
    try {
        nuevaInstancia.removeCategory(cat1);
    } catch (error) {
        console.error(error.message);
    }

}

window.onload = testApp;