"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(idCliente, nombre, telefono) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = false;
        this.visitas = 0;
        this.mascotas = [];
    }
    Cliente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    Cliente.prototype.setIdCliente = function (idCliente) {
        this.idCliente = idCliente;
    };
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Cliente.prototype.getEsVip = function () {
        return this.esVip;
    };
    Cliente.prototype.setEsVip = function (esVip) {
        this.esVip = esVip;
    };
    Cliente.prototype.getMascotas = function () {
        return this.mascotas;
    };
    Cliente.prototype.setMascotas = function (mascotas) {
        this.mascotas = mascotas;
    };
    Cliente.prototype.getDatosCliente = function () {
        return "\n        Cliente:\n            ID: ".concat(this.idCliente, "\n            Nombre: ").concat(this.nombre, "\n            Telefono: ").concat(this.telefono, "\n            Es VIP: ").concat(this.esVip); //ver como hacer para mostrar si es vip o no por que es booleano
    };
    Cliente.prototype.registrarVisita = function () {
        this.visitas++;
        this.esVip = this.visitas >= 5;
    };
    Cliente.prototype.mostrarCliente = function () {
        console.log("Cliente: ".concat(this.nombre));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Mascotas: ".concat(this.mascotas.join(", ")));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
