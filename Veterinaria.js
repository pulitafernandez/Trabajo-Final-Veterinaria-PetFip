"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion) {
        this.idVeterinaria = Veterinaria.generarIdUnico();
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Veterinaria.generarIdUnico = function () {
        return Math.floor(Math.random() * 1000000);
    };
    Veterinaria.prototype.getNombreVeterinaria = function () {
        return this.nombre;
    };
    Veterinaria.prototype.getDireccionVeterinaria = function () {
        return this.direccion;
    };
    Veterinaria.prototype.getDatosVeterinaria = function () {
        return "\n        Veterinaria:\n            ID: ".concat(this.idVeterinaria, "\n            Nombre: ").concat(this.nombre, "\n            Direcci\u00F3n: ").concat(this.direccion);
    };
    Veterinaria.prototype.setNombreVeterinaria = function (nombre) {
        this.nombre = nombre;
    };
    Veterinaria.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
