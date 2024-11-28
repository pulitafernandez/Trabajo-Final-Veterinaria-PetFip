import { Paciente } from "./Paciente";

export class Cliente {
    private idCliente: number;
    private nombre: string;
    private telefono: number;
    private esVip: boolean;
    private visitas: number;
    private mascotas: Paciente[];

    constructor(idCliente: number, nombre: string, telefono: number) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = false;
        this.visitas = 0;
        this.mascotas = [];
    }

    // Función para generar un ID único
    public static generarIdUnico(clientes: Cliente[]): number {
        let nuevoId: number = 0;
        let idUnico = false;
    
        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !clientes.some(cliente => cliente.getIdCliente() === nuevoId);
        }
    
        return nuevoId;
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

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    public getEsVip(): boolean {
        return this.esVip;
    }

    public setEsVip(esVip: boolean): void {
        this.esVip = esVip;
    }

    public getMascotas(): Paciente[] {
        return this.mascotas;
    }

    public setMascotas(mascotas: Paciente[]): void {
        this.mascotas = mascotas;
    }

    // Mostrar información del cliente
    public getDatosCliente(): string {
        let mascotasInfo = "";
        if (this.mascotas.length > 0) {
            mascotasInfo = `\nMascotas:`;
            this.mascotas.forEach(mascota => {
                mascotasInfo += `\nID Mascota: ${mascota.getIdPaciente()}, Nombre: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}`;
            });
        } else {
            mascotasInfo = "\nNo tiene mascotas registradas.";
        }
        return `
        Cliente:
            ID: ${this.idCliente}
            Nombre: ${this.nombre}
            Teléfono: ${this.telefono}
            Es VIP: ${this.esVip ? 'Sí' : 'No'}
            Visitas: ${this.visitas}` + mascotasInfo;
    }
    

    // Método para registrar visitas de un cliente
    public registrarVisita(): void {
        this.visitas++;
        if (this.visitas >= 5) {
            this.esVip = true;
        }
    }

    // Mostrar cliente junto con sus mascotas
    public mostrarCliente(): void {
        console.log(`Cliente: ${this.nombre}`);
        console.log(`Teléfono: ${this.telefono}`);
        if (this.mascotas.length > 0) {
            console.log(`Mascotas: ${this.mascotas.map(mascota => mascota.getNombre()).join(", ")}`);
        } else {
            console.log("No tiene mascotas registradas.");
        }
        console.log(`VIP: ${this.esVip ? "Sí" : "No"}`);
        console.log(`Visitas: ${this.visitas}`);
    }

    // Método para agregar una mascota al cliente
    public agregarMascota(mascota: Paciente): void {
        this.mascotas.push(mascota);
    }

    // Eliminar una mascota del cliente
    public eliminarMascota(idMascota: number): void {
        this.mascotas = this.mascotas.filter(mascota => mascota.getIdPaciente() !== idMascota);
    }

    // Comprobar si el cliente es VIP
    public esVipCliente(): string {
        return this.esVip ? "VIP" : "No es VIP";
    }
}