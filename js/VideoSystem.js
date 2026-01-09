"use strict";

import {
  EmptyValueException,
  InvalidTypeException,
  RegisteredException,
  NotRegisteredException
} from "./Exception.js";

import { Category } from "./Category.js";
import { User } from "./User.js";
import { Production } from "./Production.js";
import { Person } from "./Person.js";

class VideoSystem {
  // Propiedad para almacenar la instancia
  static #instance;

  // Propiedad privada
  #name;

  // Colecciones
  #categories = new Map();
  #actors = new Map();
  #directors = new Map();

  // Conjuntos
  #users = new Set();
  #productions = new Set();

  // Categoría por defecto
  #defaultCategory = new Category("Por defecto", "Categoría por defecto");

  /**
   * Constructor privado
   */
  constructor(name = "VideoSystem") {
    if (VideoSystem.#instance) {
      return VideoSystem.#instance;
    }
    this.#name = name;

    // Colección por defecto
    this.#categories.set(this.#defaultCategory, new Set());

    VideoSystem.#instance = this;
  }

  /**
   * Método para la instancia Singleton y proteger el constructor
   */
  static getInstance(name) {
    if (!VideoSystem.#instance) {
      // Solo la primera vez se usa el nombre 
      VideoSystem.#instance = new VideoSystem(name);
    }
    return VideoSystem.#instance;
  }

  /**
   * Devuelve el nombre del sistema
   */
  get name() {
    return this.#name;
  }
  set name(name) {
    if (!name) {
      throw new EmptyValueException();
    }
    this.#name = name;
  }

  /**
   * Devuelve un iterador que permite recorrer las categorías del sistema
   */
  get categories() {
    return this.#categories.keys();
  }

  /**
   * Añade una nueva categoría
   */
  addCategory(...categories) {
    for (const cat of categories) {
      // Tipo inválido
      if (!(cat instanceof Category)) {
        throw new InvalidTypeException("Category");
      }
      // Ya registrado
      if (this.#categories.has(cat)) {
        throw new RegisteredException("categoria");
      }
      // Añadir categoría
      this.#categories.set(cat, new Set());
    }
    //Number con el nº de elementos
    return this.#categories.size;
  }

  /**
  * Elimina una categoría.
  * Al eliminar la categoría, sus productos pasan a la de por defecto.
  */
  removeCategory(...categories) {
    for (const cat of categories) {
      // No registrado
      if (!this.#categories.has(cat)) {
        throw new NotRegisteredException("categoria");
      }
      // Mover producciones a la categoría por defecto antes de eliminar
      const productions = this.#categories.get(cat);
      const defaultSet = this.#categories.get(this.#defaultCategory);
      for (const prod of productions) {
        defaultSet.add(prod);
      }
      // Eliminar categoría
      this.#categories.delete(cat)
    }
    // Number con el nº de elementos
    return this.#categories.size;
  }

  /**
   * Devuelve un iterador que permite recorrer los usuarios del sistema 
   */
  get users() {
    return this.#users;
  }

  /**
   * Añade un nuevo usuario
   */
  addUser(...users) {
    for (const user of users) {
      // Tipo inválido
      if (!(user instanceof User)) {
        throw new InvalidTypeException("User");
      }
      // Ya registrado
      for (const u of this.#users.values()) {
        if (u.username === user.username || u.email === user.email) {
          throw new RegisteredException("usuario");
        }
      }
      // Añadir usuario
      this.#users.add(user);
    }
    // Number con el nº de elementos
    return this.#users.size;
  }

  /**
   * Elimina un usuario del sistema
   */
  removeUser(...users) {
    for (const user of users) {
      // Tipo inválido
      if (!(user instanceof User)) {
        throw new InvalidTypeException("User");
      }
      // No registrado
      if (!this.#users.has(user)) {
        throw new NotRegisteredException("usuario");
      }
      // Eliminar categoría
      this.#users.delete(user);
    }
    // Number con el nº de elementos
    return this.#users.size;
  }

