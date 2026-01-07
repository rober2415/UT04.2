"use strict";

import { EmptyException } from "./Exception.js";

export class VideoSystem {
    static #instance = null;
    #name;
    #categories = [];
    #users = [];
    #productions = [];
    #actors = [];
    #directors = [];

    constructor(name) {
        if (VideoSystem.#instance) {
            throw new Error("VideoSystem es un Singleton. Usa getInstance().");
        }
        if (!name) {
            throw new EmptyException();
        }
        this.name = name;
    }

    // Método para la instancia y proteger el constructor
    static getInstance(name) {
        if (!VideoSystem.#instance) {
            // Solo la primera vez se usa el nombre 
            VideoSystem.#instance = new VideoSystem(name);
        }
        return VideoSystem.#instance;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        if (!name) {
            throw new EmptyException();
        }
        this.#name = name;
    }

    get categories() {
        return this.#categories.values();
    }

    // Añade una nueva categoría
    addCategory(category) {
        if (!category) {
            throw new EmptyException();
        }

        this.#categories.push(category);

        return this.#categories.length;
    }

}