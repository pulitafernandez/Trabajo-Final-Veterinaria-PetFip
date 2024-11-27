export class Proveedor {
    private idProveedor: number;
    private nombreProveedor: string;
    private telefonoProveedor: number;
    private direccionProveedor: string;
  
    constructor(nombreProveedor: string, telefonoProveedor: number, direccionProveedor: string) {
        this.idProveedor = Proveedor.generarIdUnico();
        this.nombreProveedor = nombreProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.direccionProveedor = direccionProveedor;
    }
  
    // Método para generar un ID único
    public static generarIdUnico(): number {
        return Math.floor(Math.random() * 1000000);
    }
  
    public getIdProveedor(): number {
        return this.idProveedor;
    }
  
    public getNombreProveedor(): string {
        return this.nombreProveedor;
    }
  
    public setNombreProveedor(nombre: string): void {
        this.nombreProveedor = nombre;
    }
  
    public getTelefonoProveedor(): number {
        return this.telefonoProveedor;
    }
  
    public setTelefonoProveedor(telefono: number): void {
        this.telefonoProveedor = telefono;
    }
  
    public getDireccionProveedor(): string {
        return this.direccionProveedor;
    }
  
    public setDireccion(direccion: string): void {
        this.direccionProveedor = direccion;
    }
  
    // mostrar los datos del proveedor
    public getDatosProveedor(): string {
        return `
  Proveedor:
    ID: ${this.idProveedor}
    Nombre: ${this.nombreProveedor}
    Teléfono: ${this.telefonoProveedor}
    Dirección: ${this.direccionProveedor}`;
    }
  }
  