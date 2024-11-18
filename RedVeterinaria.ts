import { Proveedor } from "./Proveedor";
import { Veterinaria } from "./Veterinaria";

export class RedVeterinaria {
    private veterinarias: Veterinaria[] = [];
    private proveedores: Proveedor[] = [];

    // Método para agregar una nueva veterinaria
    public agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
    }

    // Método para agregar un proveedor
    public agregarProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
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
    public eliminarProveedor(nombre: string): boolean {
        const index = this.proveedores.findIndex(prov => prov.getNombreProveedor() === nombre);
        if (index >= 0) {
            this.proveedores.splice(index, 1);
            return true;
        }
        return false;
    }
}