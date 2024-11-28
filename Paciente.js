"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
class Paciente {
    constructor(idMascota, idCliente, nombre, especie) {
        this.idMascota = idMascota;
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.especie = especie;
    }
    // Función para generar un ID único
    static generarIdUnico(pacientes) {
        let nuevoId = 0;
        let idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !pacientes.some(paciente => paciente.getIdPaciente() === nuevoId);
        }
        return nuevoId;
    }
    getIdPaciente() {
        return this.idMascota;
    }
    setIdPaciente(idMascota) {
        this.idMascota = idMascota;
    }
    getIdCliente() {
        return this.idCliente;
    }
    setIdCliente(idCliente) {
        this.idCliente = idCliente;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(especie) {
        this.especie = especie;
    }
    // Mostrar información de la mascota junto con su dueño
    getDatosPaciente() {
        return `
        Mascota:
            ID: ${this.idMascota}
            Nombre: ${this.nombre}
            Especie: ${this.especie}
            ID del dueño: ${this.idCliente}`;
    }
    // Método para mostrar los detalles del paciente
    mostrarPaciente() {
        console.log(`Mascota: ${this.nombre}`);
        console.log(`Especie: ${this.especie}`);
        console.log(`ID del dueño: ${this.idCliente}`);
    }
}
exports.Paciente = Paciente;
