"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
var RedVeterinaria = /** @class */ (function () {
    function RedVeterinaria() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    // Método para agregar una nueva veterinaria
    RedVeterinaria.prototype.agregarVeterinaria = function (veterinaria) {
        this.veterinarias.push(veterinaria);
    };
    // Método para verificar si existe una veterinaria con el mismo nombre y dirección
    RedVeterinaria.prototype.existeVeterinaria = function (nombre, direccion) {
        return this.veterinarias.some(function (vet) {
            return vet.getNombreVeterinaria() === nombre &&
                vet.getDireccionVeterinaria() === direccion;
        });
    };
    // Método para agregar un proveedor
    RedVeterinaria.prototype.agregarProveedor = function (proveedor) {
        this.proveedores.push(proveedor);
    };
    // Método para verificar si existe un proveedor con el mismo nombre, teléfono y dirección
    RedVeterinaria.prototype.existeProveedor = function (nombre, telefono, direccion) {
        return this.proveedores.some(function (prov) {
            return prov.getNombreProveedor() === nombre &&
                prov.getTelefonoProveedor() === telefono &&
                prov.getDireccionProveedor() === direccion;
        });
    };
    // Método para obtener la lista de veterinarias
    RedVeterinaria.prototype.getVeterinarias = function () {
        return this.veterinarias;
    };
    // Método para obtener la lista de proveedores
    RedVeterinaria.prototype.getProveedores = function () {
        return this.proveedores;
    };
    // Método para actualizar la lista de proveedores
    RedVeterinaria.prototype.actualizarProveedores = function (proveedores) {
        this.proveedores = proveedores;
    };
    // Método para actualizar la lista de veterinarias
    RedVeterinaria.prototype.actualizarVeterinarias = function (veterinarias) {
        this.veterinarias = veterinarias;
    };
    // Método para eliminar un proveedor
    RedVeterinaria.prototype.eliminarProveedor = function (idProveedor) {
        var index = this.proveedores.findIndex(function (prov) { return prov.getIdProveedor() === idProveedor; });
        if (index >= 0) {
            this.proveedores.splice(index, 1);
            return true;
        }
        return false;
    };
    // Método para obtener una veterinaria por ID
    RedVeterinaria.prototype.getVeterinariaPorId = function (id) {
        return this.veterinarias.find(function (veterinaria) { return veterinaria.getIdVeterinaria() === id; });
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
