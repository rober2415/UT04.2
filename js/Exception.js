"use strict";

// Excepciones personalizadas
export class Exception extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

// Excepción null
export class EmptyValueException extends Exception {
    constructor(expectedType) {
        super(`Error: El valor ${expectedType} no puede ser null.`);
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
        super(`Error: el/la ${expectedType} ya existe.`);
    }
}

// Excepción no registrado
export class NotRegisteredException extends Exception {
    constructor(expectedType) {
        super(`Error: el/la ${expectedType} no existe.`);
    }
}