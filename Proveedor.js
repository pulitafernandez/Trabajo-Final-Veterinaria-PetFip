"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var Proveedor = /** @class */ (function () {
    function Proveedor(idProveedor, nombreProveedor, telefonoProveedor, direccionProveedor) {
        this.idProveedor = idProveedor;
        this.nombreProveedor = nombreProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.direccionProveedor = direccionProveedor;
    }
    // Método para generar un ID único
    Proveedor.generarIdUnico = function (proveedores) {
        var nuevoId = 0;
        var idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !proveedores.some(function (prov) { return prov.getIdProveedor() === nuevoId; });
        }
        return nuevoId;
    };
    Proveedor.prototype.getIdProveedor = function () {
        return this.idProveedor;
    };
    Proveedor.prototype.getNombreProveedor = function () {
        return this.nombreProveedor;
    };
    Proveedor.prototype.setNombreProveedor = function (nombre) {
        this.nombreProveedor = nombre;
    };
    Proveedor.prototype.getTelefonoProveedor = function () {
        return this.telefonoProveedor;
    };
    Proveedor.prototype.setTelefonoProveedor = function (telefono) {
        this.telefonoProveedor = telefono;
    };
    Proveedor.prototype.getDireccionProveedor = function () {
        return this.direccionProveedor;
    };
    Proveedor.prototype.setDireccion = function (direccion) {
        this.direccionProveedor = direccion;
    };
    Proveedor.prototype.getDatosProveedor = function () {
        return "\nProveedor:\n  ID: ".concat(this.idProveedor, "\n  Nombre: ").concat(this.nombreProveedor, "\n  Tel\u00E9fono: ").concat(this.telefonoProveedor, "\n  Direcci\u00F3n: ").concat(this.direccionProveedor);
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;
