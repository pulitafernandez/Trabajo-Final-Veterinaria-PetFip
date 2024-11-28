"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(idCliente, nombre, telefono) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = false;
        this.visitas = 0;
        this.mascotas = [];
    }
    // Función para generar un ID único
    static generarIdUnico(clientes) {
        let nuevoId = 0;
        let idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !clientes.some(cliente => cliente.getIdCliente() === nuevoId);
        }
        return nuevoId;
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
    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
    getEsVip() {
        return this.esVip;
    }
    setEsVip(esVip) {
        this.esVip = esVip;
    }
    getMascotas() {
        return this.mascotas;
    }
    setMascotas(mascotas) {
        this.mascotas = mascotas;
    }
    // Mostrar información del cliente
    getDatosCliente() {
        return `
        Cliente:
            ID: ${this.idCliente}
            Nombre: ${this.nombre}
            Teléfono: ${this.telefono}
            Mascotas: ${this.mascotas.length > 0 ? this.mascotas.map(mascota => mascota.getDatosPaciente()).join("\n") : "No tiene ninguna mascota asociada"}`;
    }
    // Método para registrar visitas de un cliente
    registrarVisita() {
        this.visitas++;
        if (this.visitas >= 5) {
            this.esVip = true;
        }
    }
    // Mostrar cliente junto con sus mascotas
    mostrarCliente() {
        console.log(`Cliente: ${this.nombre}`);
        console.log(`Teléfono: ${this.telefono}`);
        if (this.mascotas.length > 0) {
            console.log(`Mascotas: ${this.mascotas.map(mascota => mascota.getNombre()).join(", ")}`);
        }
        else {
            console.log("No tiene mascotas registradas.");
        }
        console.log(`VIP: ${this.esVip ? "Sí" : "No"}`);
        console.log(`Visitas: ${this.visitas}`);
    }
    // Método para agregar una mascota al cliente
    agregarMascota(mascota) {
        this.mascotas.push(mascota);
    }
    // Eliminar una mascota del cliente
    eliminarMascota(idMascota) {
        this.mascotas = this.mascotas.filter(mascota => mascota.getIdPaciente() !== idMascota);
    }
    // Comprobar si el cliente es VIP
    esVipCliente() {
        return this.esVip ? "VIP" : "No es VIP";
    }
}
exports.Cliente = Cliente;
