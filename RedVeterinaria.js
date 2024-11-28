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
    // Método para verificar si existe una veterinaria con el mismo nombre y dirección
    existeVeterinaria(nombre, direccion) {
        return this.veterinarias.some(vet => vet.getNombreVeterinaria() === nombre &&
            vet.getDireccionVeterinaria() === direccion);
    }
    // Método para agregar un proveedor
    agregarProveedor(proveedor) {
        this.proveedores.push(proveedor);
    }
    // Método para verificar si existe un proveedor con el mismo nombre, teléfono y dirección
    existeProveedor(nombre, telefono, direccion) {
        return this.proveedores.some(prov => prov.getNombreProveedor() === nombre &&
            prov.getTelefonoProveedor() === telefono &&
            prov.getDireccionProveedor() === direccion);
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
    eliminarProveedor(idProveedor) {
        const index = this.proveedores.findIndex(prov => prov.getIdProveedor() === idProveedor);
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
