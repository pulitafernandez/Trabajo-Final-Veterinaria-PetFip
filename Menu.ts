import * as readline from "readline";
import { Veterinaria } from './Veterinaria';
import { RedVeterinaria } from './RedVeterinaria';
import { Proveedor } from './Proveedor';

export class Menu {
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    private redVet1 = new RedVeterinaria();

    iniciar(): void {
        this.mostrarMenuPrincipal();
    }

    private mostrarMenuPrincipal(): void {
        console.log("\n Bienvenido a la red de Veterinarias PetFip");
        console.log("1. Menú de Veterinarias");
        console.log("2. Menú de Proveedores");
        console.log("3. Salir");
        this.rl.question("\nIngrese su opción: ", (opcion: string) => {
            switch (opcion) {
                case "1":
                    this.mostrarMenuVeterinarias();
                    break;
                case "2":
                    this.mostrarMenuProveedores();
                    break;
                case "3":
                    console.log("Hasta la proxima!");
                    this.rl.close();
                    break;
                default:
                    console.log("Opción inválida. Intente nuevamente.");
                this.mostrarMenuPrincipal();
            }
        });
    }

    // Menú de Veterinarias
    private mostrarMenuVeterinarias(): void {
        console.log("\nMenú Veterinarias");
        console.log("1. Agregar Veterinaria");
        console.log("2. Eliminar Veterinaria");
        console.log("3. Modificar Veterinaria");
        console.log("4. Ver todas las veterinarias");
        console.log("5. Seleccionar una veterinaria");
        console.log("6. Volver al menú principal");
        this.rl.question("\nIngrese su opción: ", (opcion: string) => {
            switch (opcion) {
                case "1":
                    this.agregarVeterinaria();
                    break;
                case "2":
                    this.eliminarVeterinaria();
                    break;
                case "3":
                    this.modificarVeterinaria();
                    break;
                case "4":
                    this.imprimirListaVeterinarias();
                    break;
                case "5":
                    this.verVeterinariaTal();
                    return;
                case "6":
                    this.mostrarMenuPrincipal();
                    return;
                default:
                    console.log("Opción inválida. Intente nuevamente.");
                this.mostrarMenuVeterinarias();
            }
        });
    }

    // Función para agregar una veterinaria
private agregarVeterinaria(): void {
  this.rl.question('Ingrese el nombre de la veterinaria: ', (nombreVet) => {
      this.rl.question('Ingrese la dirección de la veterinaria: ', (direccionVet) => {
          const veterinaria1 = new Veterinaria(nombreVet, direccionVet);
          this.redVet1.agregarVeterinaria(veterinaria1);
          console.log("Veterinaria agregada:\n" + veterinaria1.getDatosVeterinaria());

          // Solo después de procesar todo correctamente, volvemos al menú
          this.mostrarMenuVeterinarias();
      });
  });
}


    // Función para eliminar una veterinaria
    private eliminarVeterinaria(): void {
        const veterinarias: Veterinaria[] = this.redVet1.getVeterinarias();
        this.rl.question('Ingrese nombre de la veterinaria a eliminar: ', (nombreVet) => {
            const index = veterinarias.findIndex((vet) => vet.getNombreVeterinaria() === nombreVet);
            if (index !== -1) {
                this.rl.question('¿Está seguro de eliminar la veterinaria? (s/n)', (respuesta) => {
                    if (respuesta.toLowerCase() === 's') {
                        veterinarias.splice(index, 1);
                        console.log("Veterinaria Eliminada");
                        this.redVet1.actualizarVeterinarias(veterinarias);
                        this.mostrarMenuVeterinarias();
                    } else {
                        console.log("Operación cancelada");
                        this.mostrarMenuVeterinarias();
                    }
                });
            } else {
                console.log("Veterinaria no encontrada");
                this.mostrarMenuVeterinarias();
            }
        });
    }

    // Función para modificar una veterinaria
    private modificarVeterinaria(): void {
        const veterinarias: Veterinaria[] = this.redVet1.getVeterinarias();
        this.rl.question('Ingrese nombre de la veterinaria a modificar: ', (nombreVet) => {
            const index = veterinarias.findIndex((vet) => vet.getNombreVeterinaria() === nombreVet);
            if (index !== -1) {
                this.rl.question('Ingrese nuevo nombre de la veterinaria: ', (nombreVet1) => {
                    this.rl.question('Ingrese Nueva Direccion Veterinaria: ', (direccionVet1) => {
                        veterinarias[index].setNombreVeterinaria(nombreVet1);
                        veterinarias[index].setDireccion(direccionVet1);
                        this.redVet1.actualizarVeterinarias(veterinarias);
                        console.log("Veterinaria modificada");
                        veterinarias.forEach((vet) => console.log(vet.getDatosVeterinaria()));
                        this.mostrarMenuVeterinarias();
                    });
                });
            } else {
                console.log("Veterinaria no encontrada");
                this.mostrarMenuVeterinarias();
            }
        });
    }

