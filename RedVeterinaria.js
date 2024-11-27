"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
class RedVeterinaria {
    constructor() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    // Método para agregar una nueva veterinaria
    agregarVeterinaria(veterinaria) {
        this.veterinarias.push(veterinaria);
    }
    // Método para agregar un proveedor
    agregarProveedor(proveedor) {
        this.proveedores.push(proveedor);
    }
    // Método para obtener la lista de veterinarias
    getVeterinarias() {
        return this.veterinarias;
    }
    // Método para obtener la lista de proveedores
    getProveedores() {
        return this.proveedores;
    }
    // Método para actualizar la lista de proveedores
    actualizarProveedores(proveedores) {
        this.proveedores = proveedores;
    }
    // Método para actualizar la lista de veterinarias
    actualizarVeterinarias(veterinarias) {
        this.veterinarias = veterinarias;
    }
    // Método para eliminar un proveedor
    eliminarProveedor(nombre) {
        const index = this.proveedores.findIndex(prov => prov.getNombreProveedor() === nombre);
        if (index >= 0) {
            this.proveedores.splice(index, 1);
            return true;
        }
        return false;
    }
    // Método para obtener una veterinaria por ID
    getVeterinariaPorId(id) {
        return this.veterinarias.find(veterinaria => veterinaria.getIdVeterinaria() === id);
    }
}
exports.RedVeterinaria = RedVeterinaria;
