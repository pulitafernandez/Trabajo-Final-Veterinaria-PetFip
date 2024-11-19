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
    // Método para agregar un proveedor
    RedVeterinaria.prototype.agregarProveedor = function (proveedor) {
        this.proveedores.push(proveedor);
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
    RedVeterinaria.prototype.eliminarProveedor = function (nombre) {
        var index = this.proveedores.findIndex(function (prov) { return prov.getNombreProveedor() === nombre; });
        if (index >= 0) {
            this.proveedores.splice(index, 1);
            return true;
        }
        return false;
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
