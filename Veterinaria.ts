import { Cliente } from "./Cliente";

export class Veterinaria {
    private idVeterinaria: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[];

    constructor(nombre: string, direccion: string) {
        this.idVeterinaria = Veterinaria.generarIdUnico();
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes=[];
    }

    public getIdVeterinaria():number{
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
    public agregarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

  // Método para eliminar un cliente de la veterinaria
    public eliminarCliente(cliente: Cliente) {
        this.clientes = this.clientes.filter(c => c !== cliente);
    }

    // Método para mostrar los datos de la veterinaria y sus clientes
    public mostrarClientes(): void {
        console.log(`Veterinaria: ${this.nombre}, Dirección: ${this.direccion}`);
        if (this.clientes.length === 0) {
            console.log("No hay clientes registrados.");
        } else {
            this.clientes.forEach(cliente => cliente.mostrarCliente());
        }
    }
    


}