  /**
   * Devuelve un iterador que permite recorrer las producciones del sistema
   */
  get productions() {
    return this.#productions;
  }

  /**
   * Añade una nueva producción
   */
  addProduction(...productions) {
    for (const production of productions) {
      // Tipo inválido
      if (!(production instanceof Production)) {
        throw new InvalidTypeException("Production");
      }
      // Ya registrado     
      if (this.#productions.has(production)) {
        throw new RegisteredException("producción");
      }
      // Añadir producción
      this.#productions.add(production);
    }
    // Number con el nº de elementos
    return this.#productions.size;
  }

  /**
   * Elimina una producción del sistema
   */
  removeProduction(...productions) {
    for (const production of productions) {
      // Tipo inválido
      if (!(production instanceof Production)) {
        throw new InvalidTypeException("Production");
      }
      // No registrado
      if (!this.#productions.has(production)) {
        throw new NotRegisteredException("producción");
      }
      // Eliminar producción
      this.#productions.delete(production);
    }
    // Number con el nº de elementos
    return this.#productions.size;
  }

  /**
   * Devuelve un iterador que permite 
   * recorrer los actores registrados en el sistema
   */
  get actors() {
    return this.#actors;
  }

  /**
   * Añade un nuevo actor
   */
  addActor(...actors) {
    for (const actor of actors) {
      // Tipo inválido
      if (!(actor instanceof Person)) {
        throw new InvalidTypeException("Person");
      }
      // Ya registrado
      if (this.#actors.has(actor)) {
        throw new RegisteredException("actor");
      }
      // Añadir categoría
      this.#actors.set(actor, new Set());
    }
    //Number con el nº de elementos
    return this.#actors.size;
  }

  /**
   * Elimina un actor del sistema
   */
  removeActor(...actors) {
    for (const actor of actors) {
      // Tipo inválido
      if (!(actor instanceof Person)) {
        throw new InvalidTypeException("Person");
      }
      // No registrado
      if (!this.#actors.has(actor)) {
        throw new NotRegisteredException("actor");
      }
      // Eliminar actor
      this.#actors.delete(actor)
    }
    // Number con el nº de elementos
    return this.#actors.size;
  }

  /**
   * Devuelve un iterador que permite recorrer 
   * los directores registrados en el sistema
   */
  get directors() {
    return this.#directors;
  }

  /**
   * Añade un nuevo director
   */
  addDirector(...directors) {
    for (const director of directors) {
      // Tipo inválido
      if (!(director instanceof Person)) {
        throw new InvalidTypeException("Person");
      }
      // Ya registrado
      if (this.#directors.has(director)) {
        throw new RegisteredException("director");
      }
      // Añadir director
      this.#directors.set(director, new Set());
    }
    //Number con el nº de elementos
    return this.#directors.size;
  }
  /**
   * Elimina un director del sistema
   */
  removeDirector(...directors) {
    for (const director of directors) {
      // Tipo inválido
      if (!(director instanceof Person)) {
        throw new InvalidTypeException("Person");
      }
      // No registrado
      if (!this.#directors.has(director)) {
        throw new NotRegisteredException("director");
      }
      // Eliminar director
      this.#directors.delete(director)
    }
    // Number con el nº de elementos
    return this.#directors.size;
  }

  /**
   * Asigna uno más producciones a una categoría
   * Si el objeto Category o Production no existen se añaden al sistema
   */
  assignCategory(category, ...productions) {
    // Category null
    if (category === null) {
      throw new EmptyValueException("category");
    }
    // Si la categoría no existe, se añade al sistema 
    if (!this.#categories.has(category)) {
      this.addCategory(category);
    }
    for (const production of productions) {
      // Production null
      if (production === null) {
        throw new EmptyValueException("production");
      }
      // Si la producción no existe, se añade al sistema 
      if (!this.#productions.has(production)) {
        this.addProduction(production);
      }
      // Asignar la producción a la categoría 
      this.#categories.get(category).add(production);
    }
    // Number con el nº total de producciones asignadas a la categoría
    return this.#categories.get(category).size;
  }

