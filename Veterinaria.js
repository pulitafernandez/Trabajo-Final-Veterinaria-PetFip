"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
const Cliente_1 = require("./Cliente");
class Veterinaria {
    constructor(idVeterinaria, nombre, direccion) {
        this.idVeterinaria = idVeterinaria;
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }
    getIdVeterinaria() {
        return this.idVeterinaria;
    }
    static generarIdUnico(veterinarias) {
        let nuevoId = 0;
        let idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !veterinarias.some(vet => vet.getIdVeterinaria() === nuevoId);
        }
        return nuevoId;
    }
    getNombreVeterinaria() {
        return this.nombre;
    }
    getDireccionVeterinaria() {
        return this.direccion;
    }
    getDatosVeterinaria() {
        return `
        Veterinaria:
            ID: ${this.idVeterinaria}
            Nombre: ${this.nombre}
            Dirección: ${this.direccion}`;
    }
    setNombreVeterinaria(nombre) {
        this.nombre = nombre;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    // Método para agregar un cliente a la veterinaria
    agregarCliente(cliente) {
        const existeCliente = this.clientes.some(c => c.getNombre() === cliente.getNombre() &&
            c.getTelefono() === cliente.getTelefono());
        if (existeCliente) {
            return "El cliente ya existe en la veterinaria.";
        }
        const idUnico = Cliente_1.Cliente.generarIdUnico(this.clientes);
        cliente.setIdCliente(idUnico);
        this.clientes.push(cliente);
        return "Cliente agregado con éxito.";
    }
    // Método para eliminar un cliente de la veterinaria
    eliminarCliente(cliente) {
        this.clientes = this.clientes.filter(c => c !== cliente);
    }
    // Método para obtener un cliente por nombre
    getClientePorNombre(nombre) {
        return this.clientes.find(cliente => cliente.getNombre() === nombre);
    }
    // Método para obtener un cliente por ID
    obtenerClientePorId(id) {
        return this.clientes.find(cliente => cliente.getIdCliente() === id) || null;
    }
    // Método para obtener todos los clientes
    getClientes() {
        return this.clientes;
    }
    // Métodos para manejar pacientes
    // Método para agregar un paciente a la veterinaria
    agregarPaciente(paciente) {
        this.pacientes.push(paciente);
    }
    // Método para verificar si un paciente ya existe
    existePaciente(nombre, especie, idCliente) {
        return this.pacientes.some(paciente => paciente.getNombre() === nombre &&
            paciente.getEspecie() === especie &&
            paciente.getIdCliente() === idCliente);
    }
    // Método para obtener todos los pacientes
    getPacientes() {
        return this.pacientes;
    }
    // Método para obtener un paciente por nombre
    getPacientePorNombre(nombre) {
        return this.pacientes.find(paciente => paciente.getNombre() === nombre);
    }
    // Método para obtener un paciente por id
    getPacientePorId(idPaciente) {
        return this.pacientes.find(paciente => paciente.getIdPaciente() === idPaciente);
    }
    // Método para eliminar un paciente de la veterinaria
    eliminarPaciente(paciente) {
        this.pacientes = this.pacientes.filter(p => p !== paciente);
    }
    // Método para mostrar los datos de la veterinaria: sus clientes y pacientes
    mostrarClientes() {
        console.log(`Veterinaria: ${this.nombre}, Dirección: ${this.direccion}`);
        if (this.clientes.length === 0) {
            console.log("No hay clientes registrados.");
        }
        else {
            this.clientes.forEach(cliente => cliente.mostrarCliente());
        }
    }
    mostrarPacientes() {
        console.log(`Veterinaria: ${this.nombre}, Dirección: ${this.direccion}`);
        if (this.pacientes.length === 0) {
            console.log("No hay pacientes registrados.");
        }
        else {
            this.pacientes.forEach(paciente => paciente.mostrarPaciente());
        }
    }
}
exports.Veterinaria = Veterinaria;
