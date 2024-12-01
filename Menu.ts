import * as readline from "readline";
import { Veterinaria } from './Veterinaria';
import { RedVeterinaria } from './RedVeterinaria';
import { Proveedor } from './Proveedor';
import { Cliente } from './Cliente';
import { Paciente } from './Paciente';

export class Menu {
    private clientes: Cliente[];
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    constructor() {
        this.clientes = [];
    }

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
                    this.seleccionarveterinaria();
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
            // Validar si ya existe una veterinaria con el mismo nombre y dirección
            if (this.redVet1.existeVeterinaria(nombreVet, direccionVet)) {
                console.log(`Ya existe una veterinaria con el nombre "${nombreVet}" y la dirección "${direccionVet}".`);
                this.rl.question('¿Desea intentar nuevamente? (sí/no): ', (respuesta) => {
                    if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {                        
                        this.agregarVeterinaria();
                    } else {
                        this.mostrarMenuVeterinarias();
                    }
                });
                return; // Salimos de la función para evitar agregar duplicados
            }

            // Generar un ID único para la nueva veterinaria
            const idVeterinaria = Veterinaria.generarIdUnico(this.redVet1.getVeterinarias());
            
            // Crear y agregar la nueva veterinaria
            const nuevaVeterinaria = new Veterinaria(idVeterinaria, nombreVet, direccionVet);
            this.redVet1.agregarVeterinaria(nuevaVeterinaria);
            console.log("Veterinaria agregada con éxito:\n" + nuevaVeterinaria.getDatosVeterinaria());

