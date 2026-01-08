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

  /**
   * Constructor privado
   */
  constructor(name = "VideoSystem") {
    if (VideoSystem.#instance) {
      return VideoSystem.#instance;
    }
    this.#name = name;
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
      if (!(cat instanceof Category)) {
        throw new InvalidTypeException("Category");
      }
      if (this.#categories.has(cat)) {
        throw new RegisteredException();
      }
      this.#categories.set(cat, new Set());
    }
    return this.#categories.size;
  }

}

// Exportamos la clase
export { VideoSystem };