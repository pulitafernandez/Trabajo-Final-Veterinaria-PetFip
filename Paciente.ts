export class Paciente{
    private idMascota: number;
    private idCliente: number; //es id del dueño
    private nombre: string;
    private especie: string;

    constructor(idMascota: number, idCliente: number, nombre: string, especie: string){
        this.idMascota=idMascota;
        this.idCliente=idCliente;
        this.nombre=nombre;
        this.especie=especie;
    }

    
}