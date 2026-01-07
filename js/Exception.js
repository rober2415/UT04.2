"use strict";

// Excepciones personalizadas
export class Exception extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

// Excepción vacío
export class EmptyException extends Exception {
    constructor() {
        super("Error: El nombre no puede estar vacio.");
    }
}

// Excepción tipo
class InvalidTypeException extends Exception {
    constructor(expectedType) {
        super(`Error: Solo se admiten objetos del tipo ${expectedType}`);
    }
}