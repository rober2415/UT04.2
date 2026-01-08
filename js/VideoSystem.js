"use strict";

import {
  EmptyValueException,
  InvalidTypeException,
  RegisteredException,
  NotRegisteredException
} from "./Exception.js";

import { Category } from "./Category.js";

class VideoSystem {
  // Propiedad para almacenar la instancia
  static #instance;

  // Propiedad privada
  #name;

  // Colecciones
  #categories = new Map();

  #productions = new Set();
  #users = new Set();
  #actors = new Map();
  #directors = new Map();

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
   * Getter y Setter name
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
   * Getter categories
   */
  get categories() {
    return this.#categories;
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
        throw new RegisteredException();
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
        throw new NotRegisteredException();
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
}


// Exportamos la clase
export { VideoSystem };