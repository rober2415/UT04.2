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
}


// Exportamos la clase
export { VideoSystem };