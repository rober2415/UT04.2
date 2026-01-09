"use strict";

import { VideoSystem } from "./VideoSystem.js";
import { Category } from "./Category.js";
import { User } from "./User.js";
import { Production } from "./Production.js";
import { Person } from "./Person.js";

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

    // addActor
    const actor1 = new Person("Nombre1", "Primer Apellido1", "Segundo Apellido1", new Date(2001, 10, 10), "Sin imagen");
    const actor2 = new Person("Nombre2", "Primer Apellido2", "Segundo Apellido2", new Date(2002, 10, 10), "Sin imagen");
    nuevaInstancia.addActor(actor1);
    nuevaInstancia.addActor(actor2);

    // Muestro los actores
    for (const actor of nuevaInstancia.actors) {
        console.log(actor);
    }

    // Errores addActor
    try {
        nuevaInstancia.addActor("nottype");
    } catch (error) {
        console.error("Error addActor tipo: ", error.message);
    }

    try {
        nuevaInstancia.addActor(actor1);
    } catch (error) {
        console.error("Error addActor ya existe: ", error.message);
    }

    // removeActor
    nuevaInstancia.removeActor(actor1);

    // Muestro los actores
    for (const actor of nuevaInstancia.actors) {
        console.log(actor);
    }

    // Errores removeActor
    try {
        nuevaInstancia.removeActor("notactor");
    } catch (error) {
        console.error("Error removeActor tipo: ", error.message);
    }
    try {
        nuevaInstancia.removeActor(actor1);
    } catch (error) {
        console.error("Error removeActor no existe: ", error.message);
    }

    // addDirector
    const director1 = new Person("Nombre1", "Primer Apellido1", "Segundo Apellido1", new Date(2001, 10, 10), "Sin imagen");
    const director2 = new Person("Nombre2", "Primer Apellido2", "Segundo Apellido2", new Date(2002, 10, 10), "Sin imagen");
    nuevaInstancia.addDirector(director1);
    nuevaInstancia.addDirector(director2);

    // Muestro los directores
    for (const director of nuevaInstancia.directors) {
        console.log(director);
    }

    // Errores addDirector
    try {
        nuevaInstancia.addDirector("nottype");
    } catch (error) {
        console.error("Error addDirector tipo: ", error.message);
    }

    try {
        nuevaInstancia.addDirector(director1);
    } catch (error) {
        console.error("Error addDirector ya existe: ", error.message);
    }

    // removeDirector
    nuevaInstancia.removeDirector(director1);

    // Muestro los directores
    for (const director of nuevaInstancia.directors) {
        console.log(director);
    }

    // Errores removeDirector
    try {
        nuevaInstancia.removeDirector("notdirector");
    } catch (error) {
        console.error("Error removeDirector tipo: ", error.message);
    }
    try {
        nuevaInstancia.removeDirector(director1);
    } catch (error) {
        console.error("Error removeDirector no existe: ", error.message);
    }

    // assignCategory
    nuevaInstancia.assignCategory(cat1, production1);
    nuevaInstancia.assignCategory(cat2, production1);
    nuevaInstancia.assignCategory(cat2, production2);

    // Errores assignCategory
    try {
        nuevaInstancia.assignCategory(null, production1);
    } catch (error) {
        console.error("Error assignCategory: ", error.message);
    }

    try {
        nuevaInstancia.assignCategory(cat1, null);
    } catch (error) {
        console.error("Error assignCategory: ", error.message);
    }

    // deassignCategory
    nuevaInstancia.deassignCategory(cat1, production1);

    // Errores deassignCategory
    try {
        nuevaInstancia.deassignCategory(null, production1);
    } catch (error) {
        console.error("Error deassignCategory: ", error.message);
    }

    try {
        nuevaInstancia.deassignCategory(cat1, null);
    } catch (error) {
        console.error("Error deassignCategory: ", error.message);
    }

    // assignDirector
    nuevaInstancia.assignDirector(director1, production1);
    nuevaInstancia.assignDirector(director1, production2);
    nuevaInstancia.assignDirector(director2, production2);

    // Errores assignDirector
    try {
        nuevaInstancia.assignDirector(null, production1);
    } catch (error) {
        console.error("Error assignDirector: ", error.message);
    }

    try {
        nuevaInstancia.assignDirector(director1, null);
    } catch (error) {
        console.error("Error assignDirector: ", error.message);
    }

    // deassignDirector
    nuevaInstancia.deassignDirector(director1, production1);

    // Errores deassignDirector
    try {
        nuevaInstancia.deassignDirector(null, production1);
    } catch (error) {
        console.error("Error deassignDirector: ", error.message);
    }

    try {
        nuevaInstancia.deassignDirector(director1, null);
    } catch (error) {
        console.error("Error deassignDirector: ", error.message);
    }

    // assignActor
    nuevaInstancia.assignActor(actor1, production1);
    nuevaInstancia.assignActor(actor1, production2);
    nuevaInstancia.assignActor(actor2, production2);

    // Errores assignActor
    try {
        nuevaInstancia.assignActor(null, production1);
    } catch (error) {
        console.error("Error assignActor :", error.message);
    }

    try {
        nuevaInstancia.assignActor(actor1, null);
    } catch (error) {
        console.error("Error assignActor :", error.message);
    }

    // deassignActor
    nuevaInstancia.deassignActor(actor1, production1);

    // Errores deassignActor
    try {
        nuevaInstancia.deassignActor(null, production1);
    } catch (error) {
        console.error("Error deassignActor: ", error.message);
    }

    try {
        nuevaInstancia.deassignActor(actor1, null);
    } catch (error) {
        console.error("Error deassignActor: ", error.message);
    }

    // getCast
    console.log("Actores de production2:");
    for (const actor of nuevaInstancia.getCast(production2)) {
        console.log(actor.name);
    }

    // Error getCast
    try {
        nuevaInstancia.getCast(null);
    } catch (error) {
        console.error("Error getCast: ", error.message);
    }

}

window.onload = testApp;