    // Función para imprimir la lista de veterinarias
    private imprimirListaVeterinarias(): void {
        const veterinarias: Veterinaria[] = this.redVet1.getVeterinarias();
        if (veterinarias.length === 0) {
            console.log('No hay veterinarias agregadas');
        } else {
            veterinarias.forEach((veterinaria) => console.log(veterinaria.getDatosVeterinaria()));
        }
        this.mostrarMenuVeterinarias();
    }

    
    // Función para imprimir la lista de veterinarias
    private verVeterinariaTal(): void {

        this.rl.question("Ingresa el ID de la veterinaria: ", (input) => {
            const id = parseInt(input);  // Convertimos la entrada a un número
            if (isNaN(id)) {
              console.log("El ID debe ser un número válido.");
              this.verVeterinariaTal();  // Volver a pedir el ID si no es válido
            } else {
              const veterinaria = this.getVeterinariaPorId(id);
              if (veterinaria) {
                console.log("Veterinaria encontrada:");
                veterinaria.getDatosVeterinaria();
              } else {
                console.log("No se encontró una veterinaria con ese ID.");
              }
              this.rl.close();  // Cerramos la interfaz de readline
            }
          });

    }

    public getVeterinariaPorId(id: number): Veterinaria | undefined {
        const veterinarias: Veterinaria[] = this.redVet1.getVeterinarias();
        return veterinarias.find(veterinaria => veterinaria.getIdVeterinaria() === id);
    }

    // Menú de Proveedores
    private mostrarMenuProveedores(): void {
        console.log("\nMenú Proveedores");
        console.log("1. Agregar Proveedor");
        console.log("2. Eliminar Proveedor");
        console.log("3. Modificar Proveedor");
        console.log("4. Ver todos los Proveedores");
        console.log("5. Volver al menú principal");
        this.rl.question("\nIngrese su opción: ", (opcion: string) => {
            switch (opcion) {
                case "1":
                    this.agregarProveedor();
                    break;
                case "2":
                    this.eliminarProveedor();
                    break;
                case "3":
                    this.modificarProveedor();
                    break;
                case "4":
                    this.imprimirListaProveedores();
                    break;
                case "5":
                    this.mostrarMenuPrincipal();
                    return;
                default:
                    console.log("Opción inválida. Intente nuevamente.");
                this.mostrarMenuProveedores();
            }
        });
    }

    // Función para agregar un proveedor
    private agregarProveedor(): void {
        this.rl.question('Ingrese el nombre del proveedor: ', (nombreProv) => {
            this.rl.question('Ingrese el teléfono del proveedor: ', (telefonoProv) => {
                const telefono = parseInt(telefonoProv);  // Convertir el numero a entero
                this.rl.question('Ingrese la dirección del proveedor: ', (direccionProv) => {
                    const proveedor1 = new Proveedor(nombreProv, telefono, direccionProv);
                    this.redVet1.agregarProveedor(proveedor1);
                    console.log("Proveedor agregado:\n" + proveedor1.getDatosProveedor());
                    this.mostrarMenuProveedores();
                });
            });
        });
    }

    // Función para eliminar un proveedor
    private eliminarProveedor(): void {
        const proveedores: Proveedor[] = this.redVet1.getProveedores();
        this.rl.question('Ingrese el nombre del proveedor a eliminar: ', (nombreProv) => {
            const index = proveedores.findIndex((prov) => prov.getNombreProveedor() === nombreProv);
            if (index !== -1) {
                this.rl.question('¿Está seguro de eliminar el proveedor? (s/n)', (respuesta) => {
                    if (respuesta.toLowerCase() === 's') {
                        proveedores.splice(index, 1);
                        console.log("Proveedor Eliminado");
                        this.redVet1.actualizarProveedores(proveedores);
                        this.mostrarMenuProveedores();
                    } else {
                        console.log("Operación cancelada");
                        this.mostrarMenuProveedores();
                    }
                });
            } else {
                console.log("Proveedor no encontrado");
                this.mostrarMenuProveedores();
            }
        });
    }

    // Función para modificar un proveedor
    private modificarProveedor(): void {
        const proveedores: Proveedor[] = this.redVet1.getProveedores();
        this.rl.question('Ingrese nombre del proveedor a modificar: ', (nombreProv) => {
            const index = proveedores.findIndex((prov) => prov.getNombreProveedor() === nombreProv);
            if (index !== -1) {
                this.rl.question('Ingrese nuevo nombre del proveedor: ', (nombreProv1) => {
                    this.rl.question('Ingrese nueva dirección del proveedor: ', (direccionProv1) => {
                        this.rl.question('Ingrese nuevo teléfono del proveedor: ', (telefonoProv1) => {
                            proveedores[index].setNombreProveedor(nombreProv1);
                            proveedores[index].setDireccion(direccionProv1);
                            proveedores[index].setTelefonoProveedor(parseInt(telefonoProv1));
                            this.redVet1.actualizarProveedores(proveedores);
                            console.log("Proveedor modificado");
                            proveedores.forEach((prov) => console.log(prov.getDatosProveedor()));
                            this.mostrarMenuProveedores();
                        });
                    });
                });
            } else {
                console.log("Proveedor no encontrado");
                this.mostrarMenuProveedores();
            }
        });
    }

    // Función para imprimir la lista de proveedores
    private imprimirListaProveedores(): void {
        const proveedores: Proveedor[] = this.redVet1.getProveedores();
        if (proveedores.length === 0) {
            console.log('No hay proveedores agregados');
        } else {
            proveedores.forEach((proveedor) => console.log(proveedor.getDatosProveedor()));
        }
        this.mostrarMenuProveedores();
    }
}