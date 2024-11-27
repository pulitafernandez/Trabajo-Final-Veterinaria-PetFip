"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var readline = require("readline");
var Veterinaria_1 = require("./Veterinaria");
var RedVeterinaria_1 = require("./RedVeterinaria");
var Proveedor_1 = require("./Proveedor");
var Cliente_1 = require("./Cliente");
var Paciente_1 = require("./Paciente");
var Menu = /** @class */ (function () {
    function Menu() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.redVet1 = new RedVeterinaria_1.RedVeterinaria();
        this.clientes = [];
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
                    _this.seleccionarveterinaria();
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
    // Función para obtener un cliente por su ID
    Menu.prototype.obtenerClientePorId = function (id) {
        return this.clientes.find(function (cliente) { return cliente.getIdCliente() === id; }) || null;
    };
    // Función para trabajar con una veterinaria por ID
    Menu.prototype.seleccionarveterinaria = function () {
        var _this = this;
        this.rl.question("Ingresa el ID de la veterinaria: ", function (input) {
            var id = parseInt(input);
            if (isNaN(id)) {
                console.log("El ID debe ser un número válido.");
                _this.seleccionarveterinaria();
            }
            else {
                var veterinaria = _this.getVeterinariaPorId(id);
                if (veterinaria) {
                    console.log("Veterinaria encontrada:");
                    console.log(veterinaria.getDatosVeterinaria());
                    _this.mostrarMenuVeterinariaSeleccionada(veterinaria);
                }
                else {
                    console.log("No se ha encontrado una veterinaria con ese ID.");
                    _this.rl.question('¿Quiere agregar otro id de veterinaria? En caso de salir presione n (s/n)', function (respuesta) {
                        if (respuesta.toLowerCase() === 's') {
                            _this.seleccionarveterinaria();
                        }
                        else {
                            console.log("Volver a menú veterinaria");
                            _this.mostrarMenuVeterinarias();
                        }
                    });
                }
            }
        });
    };
    // Menú de opciones al seleccionar una veterinaria
    Menu.prototype.mostrarMenuVeterinariaSeleccionada = function (veterinaria) {
        var _this = this;
        console.log("\nMenú de Veterinaria seleccionada");
        console.log("1. Gestionar Clientes");
        console.log("2. Gestionar Pacientes");
        console.log("3. Volver al menú anterior");
        this.rl.question("\nIngrese su opción: ", function (opcion) {
            switch (opcion) {
                case "1":
                    _this.gestionarClientes(veterinaria);
                    break;
                case "2":
                    _this.gestionarPacientes(veterinaria);
                    break;
                case "3":
                    _this.mostrarMenuVeterinarias();
                    break;
                default:
                    console.log("Opción inválida.");
                    _this.mostrarMenuVeterinariaSeleccionada(veterinaria);
            }
        });
    };
    // Función para gestionar clientes
    Menu.prototype.gestionarClientes = function (veterinaria) {
        var _this = this;
        console.log("\nMenú de Clientes");
        console.log("1. Agregar Cliente");
        console.log("2. Eliminar Cliente");
        console.log("3. Modificar Cliente");
        console.log("4. Ver todos los Clientes");
        console.log("5. Registrar nueva visita");
        console.log("6. Volver al menú de Veterinaria");
        this.rl.question("\nIngrese su opción: ", function (opcion) {
            switch (opcion) {
                case "1":
                    _this.agregarCliente(veterinaria);
                    break;
                case "2":
                    _this.eliminarCliente(veterinaria);
                    break;
                case "3":
                    _this.modificarCliente(veterinaria);
                    break;
                case "4":
                    _this.verClientes(veterinaria);
                    break;
                case "5":
                    _this.registrarNuevaVisita(veterinaria);
                    break;
                case "6":
                    _this.mostrarMenuVeterinariaSeleccionada(veterinaria);
                    break;
                default:
                    console.log("Opción inválida.");
                    _this.gestionarClientes(veterinaria);
            }
        });
    };
    // Función para agregar un cliente
    Menu.prototype.agregarCliente = function (veterinaria) {
        var _this = this;
        this.rl.question('Ingrese nombre del cliente: ', function (nombreCliente) {
            _this.rl.question('Ingrese teléfono del cliente: ', function (telefonoCliente) {
                var idCliente = Cliente_1.Cliente.generarIdUnico();
                var cliente = new Cliente_1.Cliente(idCliente, nombreCliente, Number(telefonoCliente));
                veterinaria.agregarCliente(cliente);
                console.log("Cliente agregado: " + cliente.getDatosCliente());
                _this.gestionarClientes(veterinaria);
            });
        });
    };
    // Función para eliminar un cliente
    Menu.prototype.eliminarCliente = function (veterinaria) {
        var _this = this;
        this.rl.question('Ingrese el id del cliente a eliminar: ', function (idCliente) {
            var cliente = veterinaria.obtenerClientePorId(Number(idCliente));
            if (cliente) {
                veterinaria.eliminarCliente(cliente);
                console.log("Cliente eliminado.");
                _this.gestionarClientes(veterinaria);
            }
            else {
                console.log("Cliente no encontrado.");
                _this.gestionarClientes(veterinaria);
            }
        });
    };
    // Función para modificar un cliente
    Menu.prototype.modificarCliente = function (veterinaria) {
        var _this = this;
        this.rl.question('Ingrese el id del cliente a modificar: ', function (idCliente) {
            var cliente = veterinaria.obtenerClientePorId(Number(idCliente));
            if (cliente) {
                _this.rl.question('Ingrese nuevo nombre del cliente: ', function (nuevoNombre) {
                    _this.rl.question('Ingrese nuevo teléfono del cliente: ', function (nuevoTelefono) {
                        var telefonoNumero = parseInt(nuevoTelefono);
                        if (isNaN(telefonoNumero)) {
                            console.log("El teléfono ingresado no es válido.");
                            _this.modificarCliente(veterinaria);
                        }
                        else {
                            cliente.setNombre(nuevoNombre);
                            cliente.setTelefono(telefonoNumero);
                            console.log("Cliente modificado.");
                            _this.gestionarClientes(veterinaria);
                        }
                    });
                });
            }
            else {
                console.log("Cliente no encontrado.");
                _this.gestionarClientes(veterinaria);
            }
        });
    };
    // Función para ver todos los clientes
    Menu.prototype.verClientes = function (veterinaria) {
        var clientes = veterinaria.getClientes();
        if (clientes.length === 0) {
            console.log("No hay clientes registrados.");
        }
        else {
            clientes.forEach(function (cliente) { return console.log(cliente.getDatosCliente()); });
        }
        this.gestionarClientes(veterinaria);
    };
    // Función para registrar nueva visita
    Menu.prototype.registrarNuevaVisita = function (veterinaria) {
        var _this = this;
        this.rl.question("\nIngrese el ID del cliente para registrar la nueva visita: ", function (idCliente) {
            var cliente = veterinaria.obtenerClientePorId(Number(idCliente));
            if (cliente) {
                cliente.registrarVisita();
                console.log("Visita registrada con \u00E9xito para el cliente ".concat(cliente.getNombre(), "."));
                console.log(cliente.getDatosCliente());
            }
            else {
                console.log("Cliente no encontrado.");
            }
            _this.gestionarClientes(veterinaria);
        });
    };
    // Función para gestionar pacientes
    Menu.prototype.gestionarPacientes = function (veterinaria) {
        var _this = this;
        console.log("\nMenú de Pacientes");
        console.log("1. Agregar Paciente");
        console.log("2. Eliminar Paciente");
        console.log("3. Ver todos los Pacientes");
        console.log("4. Volver al menú de Veterinaria");
        this.rl.question("\nIngrese su opción: ", function (opcion) {
            switch (opcion) {
                case "1":
                    _this.agregarPaciente(veterinaria);
                    break;
                case "2":
                    _this.eliminarPaciente(veterinaria);
                    break;
                case "3":
                    _this.verPacientes(veterinaria);
                    break;
                case "4":
                    _this.mostrarMenuVeterinariaSeleccionada(veterinaria);
                    break;
                default:
                    console.log("Opción inválida.");
                    _this.gestionarPacientes(veterinaria);
            }
        });
    };
    // Función para agregar un paciente
    Menu.prototype.agregarPaciente = function (veterinaria) {
        var _this = this;
        this.rl.question('Ingrese nombre del paciente: ', function (nombrePaciente) {
            _this.rl.question('Ingrese especie del paciente: ', function (especiePaciente) {
                _this.rl.question('Ingrese ID del dueño (cliente) del paciente: ', function (idDueño) {
                    var idCliente = parseInt(idDueño, 10);
                    var idMascota = Paciente_1.Paciente.generarIdUnico();
                    var paciente = new Paciente_1.Paciente(idMascota, idCliente, nombrePaciente, especiePaciente);
                    veterinaria.agregarPaciente(paciente);
                    console.log("Paciente agregado: " + paciente.getDatosPaciente());
                    _this.gestionarPacientes(veterinaria);
                });
            });
        });
    };
    // Función para eliminar un paciente
    Menu.prototype.eliminarPaciente = function (veterinaria) {
        var _this = this;
        this.rl.question('Ingrese nombre del paciente a eliminar: ', function (nombrePaciente) {
            var paciente = veterinaria.getPacientePorNombre(nombrePaciente);
            if (paciente) {
                veterinaria.eliminarPaciente(paciente);
                console.log("Paciente eliminado.");
                _this.gestionarPacientes(veterinaria);
            }
            else {
                console.log("Paciente no encontrado.");
                _this.gestionarPacientes(veterinaria);
            }
        });
    };
    // Función para ver todos los pacientes
    Menu.prototype.verPacientes = function (veterinaria) {
        var pacientes = veterinaria.getPacientes();
        if (pacientes.length === 0) {
            console.log("No hay pacientes registrados.");
        }
        else {
            pacientes.forEach(function (paciente) { return console.log(paciente.getDatosPaciente()); });
        }
        this.gestionarPacientes(veterinaria);
    };
    // Funcion para obtener la veterinaria por ID
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
    ;
    // Función para agregar un proveedor
    Menu.prototype.agregarProveedor = function () {
        var _this = this;
        this.rl.question('Ingrese el nombre del proveedor: ', function (nombreProv) {
            _this.rl.question('Ingrese el teléfono del proveedor: ', function (telefonoProv) {
                var telefono = parseInt(telefonoProv);
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
        this.rl.question('Ingrese el id del proveedor a eliminar: ', function (idProveedor) {
            var index = proveedores.findIndex(function (prov) { return prov.getIdProveedor() === Number(idProveedor); });
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
        this.rl.question('Ingrese el id del proveedor a modificar: ', function (idProveedor) {
            var index = proveedores.findIndex(function (prov) { return prov.getIdProveedor() === Number(idProveedor); });
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
