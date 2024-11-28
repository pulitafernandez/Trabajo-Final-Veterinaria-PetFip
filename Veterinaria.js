"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Cliente_1 = require("./Cliente");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(idVeterinaria, nombre, direccion) {
        this.idVeterinaria = idVeterinaria;
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }
    Veterinaria.prototype.getIdVeterinaria = function () {
        return this.idVeterinaria;
    };
    Veterinaria.generarIdUnico = function (veterinarias) {
        var nuevoId = 0;
        var idUnico = false;
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !veterinarias.some(function (vet) { return vet.getIdVeterinaria() === nuevoId; });
        }
        return nuevoId;
    };
    Veterinaria.prototype.getNombreVeterinaria = function () {
        return this.nombre;
    };
    Veterinaria.prototype.getDireccionVeterinaria = function () {
        return this.direccion;
    };
    Veterinaria.prototype.getDatosVeterinaria = function () {
        return "\n        Veterinaria:\n            ID: ".concat(this.idVeterinaria, "\n            Nombre: ").concat(this.nombre, "\n            Direcci\u00F3n: ").concat(this.direccion);
    };
    Veterinaria.prototype.setNombreVeterinaria = function (nombre) {
        this.nombre = nombre;
    };
    Veterinaria.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    // Método para agregar un cliente a la veterinaria
    Veterinaria.prototype.agregarCliente = function (cliente) {
        var existeCliente = this.clientes.some(function (c) {
            return c.getNombre() === cliente.getNombre() &&
                c.getTelefono() === cliente.getTelefono();
        });
        if (existeCliente) {
            return "El cliente ya existe en la veterinaria.";
        }
        var idUnico = Cliente_1.Cliente.generarIdUnico(this.clientes);
        cliente.setIdCliente(idUnico);
        this.clientes.push(cliente);
        return "Cliente agregado con éxito.";
    };
    // Método para eliminar un cliente de la veterinaria
    Veterinaria.prototype.eliminarCliente = function (cliente) {
        this.clientes = this.clientes.filter(function (c) { return c !== cliente; });
    };
    // Método para obtener un cliente por nombre
    Veterinaria.prototype.getClientePorNombre = function (nombre) {
        return this.clientes.find(function (cliente) { return cliente.getNombre() === nombre; });
    };
    // Método para obtener un cliente por ID
    Veterinaria.prototype.obtenerClientePorId = function (id) {
        return this.clientes.find(function (cliente) { return cliente.getIdCliente() === id; }) || null;
    };
    // Método para obtener todos los clientes
    Veterinaria.prototype.getClientes = function () {
        return this.clientes;
    };
    // Métodos para manejar pacientes
    // Método para agregar un paciente a la veterinaria
    Veterinaria.prototype.agregarPaciente = function (paciente, cliente) {
        if (cliente) {
            cliente.agregarMascota(paciente);
            this.pacientes.push(paciente);
            console.log("Mascota agregada correctamente.");
        }
        else {
            console.log("estoy en agregaR PACIENTE" + cliente);
            console.log("Cliente no encontrado.");
        }
    };
    // Método para verificar si un paciente ya existe
    Veterinaria.prototype.existePaciente = function (nombre, especie, idCliente) {
        return this.pacientes.some(function (paciente) {
            return paciente.getNombre() === nombre &&
                paciente.getEspecie() === especie &&
                paciente.getIdCliente() === idCliente;
        });
    };
    // Método para obtener todos los pacientes
    Veterinaria.prototype.getPacientes = function () {
        return this.pacientes;
    };
    // Método para obtener un paciente por nombre
    Veterinaria.prototype.getPacientePorNombre = function (nombre) {
        return this.pacientes.find(function (paciente) { return paciente.getNombre() === nombre; });
    };
    // Método para obtener un paciente por id
    Veterinaria.prototype.getPacientePorId = function (idPaciente) {
        return this.pacientes.find(function (paciente) { return paciente.getIdPaciente() === idPaciente; });
    };
    // Método para eliminar un paciente de la veterinaria
    Veterinaria.prototype.eliminarPaciente = function (paciente) {
        this.pacientes = this.pacientes.filter(function (p) { return p !== paciente; });
    };
    // Método para mostrar los datos de la veterinaria: sus clientes y pacientes
    Veterinaria.prototype.mostrarClientes = function () {
        console.log("Veterinaria: ".concat(this.nombre, ", Direcci\u00F3n: ").concat(this.direccion));
        if (this.clientes.length === 0) {
            console.log("No hay clientes registrados.");
        }
        else {
            this.clientes.forEach(function (cliente) {
                console.log(cliente.getDatosCliente()); // Mostrar cliente con mascotas
            });
        }
    };
    Veterinaria.prototype.mostrarPacientes = function () {
        console.log("Veterinaria: ".concat(this.nombre, ", Direcci\u00F3n: ").concat(this.direccion));
        if (this.pacientes.length === 0) {
            console.log("No hay pacientes registrados.");
        }
        else {
            this.pacientes.forEach(function (paciente) { return paciente.mostrarPaciente(); });
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
