import { Paciente } from "./Paciente";

export class Cliente{
    private idCliente: number;
    private nombre: string;
    private telefono: number;
    private esVip: boolean;
    private visitas: number;
    private mascotas: Paciente[]; //listado de sus mascotas

    constructor(idCliente:number, nombre:string, telefono:number){
        this.idCliente=idCliente;
        this.nombre=nombre;
        this.telefono=telefono;
        this.esVip=false;
        this.visitas=0;
        this.mascotas=[];
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
    public setEsVip(esVip: boolean) {
        this.esVip = esVip;
    }

    public getMascotas():Paciente[]{
        return this.mascotas;
    }
    public setMascotas(mascotas:Paciente[]){
        this.mascotas=mascotas;
    }

    public getDatosCliente(): string {
        return `
        Cliente:
            ID: ${this.idCliente}
            Nombre: ${this.nombre}
            Telefono: ${this.telefono}
            Es VIP: ${this.esVip}`; //ver como hacer para mostrar si es vip o no por que es booleano
        
    }

    public registrarVisita(): void {
        this.visitas++;
        this.esVip = this.visitas >= 5;
    }

    
    public mostrarCliente() {
        console.log(`Cliente: ${this.nombre}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Mascotas: ${this.mascotas.join(", ")}`);
    }
}