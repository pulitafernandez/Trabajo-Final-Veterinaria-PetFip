"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
class Proveedor {
    constructor(idProveedor, nombreProveedor, telefonoProveedor, direccionProveedor) {
        this.idProveedor = idProveedor;
        this.nombreProveedor = nombreProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.direccionProveedor = direccionProveedor;
    }
    // Método para generar un ID único
    static generarIdUnico(proveedores) {
        let nuevoId = 0;
        let idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !proveedores.some(prov => prov.getIdProveedor() === nuevoId);
        }
        return nuevoId;
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
