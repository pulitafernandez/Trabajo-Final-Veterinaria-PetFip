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
    // Función para generar un ID único
    Cliente.generarIdUnico = function (clientes) {
        var nuevoId = 0;
        var idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !clientes.some(function (cliente) { return cliente.getIdCliente() === nuevoId; });
        }
        return nuevoId;
    };
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
    // Mostrar información del cliente
    Cliente.prototype.getDatosCliente = function () {
        return "\n        Cliente:\n            ID: ".concat(this.idCliente, "\n            Nombre: ").concat(this.nombre, "\n            Tel\u00E9fono: ").concat(this.telefono, "\n            Es VIP: ").concat(this.esVip ? 'Sí' : 'No', "\n            Visitas: ").concat(this.visitas);
    };
    // Método para registrar visitas de un cliente
    Cliente.prototype.registrarVisita = function () {
        this.visitas++;
        if (this.visitas >= 5) {
            this.esVip = true;
        }
    };
    // Mostrar cliente junto con sus mascotas
    Cliente.prototype.mostrarCliente = function () {
        console.log("Cliente: ".concat(this.nombre));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        if (this.mascotas.length > 0) {
            console.log("Mascotas: ".concat(this.mascotas.map(function (mascota) { return mascota.getNombre(); }).join(", ")));
        }
        else {
            console.log("No tiene mascotas registradas.");
        }
        console.log("VIP: ".concat(this.esVip ? "Sí" : "No"));
        console.log("Visitas: ".concat(this.visitas));
    };
    // Añadir una mascota al cliente
    Cliente.prototype.agregarMascota = function (mascota) {
        this.mascotas.push(mascota);
    };
    // Eliminar una mascota del cliente
    Cliente.prototype.eliminarMascota = function (idMascota) {
        this.mascotas = this.mascotas.filter(function (mascota) { return mascota.getIdPaciente() !== idMascota; });
    };
    // Comprobar si el cliente es VIP
    Cliente.prototype.esVipCliente = function () {
        return this.esVip ? "VIP" : "No es VIP";
    };
    return Cliente;
}());
exports.Cliente = Cliente;
