"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var readline = require("readline");
var Veterinaria_1 = require("./Veterinaria");
var RedVeterinaria_1 = require("./RedVeterinaria");
var Proveedor_1 = require("./Proveedor");
var Menu = /** @class */ (function () {
    function Menu() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.redVet1 = new RedVeterinaria_1.RedVeterinaria();
    }
    Menu.prototype.iniciar = function () {
        this.mostrarMenuPrincipal();
    };
    Menu.prototype.mostrarMenuPrincipal = function () {
        var _this = this;
        console.log("\n Bienvenido a la red de Veterinarias PetFip");
        console.log("1. Menú de Veterinarias");
        console.log("2. Menú de Proveedores");
        console.log("3. Salir");
        this.rl.question("\nIngrese su opción: ", function (opcion) {
            switch (opcion) {
                case "1":
                    _this.mostrarMenuVeterinarias();
                    break;
                case "2":
                    _this.mostrarMenuProveedores();
                    break;
                case "3":
                    console.log("Hasta la proxima!");
                    _this.rl.close();
                    break;
                default:
                    console.log("Opción inválida. Intente nuevamente.");
                    _this.mostrarMenuPrincipal();
            }
        });
    };
    // Menú de Veterinarias
    Menu.prototype.mostrarMenuVeterinarias = function () {
        var _this = this;
        console.log("\nMenú Veterinarias");
        console.log("1. Agregar Veterinaria");
        console.log("2. Eliminar Veterinaria");
        console.log("3. Modificar Veterinaria");
        console.log("4. Ver todas las veterinarias");
        console.log("5. Seleccionar una veterinaria");
        console.log("6. Volver al menú principal");
        this.rl.question("\nIngrese su opción: ", function (opcion) {
            switch (opcion) {
                case "1":
                    _this.agregarVeterinaria();
                    break;
                case "2":
                    _this.eliminarVeterinaria();
                    break;
                case "3":
                    _this.modificarVeterinaria();
                    break;
                case "4":
                    _this.imprimirListaVeterinarias();
                    break;
                case "5":
                    _this.verVeterinariaTal();
                    return;
                case "6":
                    _this.mostrarMenuPrincipal();
                    return;
                default:
                    console.log("Opción inválida. Intente nuevamente.");
                    _this.mostrarMenuVeterinarias();
            }
        });
    };
    // Función para agregar una veterinaria
    Menu.prototype.agregarVeterinaria = function () {
        var _this = this;
        this.rl.question('Ingrese el nombre de la veterinaria: ', function (nombreVet) {
            _this.rl.question('Ingrese la dirección de la veterinaria: ', function (direccionVet) {
                var veterinaria1 = new Veterinaria_1.Veterinaria(nombreVet, direccionVet);
                _this.redVet1.agregarVeterinaria(veterinaria1);
                console.log("Veterinaria agregada:\n" + veterinaria1.getDatosVeterinaria());
                // Solo después de procesar todo correctamente, volvemos al menú
                _this.mostrarMenuVeterinarias();
            });
        });
    };
    // Función para eliminar una veterinaria
    Menu.prototype.eliminarVeterinaria = function () {
        var _this = this;
        var veterinarias = this.redVet1.getVeterinarias();
        this.rl.question('Ingrese nombre de la veterinaria a eliminar: ', function (nombreVet) {
            var index = veterinarias.findIndex(function (vet) { return vet.getNombreVeterinaria() === nombreVet; });
            if (index !== -1) {
                _this.rl.question('¿Está seguro de eliminar la veterinaria? (s/n)', function (respuesta) {
                    if (respuesta.toLowerCase() === 's') {
                        veterinarias.splice(index, 1);
                        console.log("Veterinaria Eliminada");
                        _this.redVet1.actualizarVeterinarias(veterinarias);
                        _this.mostrarMenuVeterinarias();
                    }
                    else {
                        console.log("Operación cancelada");
                        _this.mostrarMenuVeterinarias();
                    }
                });
            }
            else {
                console.log("Veterinaria no encontrada");
                _this.mostrarMenuVeterinarias();
            }
        });
    };
    // Función para modificar una veterinaria
    Menu.prototype.modificarVeterinaria = function () {
        var _this = this;
        var veterinarias = this.redVet1.getVeterinarias();
        this.rl.question('Ingrese nombre de la veterinaria a modificar: ', function (nombreVet) {
            var index = veterinarias.findIndex(function (vet) { return vet.getNombreVeterinaria() === nombreVet; });
            if (index !== -1) {
                _this.rl.question('Ingrese nuevo nombre de la veterinaria: ', function (nombreVet1) {
                    _this.rl.question('Ingrese Nueva Direccion Veterinaria: ', function (direccionVet1) {
                        veterinarias[index].setNombreVeterinaria(nombreVet1);
                        veterinarias[index].setDireccion(direccionVet1);
                        _this.redVet1.actualizarVeterinarias(veterinarias);
                        console.log("Veterinaria modificada");
                        veterinarias.forEach(function (vet) { return console.log(vet.getDatosVeterinaria()); });
                        _this.mostrarMenuVeterinarias();
                    });
                });
            }
            else {
                console.log("Veterinaria no encontrada");
                _this.mostrarMenuVeterinarias();
            }
        });
    };
    // Función para imprimir la lista de veterinarias
    Menu.prototype.imprimirListaVeterinarias = function () {
        var veterinarias = this.redVet1.getVeterinarias();
        if (veterinarias.length === 0) {
            console.log('No hay veterinarias agregadas');
        }
        else {
            veterinarias.forEach(function (veterinaria) { return console.log(veterinaria.getDatosVeterinaria()); });
        }
        this.mostrarMenuVeterinarias();
    };
    // Función para trabajar con una veterinaria por ID
    Menu.prototype.verVeterinariaTal = function () {
        var _this = this;
        this.rl.question("Ingresa el ID de la veterinaria: ", function (input) {
            var id = parseInt(input); // Convertir la entrada a un número
            if (isNaN(id)) {
                console.log("El ID debe ser un número válido.");
                _this.verVeterinariaTal(); // Volver a pedir el ID si no es válido
            }
            else {
                var veterinaria = _this.getVeterinariaPorId(id);
                if (veterinaria) {
                    console.log("Veterinaria encontrada:");
                    console.log(veterinaria.getDatosVeterinaria());
                    _this.mostrarMenuVeterinarias();
                }
                else {
                    console.log("No se ha encontrado una veterinaria con ese ID. Introduzca un ID correcto o vuelva al menu principal");
                    _this.rl.question('¿Quiere agregar otro id de veterinaria? en caso de salir presione n (s/n)', function (respuesta) {
                        if (respuesta.toLowerCase() === 's') {
                            _this.verVeterinariaTal();
                        }
                        else {
                            console.log("Volver a menu veterinaria");
                            _this.mostrarMenuVeterinarias();
                        }
                    });
                }
            }
        });
    };
    Menu.prototype.getVeterinariaPorId = function (id) {
        var veterinarias = this.redVet1.getVeterinarias();
        return veterinarias.find(function (veterinaria) { return veterinaria.getIdVeterinaria() === id; });
    };
    // Menú de Proveedores
    Menu.prototype.mostrarMenuProveedores = function () {
        var _this = this;
        console.log("\nMenú Proveedores");
        console.log("1. Agregar Proveedor");
        console.log("2. Eliminar Proveedor");
        console.log("3. Modificar Proveedor");
        console.log("4. Ver todos los Proveedores");
        console.log("5. Volver al menú principal");
        this.rl.question("\nIngrese su opción: ", function (opcion) {
            switch (opcion) {
                case "1":
                    _this.agregarProveedor();
                    break;
                case "2":
                    _this.eliminarProveedor();
                    break;
                case "3":
                    _this.modificarProveedor();
                    break;
                case "4":
                    _this.imprimirListaProveedores();
                    break;
                case "5":
                    _this.mostrarMenuPrincipal();
                    return;
                default:
                    console.log("Opción inválida. Intente nuevamente.");
                    _this.mostrarMenuProveedores();
            }
        });
    };
    // Función para agregar un proveedor
    Menu.prototype.agregarProveedor = function () {
        var _this = this;
        this.rl.question('Ingrese el nombre del proveedor: ', function (nombreProv) {
            _this.rl.question('Ingrese el teléfono del proveedor: ', function (telefonoProv) {
                var telefono = parseInt(telefonoProv); // Convertir el numero a entero
                _this.rl.question('Ingrese la dirección del proveedor: ', function (direccionProv) {
                    var proveedor1 = new Proveedor_1.Proveedor(nombreProv, telefono, direccionProv);
                    _this.redVet1.agregarProveedor(proveedor1);
                    console.log("Proveedor agregado:\n" + proveedor1.getDatosProveedor());
                    _this.mostrarMenuProveedores();
                });
            });
        });
    };
    // Función para eliminar un proveedor
    Menu.prototype.eliminarProveedor = function () {
        var _this = this;
        var proveedores = this.redVet1.getProveedores();
        this.rl.question('Ingrese el nombre del proveedor a eliminar: ', function (nombreProv) {
            var index = proveedores.findIndex(function (prov) { return prov.getNombreProveedor() === nombreProv; });
            if (index !== -1) {
                _this.rl.question('¿Está seguro de eliminar el proveedor? (s/n)', function (respuesta) {
                    if (respuesta.toLowerCase() === 's') {
                        proveedores.splice(index, 1);
                        console.log("Proveedor Eliminado");
                        _this.redVet1.actualizarProveedores(proveedores);
                        _this.mostrarMenuProveedores();
                    }
                    else {
                        console.log("Operación cancelada");
                        _this.mostrarMenuProveedores();
                    }
                });
            }
            else {
                console.log("Proveedor no encontrado");
                _this.mostrarMenuProveedores();
            }
        });
    };
    // Función para modificar un proveedor
    Menu.prototype.modificarProveedor = function () {
        var _this = this;
        var proveedores = this.redVet1.getProveedores();
        this.rl.question('Ingrese nombre del proveedor a modificar: ', function (nombreProv) {
            var index = proveedores.findIndex(function (prov) { return prov.getNombreProveedor() === nombreProv; });
            if (index !== -1) {
                _this.rl.question('Ingrese nuevo nombre del proveedor: ', function (nombreProv1) {
                    _this.rl.question('Ingrese nueva dirección del proveedor: ', function (direccionProv1) {
                        _this.rl.question('Ingrese nuevo teléfono del proveedor: ', function (telefonoProv1) {
                            proveedores[index].setNombreProveedor(nombreProv1);
                            proveedores[index].setDireccion(direccionProv1);
                            proveedores[index].setTelefonoProveedor(parseInt(telefonoProv1));
                            _this.redVet1.actualizarProveedores(proveedores);
                            console.log("Proveedor modificado");
                            proveedores.forEach(function (prov) { return console.log(prov.getDatosProveedor()); });
                            _this.mostrarMenuProveedores();
                        });
                    });
                });
            }
            else {
                console.log("Proveedor no encontrado");
                _this.mostrarMenuProveedores();
            }
        });
    };
    // Función para imprimir la lista de proveedores
    Menu.prototype.imprimirListaProveedores = function () {
        var proveedores = this.redVet1.getProveedores();
        if (proveedores.length === 0) {
            console.log('No hay proveedores agregados');
        }
        else {
            proveedores.forEach(function (proveedor) { return console.log(proveedor.getDatosProveedor()); });
        }
        this.mostrarMenuProveedores();
    };
    return Menu;
}());
exports.Menu = Menu;
