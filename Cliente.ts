import { Paciente } from "./Paciente";

export class Cliente{
    private idCliente: number;
    private nombre: string;
    private telefono: number;
    private esVip: boolean;
    private mascotas: Paciente[]; //listado de sus mascotas

    constructor(idCliente:number, nombre:string, telefono:number, esVip:boolean){
        this.idCliente=idCliente;
        this.nombre=nombre;
        this.telefono=telefono;
        this.esVip=esVip;
        this.mascotas=[];
    }
}