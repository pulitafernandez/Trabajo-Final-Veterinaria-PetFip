"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion) {
        this.idVeterinaria = Veterinaria.generarIdUnico();
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
    }
    Veterinaria.prototype.getIdVeterinaria = function () {
        return this.idVeterinaria;
    };
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
    // Método para agregar un cliente a la veterinaria
    Veterinaria.prototype.agregarCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    // Método para eliminar un cliente de la veterinaria
    Veterinaria.prototype.eliminarCliente = function (cliente) {
        this.clientes = this.clientes.filter(function (c) { return c !== cliente; });
    };
    // Método para mostrar los datos de la veterinaria y sus clientes
    Veterinaria.prototype.mostrarClientes = function () {
        console.log("Veterinaria: ".concat(this.nombre, ", Direcci\u00F3n: ").concat(this.direccion));
        if (this.clientes.length === 0) {
            console.log("No hay clientes registrados.");
        }
        else {
            this.clientes.forEach(function (cliente) { return cliente.mostrarCliente(); });
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