  /**
   * Desasigna una o más producciones de una categoría
   */
  deassignCategory(category, ...productions) {
    // Category null
    if (category === null) {
      throw new EmptyValueException("category");
    }
    for (const production of productions) {
      // Production null
      if (production === null) {
        throw new EmptyValueException("production");
      }
      // Eliminar la producción de la categoría 
      this.#categories.get(category).delete(production);
    }
    // Number con el nº total de producciones asignadas a la categoría
    return this.#categories.get(category).size;
  }

  /**
   * Asigna uno más producciones a un director
   * Si el director o el objeto Production no existen se añaden al sistema
   */
  assignDirector(director, ...productions) {
    // Director null
    if (director === null) {
      throw new EmptyValueException("director");
    }
    // Si el director no existe, se añade al sistema 
    if (!this.#directors.has(director)) {
      this.addDirector(director);
    }
    for (const production of productions) {
      // Production null
      if (production === null) {
        throw new EmptyValueException("production");
      }
      // Si la producción no existe, se añade al sistema 
      if (!this.#productions.has(production)) {
        this.addProduction(production);
      }
      // Asignar la producción al director 
      this.#directors.get(director).add(production);
    }
    // Number con el nº total de producciones asignadas al director
    return this.#directors.get(director).size;
  }

  /**
   * Desasigna una o más producciones de un director
   */
  deassignDirector(director, ...productions) {
    // Director null
    if (director === null) {
      throw new EmptyValueException("director");
    }
    for (const production of productions) {
      // Production null
      if (production === null) {
        throw new EmptyValueException("production");
      }
      // Eliminar la producción del director 
      this.#directors.get(director).delete(production);
    }
    // Number con el nº total de producciones asignadas al director
    return this.#directors.get(director).size;
  }

  /**
    * Asigna uno más producciones a un actor
    * Si el actor o el objeto Production no existen se añaden al sistema
    */
  assignActor(actor, ...productions) {
    // Actor null
    if (actor === null) {
      throw new EmptyValueException("actor");
    }
    // Si el actor no existe, se añade al sistema 
    if (!this.#actors.has(actor)) {
      this.addActor(actor);
    }
    for (const production of productions) {
      // Production null
      if (production === null) {
        throw new EmptyValueException("production");
      }
      // Si la producción no existe, se añade al sistema 
      if (!this.#productions.has(production)) {
        this.addProduction(production);
      }
      // Asignar la producción al actor 
      this.#actors.get(actor).add(production);
    }
    // Number con el nº total de producciones asignadas al actor
    return this.#actors.get(actor).size;
  }

  /**
   * Desasigna una o más producciones de un actor
   */
  deassignActor(actor, ...productions) {
    // Actor null
    if (actor === null) {
      throw new EmptyValueException("actor");
    }
    for (const production of productions) {
      // Production null
      if (production === null) {
        throw new EmptyValueException("production");
      }
      // Eliminar la producción del actor 
      this.#actors.get(actor).delete(production);
    }
    // Number con el nº total de producciones asignadas al actor
    return this.#actors.get(actor).size;
  }

  /**
   * Obtiene un iterador con la relación de los actores del
   * reparto una producción y sus personajes
   */
  getCast(production) {
    // Production null
    if (production === null) {
      throw new EmptyValueException("production");
    }
    // Actores del reparto una producción y sus personajes
    const actors = this.#actors;
    return {
      *[Symbol.iterator]() {
        for (const actor of actors.keys()) {
          const productions = actors.get(actor);
          // Si el actor está en la producción, se devuelve
          if (productions.has(production)) {
            yield actor;
          }
        }
      }
    };
  }
}


// Exportamos la clase
export { VideoSystem };