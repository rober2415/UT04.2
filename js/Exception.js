"use strict";

// Excepciones personalizadas
export class Exception extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

// Excepción vacío
export class EmptyValueException extends Exception {
    constructor() {
        super(`Error: El valor no puede estar vacio.`);
    }
}

// Excepción tipo
export class InvalidTypeException extends Exception {
    constructor(expectedType) {
        super(`Error: Solo se admiten objetos del tipo ${expectedType}`);
    }
}

// Excepción ya existe
export class RegisteredException extends Exception {
    constructor(expectedType) {
        super(`Error: la categoría ya existe`);
    }
}

// Excepción no registrado
export class NotRegisteredException extends Exception {
    constructor(expectedType) {
        super(`Error: la categoría no existe`);
    }
}