"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(idMascota, idCliente, nombre, especie) {
        this.idMascota = idMascota;
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.especie = especie;
    }
    // Función para generar un ID único
    Paciente.generarIdUnico = function (pacientes) {
        var nuevoId = 0;
        var idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !pacientes.some(function (paciente) { return paciente.getIdPaciente() === nuevoId; });
        }
        return nuevoId;
    };
    Paciente.prototype.getIdPaciente = function () {
        return this.idMascota;
    };
    Paciente.prototype.setIdPaciente = function (idMascota) {
        this.idMascota = idMascota;
    };
    Paciente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    Paciente.prototype.setIdCliente = function (idCliente) {
        this.idCliente = idCliente;
    };
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    // Mostrar información de la mascota junto con su dueño
    Paciente.prototype.getDatosPaciente = function () {
        return "\n        Mascota:\n            ID: ".concat(this.idMascota, "\n            Nombre: ").concat(this.nombre, "\n            Especie: ").concat(this.especie, "\n            ID del due\u00F1o: ").concat(this.idCliente);
    };
    // Método para mostrar los detalles del paciente
    Paciente.prototype.mostrarPaciente = function () {
        console.log("Mascota: ".concat(this.nombre));
        console.log("Especie: ".concat(this.especie));
        console.log("ID del due\u00F1o: ".concat(this.idCliente));
    };
    return Paciente;
}());
exports.Paciente = Paciente;
