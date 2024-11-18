export class Veterinaria {
    private idVeterinaria: number;
    private nombre: string;
    private direccion: string;

    constructor(nombre: string, direccion: string) {
        this.idVeterinaria = Veterinaria.generarIdUnico();
        this.nombre = nombre;
        this.direccion = direccion;
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
}
