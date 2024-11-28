export class Paciente {
    private idMascota: number;
    private idCliente: number;
    private nombre: string;
    private especie: string;

    constructor(idMascota: number, idCliente: number, nombre: string, especie: string) {
        this.idMascota = idMascota;
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.especie = especie;
    }

     // Función para generar un ID único
     public static generarIdUnico(pacientes: Paciente[]): number {
        let nuevoId: number = 0;
        let idUnico = false;

        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !pacientes.some(paciente => paciente.getIdPaciente() === nuevoId);
        }

        return nuevoId;
    }

    public getIdPaciente(): number {
        return this.idMascota;
    }

    public setIdPaciente(idMascota: number): void {
        this.idMascota = idMascota;
    }

    public getIdCliente(): number {
        return this.idCliente;
    }

    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }

    // Mostrar información de la mascota junto con su dueño
    public getDatosPaciente(): string {
        return `
        Mascota:
            ID: ${this.idMascota}
            Nombre: ${this.nombre}
            Especie: ${this.especie}
            ID del dueño: ${this.idCliente}`;
    }

    // Método para mostrar los detalles del paciente
    public mostrarPaciente(): void {
        console.log(`Mascota: ${this.nombre}`);
        console.log(`Especie: ${this.especie}`);
        console.log(`ID del dueño: ${this.idCliente}`);
    }
}
