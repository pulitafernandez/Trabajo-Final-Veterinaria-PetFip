"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
class Proveedor {
    constructor(nombreProveedor, telefonoProveedor, direccionProveedor) {
        this.idProveedor = Proveedor.generarIdUnico();
        this.nombreProveedor = nombreProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.direccionProveedor = direccionProveedor;
    }
    // Método para generar un ID único
    static generarIdUnico() {
        return Math.floor(Math.random() * 1000000);
    }
    getIdProveedor() {
        return this.idProveedor;
    }
    getNombreProveedor() {
        return this.nombreProveedor;
    }
    setNombreProveedor(nombre) {
        this.nombreProveedor = nombre;
    }
    getTelefonoProveedor() {
        return this.telefonoProveedor;
    }
    setTelefonoProveedor(telefono) {
        this.telefonoProveedor = telefono;
    }
    getDireccionProveedor() {
        return this.direccionProveedor;
    }
    setDireccion(direccion) {
        this.direccionProveedor = direccion;
    }
    // mostrar los datos del proveedor
    getDatosProveedor() {
        return `
  Proveedor:
    ID: ${this.idProveedor}
    Nombre: ${this.nombreProveedor}
    Teléfono: ${this.telefonoProveedor}
    Dirección: ${this.direccionProveedor}`;
    }
}
exports.Proveedor = Proveedor;
