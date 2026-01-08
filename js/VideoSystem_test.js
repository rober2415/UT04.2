"use strict";

import { VideoSystem } from "./VideoSystem.js";
import { Category } from "./Category.js";
import { User } from "./User.js";
import { Production } from "./Production.js";

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

    // addUser
    const user1 = new User("usuario1", "email1", "password1");
    const user2 = new User("usuario2", "email2", "password2");
    nuevaInstancia.addUser(user1);
    nuevaInstancia.addUser(user2);

    // Muestro usuarios
    for (const user of nuevaInstancia.users) {
        console.log("Usuarios después de añadir", user);
    }

    // Errores addUser
    try {
        nuevaInstancia.addUser("notuser");
    } catch (error) {
        console.error(error.message);
    }

    try {
        nuevaInstancia.addUser(user1);
    } catch (error) {
        console.error(error.message);
    }

    // removeUser
    nuevaInstancia.removeUser(user1);

    // Muestro usuarios
    for (const user of nuevaInstancia.users) {
        console.log("Usuarios después de borrar", user);
    }

    // Errores removeUser
    try {
        nuevaInstancia.removeUser("notuser");
    } catch (error) {
        console.error("Error removeUser tipo: ", error.message);
    }
    try {
        nuevaInstancia.removeUser(user1);
    } catch (error) {
        console.error(error.message);
    }

    // addProduction
    const production1 = new Production("Titulo1", "Nacionalidad1", new Date(2001, 10, 10), "Sinopsis1", "Sin imagen");
    const production2 = new Production("Titulo2", "Nacionalidad2", new Date(2002, 10, 10), "Sinopsis2", "Sin imagen");
    nuevaInstancia.addProduction(production1);
    nuevaInstancia.addProduction(production2);

    // Muestro producciones
    for (const production of nuevaInstancia.productions) {
        console.log(production);
    }

    // Errores addProduction
    try {
        nuevaInstancia.addProduction("notproduction");
    } catch (error) {
        console.error("Error addProduction tipo: ", error.message);
    }

    try {
        nuevaInstancia.addProduction(production1);
    } catch (error) {
        console.error("Error addProduction ya existe: ", error.message);
    }

    // removeProduction
    nuevaInstancia.removeProduction(production1);

    // Muestro produciones
    for (const production of nuevaInstancia.productions) {
        console.log("Produciones después de borrar", production);
    }

    // Errores removeProduction
    try {
        nuevaInstancia.removeProduction("notproduction");
    } catch (error) {
        console.error("Error removeProduction tipo: ", error.message);
    }
    try {
        nuevaInstancia.removeProduction(production1);
    } catch (error) {
        console.error("Error removeProduction no existe: ", error.message);
    }

}

window.onload = testApp;