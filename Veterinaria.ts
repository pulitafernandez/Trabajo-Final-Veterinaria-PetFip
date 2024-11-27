import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";

export class Veterinaria {
    private idVeterinaria: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[];
    private pacientes: Paciente[];

    constructor(nombre: string, direccion: string) {
        this.idVeterinaria = Veterinaria.generarIdUnico();
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }

    public getIdVeterinaria(): number {
        return this.idVeterinaria;
    }

    public static generarIdUnico(): number {
        return Math.floor(Math.random() * 1000000);
    }

    public getNombreVeterinaria(): string {
        return this.nombre;
    }

    public getDireccionVeterinaria(): string {
        return this.direccion;
    }

    public getDatosVeterinaria(): string {
        return `
        Veterinaria:
            ID: ${this.idVeterinaria}
            Nombre: ${this.nombre}
            Dirección: ${this.direccion}`;
    }

    public setNombreVeterinaria(nombre: string): void {
        this.nombre = nombre;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    // Método para agregar un cliente a la veterinaria
    public agregarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    // Método para eliminar un cliente de la veterinaria
    public eliminarCliente(cliente: Cliente): void {
        this.clientes = this.clientes.filter(c => c !== cliente);
    }

    // Método para obtener un cliente por nombre
    public getClientePorNombre(nombre: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getNombre() === nombre);
    }

    // Método para obtener un cliente por ID
    public obtenerClientePorId(id: number): Cliente | null {
        return this.clientes.find(cliente => cliente.getIdCliente() === id) || null;
    }

    // Método para obtener todos los clientes
    public getClientes(): Cliente[] {
        return this.clientes;
    }

    // Métodos para manejar pacientes
    
    // Método para agregar un paciente a la veterinaria
    public agregarPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
    }

    // Método para obtener todos los pacientes
    public getPacientes(): Paciente[] {
        return this.pacientes;
    }

    // Método para obtener un paciente por nombre
    public getPacientePorNombre(nombre: string): Paciente | undefined {
        return this.pacientes.find(paciente => paciente.getNombre() === nombre);
    }

    // Método para eliminar un paciente de la veterinaria
    public eliminarPaciente(paciente: Paciente): void {
        this.pacientes = this.pacientes.filter(p => p !== paciente);
    }

    // Método para mostrar los datos de la veterinaria: sus clientes y pacientes
    public mostrarClientes(): void {
        console.log(`Veterinaria: ${this.nombre}, Dirección: ${this.direccion}`);
        if (this.clientes.length === 0) {
            console.log("No hay clientes registrados.");
        } else {
            this.clientes.forEach(cliente => cliente.mostrarCliente());
        }
    }

    public mostrarPacientes(): void {
        console.log(`Veterinaria: ${this.nombre}, Dirección: ${this.direccion}`);
        if (this.pacientes.length === 0) {
            console.log("No hay pacientes registrados.");
        } else {
            this.pacientes.forEach(paciente => paciente.mostrarPaciente());
        }
    }
}