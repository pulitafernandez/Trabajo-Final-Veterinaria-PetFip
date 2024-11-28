import { Proveedor } from "./Proveedor"; 
import { Veterinaria } from "./Veterinaria";

export class RedVeterinaria {
    private veterinarias: Veterinaria[] = [];
    private proveedores: Proveedor[] = [];

    // Método para agregar una nueva veterinaria
    public agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);    
    }

    // Método para verificar si existe una veterinaria con el mismo nombre y dirección
    public existeVeterinaria(nombre: string, direccion: string): boolean {
        return this.veterinarias.some(vet => 
            vet.getNombreVeterinaria() === nombre && 
            vet.getDireccionVeterinaria() === direccion
        );
    }

    // Método para agregar un proveedor
    public agregarProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
    }

    // Método para verificar si existe un proveedor con el mismo nombre, teléfono y dirección
public existeProveedor(nombre: string, telefono: number, direccion: string): boolean {
    return this.proveedores.some(prov =>
        prov.getNombreProveedor() === nombre &&
        prov.getTelefonoProveedor() === telefono &&
        prov.getDireccionProveedor() === direccion
    );
}

    // Método para obtener la lista de veterinarias
    public getVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    // Método para obtener la lista de proveedores
    public getProveedores(): Proveedor[] {
        return this.proveedores;
    }

    // Método para actualizar la lista de proveedores
    public actualizarProveedores(proveedores: Proveedor[]): void {
        this.proveedores = proveedores;
    }

    // Método para actualizar la lista de veterinarias
    public actualizarVeterinarias(veterinarias: Veterinaria[]): void {
        this.veterinarias = veterinarias;
    }

    // Método para eliminar un proveedor
    public eliminarProveedor(idProveedor: number): boolean {
        const index = this.proveedores.findIndex(prov => prov.getIdProveedor() === idProveedor);
        if (index >= 0) {
            this.proveedores.splice(index, 1);
            return true;
        }
        return false;
    }

    // Método para obtener una veterinaria por ID
    public getVeterinariaPorId(id: number): Veterinaria | undefined {
        return this.veterinarias.find(veterinaria => veterinaria.getIdVeterinaria() === id);
    }
}