            this.mostrarMenuVeterinarias();
        });
    });
}



    // Función para eliminar una veterinaria
    private eliminarVeterinaria(): void {
        const veterinarias: Veterinaria[] = this.redVet1.getVeterinarias();
        this.rl.question('Ingrese el id de la veterinaria a eliminar: ', (idVeterinaria) => {
            const index = veterinarias.findIndex((vet) => vet.getIdVeterinaria() === Number(idVeterinaria));
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
        this.rl.question('Ingrese el id de la veterinaria a modificar: ', (idVeterinaria) => {
            const index = veterinarias.findIndex((vet) => vet.getIdVeterinaria() === Number(idVeterinaria));
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

    // Función para obtener un cliente por su ID
        public obtenerClientePorId(id: number): Cliente | null {
            return this.clientes.find(cliente => cliente.getIdCliente() === id) || null;
}

    
    // Función para trabajar con una veterinaria por ID
    private seleccionarveterinaria(): void {
        this.rl.question("Ingresa el ID de la veterinaria: ", (input) => {
            const id = parseInt(input);
            if (isNaN(id)) {
                console.log("El ID debe ser un número válido.");
                this.seleccionarveterinaria(); 
            } else {
                const veterinaria = this.getVeterinariaPorId(id);
                if (veterinaria) {
                    console.log("Veterinaria encontrada:");
                    console.log(veterinaria.getDatosVeterinaria());
                    
                    this.mostrarMenuVeterinariaSeleccionada(veterinaria);
                } else {
                    console.log("No se ha encontrado una veterinaria con ese ID.");
                    this.rl.question('¿Quiere agregar otro ID de veterinaria? (sí/no): ', (respuesta) => {
                        if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
                            this.seleccionarveterinaria();
                        } else {
                            console.log("Volver a menú veterinaria");
                            this.mostrarMenuVeterinarias();
                        }
                    });
                }
            }
        });
    }

     // Menú de opciones al seleccionar una veterinaria
     private mostrarMenuVeterinariaSeleccionada(veterinaria: Veterinaria): void {
        console.log("\nMenú de Veterinaria seleccionada");
        console.log("1. Gestionar Clientes");
        console.log("2. Gestionar Pacientes");
        console.log("3. Volver al menú anterior");
        this.rl.question("\nIngrese su opción: ", (opcion: string) => {
            switch (opcion) {
                case "1":
                    this.gestionarClientes(veterinaria);
                    break;
                case "2":
                    this.gestionarPacientes(veterinaria);
                    break;
                case "3":
                    this.mostrarMenuVeterinarias();
                    break;
                default:
                    console.log("Opción inválida.");
                    this.mostrarMenuVeterinariaSeleccionada(veterinaria);
            }
        });
    }

    // Función para gestionar clientes
private gestionarClientes(veterinaria: Veterinaria): void {
    console.log("\nMenú de Clientes");
    console.log("1. Agregar Cliente");
    console.log("2. Eliminar Cliente");
    console.log("3. Modificar Cliente");
    console.log("4. Ver todos los Clientes");
    console.log("5. Registrar nueva visita");
    console.log("6. Volver al menú de Veterinaria");
    this.rl.question("\nIngrese su opción: ", (opcion: string) => {
        switch (opcion) {
            case "1":
                this.agregarCliente(veterinaria);
                break;
            case "2":
                this.eliminarCliente(veterinaria);
                break;
            case "3":
                this.modificarCliente(veterinaria);
                break;
            case "4":
                this.verClientes(veterinaria);
                break;
            case "5":
                this.registrarNuevaVisita(veterinaria);
                break;
            case "6":
                this.mostrarMenuVeterinariaSeleccionada(veterinaria);
                break;
            default:
                console.log("Opción inválida.");
                this.gestionarClientes(veterinaria);
        }
    });
}


private agregarCliente(veterinaria: Veterinaria): void {
    this.rl.question('Ingrese nombre del cliente: ', (nombreCliente) => {
        this.rl.question('Ingrese teléfono del cliente: ', (telefonoCliente) => {
            const telefonoNumero = Number(telefonoCliente);

            if (isNaN(telefonoNumero)) {
                console.log("El teléfono ingresado no es válido.");
                this.agregarCliente(veterinaria);
                return;
            }

            // Verificar si ya existe un cliente con el mismo nombre y teléfono
            const clienteExistente = veterinaria.getClientes().find(cliente =>
                cliente.getNombre() === nombreCliente && cliente.getTelefono() === telefonoNumero
            );

            if (clienteExistente) {
                console.log(`Ya existe un cliente con el nombre "${nombreCliente}" y teléfono "${telefonoCliente}".`);
                this.rl.question('¿Desea registrar una nueva visita para este cliente? (sí/no): ', (respuesta) => {
                    if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
                        clienteExistente.registrarVisita();
                        console.log(`Visita registrada con éxito para el cliente ${clienteExistente.getNombre()}.`);
                    } else {
                        console.log("No se registró ninguna visita.");
                    }
                    this.gestionarClientes(veterinaria);
                });
                return;
            }

            // Generar un ID único para el nuevo cliente
            let idCliente = Cliente.generarIdUnico(veterinaria.getClientes());
            while (veterinaria.obtenerClientePorId(idCliente)) {
                console.log(`El ID generado (${idCliente}) ya existe. Generando un nuevo ID...`);
                idCliente = Cliente.generarIdUnico(veterinaria.getClientes());
            }

            // Crear y agregar al nuevo cliente
            const cliente = new Cliente(idCliente, nombreCliente, telefonoNumero);
            veterinaria.agregarCliente(cliente);
            console.log(`Cliente agregado con éxito: \n${cliente.getDatosCliente()}`);
            this.gestionarClientes(veterinaria);
        });
    });
}

    // Función para eliminar un cliente
    private eliminarCliente(veterinaria: Veterinaria): void {
        this.rl.question('Ingrese el id del cliente a eliminar: ', (idCliente) => {
            const cliente = veterinaria.obtenerClientePorId (Number(idCliente));
            if (cliente) {
                veterinaria.eliminarCliente(cliente);
                console.log("Cliente eliminado.");
                this.gestionarClientes(veterinaria);
            } else {
                console.log("Cliente no encontrado.");
                this.gestionarClientes(veterinaria);
            }
        });
    }

    // Función para modificar un cliente
    private modificarCliente(veterinaria: Veterinaria): void {
        this.rl.question('Ingrese el id del cliente a modificar: ', (idCliente) => {
            const cliente = veterinaria.obtenerClientePorId(Number(idCliente));
            if (cliente) {
                this.rl.question('Ingrese nuevo nombre del cliente: ', (nuevoNombre) => {
                    this.rl.question('Ingrese nuevo teléfono del cliente: ', (nuevoTelefono) => {
                       
                        const telefonoNumero = parseInt(nuevoTelefono);
                        
                        if (isNaN(telefonoNumero)) {
                            console.log("El teléfono ingresado no es válido.");
                            this.modificarCliente(veterinaria);
                        } else {
                            cliente.setNombre(nuevoNombre);
                            cliente.setTelefono(telefonoNumero);
                            console.log("Cliente modificado.");
                            this.gestionarClientes(veterinaria);
                        }
                    });
                });
            } else {
                console.log("Cliente no encontrado.");
                this.gestionarClientes(veterinaria);
            }
        });
    }

    // Función para ver todos los clientes
    private verClientes(veterinaria: Veterinaria): void {
        const clientes = veterinaria.getClientes();
        if (clientes.length === 0) {
            console.log("No hay clientes registrados.");
        } else {
            clientes.forEach(cliente => console.log(cliente.getDatosCliente()));
        }
        this.gestionarClientes(veterinaria);
    }

    // Función para registrar nueva visita
private registrarNuevaVisita(veterinaria: Veterinaria): void {
    this.rl.question("\nIngrese el ID del cliente para registrar la nueva visita: ", (idCliente: string) => {
        const cliente = veterinaria.obtenerClientePorId(Number(idCliente)); 
        if (cliente) {
            cliente.registrarVisita();  
            console.log(`Visita registrada con éxito para el cliente ${cliente.getNombre()}.`);
            console.log(cliente.getDatosCliente());
        } else {
            console.log("Cliente no encontrado.");
        }
        this.gestionarClientes(veterinaria);
    });
}

    // Función para gestionar pacientes
    private gestionarPacientes(veterinaria: Veterinaria): void {
        console.log("\nMenú de Pacientes");
        console.log("1. Agregar Paciente");
        console.log("2. Eliminar Paciente");
        console.log("3. Ver todos los Pacientes");
        console.log("4. Volver al menú de Veterinaria");
        this.rl.question("\nIngrese su opción: ", (opcion: string) => {
            switch (opcion) {
                case "1":
                    this.agregarPaciente(veterinaria);
                    break;
                case "2":
                    this.eliminarPaciente(veterinaria);
                    break;
                case "3":
                    this.verPacientes(veterinaria);
                    break;
                case "4":
                    this.mostrarMenuVeterinariaSeleccionada(veterinaria);
                    break;
                default:
                    console.log("Opción inválida.");
                    this.gestionarPacientes(veterinaria);
            }
        });
    }

    // Función para agregar un paciente
    private agregarPaciente(veterinaria: Veterinaria): void {
        this.rl.question('Ingrese nombre del paciente: ', (nombrePaciente) => {
            this.pedirEspeciePaciente((especiePaciente) => {
                // Preguntar si el cliente está registrado
                this.rl.question('¿El dueño ya está registrado? (sí/no): ', (respuesta) => {
                    if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
                        // Si el cliente está registrado, pedir el ID
                        this.rl.question('Ingrese ID del dueño (cliente) del paciente: ', (idDueño) => {
                            const idCliente = parseInt(idDueño, 10);
    
                            // Verificar si el cliente existe
                            const cliente = veterinaria.obtenerClientePorId(idCliente);
    
                            if (cliente) {
                                // Si el cliente existe, generar un ID único para el paciente y crear el paciente
                                const idMascota = Paciente.generarIdUnico(veterinaria.getPacientes());
                                const paciente = new Paciente(idMascota, idCliente, nombrePaciente, especiePaciente);
                                veterinaria.agregarPaciente(paciente, cliente);
                                console.log("Paciente agregado: " + paciente.getDatosPaciente());
                            } else {
                                console.log("El cliente no existe. Por favor, registre al cliente.");
                                this.agregarClienteYPaciente(veterinaria, nombrePaciente, especiePaciente);
                                return;
                            }
    
                            this.gestionarPacientes(veterinaria);
                        });
                    } else {
                        // Si el cliente no está registrado, crear uno nuevo
                        this.agregarClienteYPaciente(veterinaria, nombrePaciente, especiePaciente);
                    }
                });
            });
        });
    }

    // Función para agregar un nuevo cliente y paciente
    private agregarClienteYPaciente(veterinaria: Veterinaria, nombrePaciente: string, especiePaciente: string): void {
        // No pedimos el ID del cliente, ya que lo vamos a generar automáticamente
        this.rl.question('Ingrese nombre del cliente: ', (nombreCliente) => {
            this.rl.question('Ingrese teléfono del cliente: ', (telefonoCliente) => {
                // Generar un ID único para el cliente
                const idCliente = Cliente.generarIdUnico(veterinaria.getClientes()); // Generamos un nuevo ID basado en los clientes existentes
                // Crear nuevo cliente con nombre y teléfono
                const cliente = new Cliente(idCliente, nombreCliente, Number(telefonoCliente));
    
                // Agregar cliente a la veterinaria
                veterinaria.agregarCliente(cliente);
    
                // Crear paciente
                const idMascota = Paciente.generarIdUnico(veterinaria.getPacientes());
                const paciente = new Paciente(idMascota, idCliente, nombrePaciente, especiePaciente);
                veterinaria.agregarPaciente(paciente, cliente);
    
                console.log("Cliente y paciente agregados: " + paciente.getDatosPaciente());
                this.gestionarPacientes(veterinaria);
            });
        });
    }

    // Función para pedir la especie y registrar según lo ingresado
private pedirEspeciePaciente(callback: (especie: string) => void): void {
    this.rl.question('Ingrese especie del paciente: ', (especiePaciente) => {
        let especie: string;

        // Clasificar la especie
        if (especiePaciente.toLowerCase() === "perro" || especiePaciente.toLowerCase() === "gato") {
            especie = especiePaciente;
        } else {
            especie = "exotico"; // Registrar como "exotico" si no es "perro" o "gato"
        }

        callback(especie);
    });
}




    // Función para eliminar un paciente
    private eliminarPaciente(veterinaria: Veterinaria): void {
        this.rl.question('Ingrese el id del paciente a eliminar: ', (idPaciente) => {
            const paciente = veterinaria.getPacientePorId(Number(idPaciente));
            if (paciente) {
                veterinaria.eliminarPaciente(paciente);
                console.log("Paciente eliminado.");
                this.gestionarPacientes(veterinaria);
            } else {
                console.log("Paciente no encontrado.");
                this.gestionarPacientes(veterinaria);
            }
        });
    }

    // Función para ver todos los pacientes
    private verPacientes(veterinaria: Veterinaria): void {
        const pacientes = veterinaria.getPacientes();
        if (pacientes.length === 0) {
            console.log("No hay pacientes registrados.");
        } else {
            pacientes.forEach(paciente => console.log(paciente.getDatosPaciente()));
        }
        this.gestionarPacientes(veterinaria);
    }

    // Funcion para obtener la veterinaria por ID
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
        })
    };

    private agregarProveedor(): void {
        this.rl.question('Ingrese el nombre del proveedor: ', (nombreProv) => {
            this.rl.question('Ingrese el teléfono del proveedor: ', (telefonoProv) => {
                const telefono = parseInt(telefonoProv);
                this.rl.question('Ingrese la dirección del proveedor: ', (direccionProv) => {
                    if (this.redVet1.existeProveedor(nombreProv, telefono, direccionProv)) {
                        console.log("Ya existe un proveedor con el mismo nombre, teléfono y dirección.");
                        this.rl.question('¿Desea agregar otro proveedor? (sí/no): ', (respuesta) => {
                            if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {                                
                                this.agregarProveedor();
                            } else {
                                this.mostrarMenuProveedores();
                            }
                        });
                    } else {
                        const idUnico = Proveedor.generarIdUnico(this.redVet1.getProveedores());
                        const proveedor1 = new Proveedor(idUnico, nombreProv, telefono, direccionProv);
                        this.redVet1.agregarProveedor(proveedor1);
                        console.log("Proveedor agregado:\n" + proveedor1.getDatosProveedor());
                        this.mostrarMenuProveedores();
                    }
                });
            });
        });
    }
    
    // Función para eliminar un proveedor
    private eliminarProveedor(): void {
        const proveedores: Proveedor[] = this.redVet1.getProveedores();
        this.rl.question('Ingrese el id del proveedor a eliminar: ', (idProveedor) => {
            const index = proveedores.findIndex((prov) => prov.getIdProveedor() === Number(idProveedor));
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
        this.rl.question('Ingrese el id del proveedor a modificar: ', (idProveedor) => {
            const index = proveedores.findIndex((prov) => prov.getIdProveedor() === Number(idProveedor));
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