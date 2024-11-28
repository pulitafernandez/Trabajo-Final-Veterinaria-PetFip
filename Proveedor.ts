export class Proveedor {
    private idProveedor: number;
    private nombreProveedor: string;
    private telefonoProveedor: number;
    private direccionProveedor: string;

    constructor(idProveedor: number, nombreProveedor: string, telefonoProveedor: number, direccionProveedor: string) {
        this.idProveedor = idProveedor;
        this.nombreProveedor = nombreProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.direccionProveedor = direccionProveedor;
    }

    // Método para generar un ID único
    public static generarIdUnico(proveedores: Proveedor[]): number {
        let nuevoId: number = 0;
        let idUnico = false;

        while (!idUnico) {
            nuevoId = Math.floor(Math.random() * 1000000);
            idUnico = !proveedores.some(prov => prov.getIdProveedor() === nuevoId);
        }

        return nuevoId;
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

    public getDatosProveedor(): string {
        return `
Proveedor:
  ID: ${this.idProveedor}
  Nombre: ${this.nombreProveedor}
  Teléfono: ${this.telefonoProveedor}
  Dirección: ${this.direccionProveedor}`;
    }
}
