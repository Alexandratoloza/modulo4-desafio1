


function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico

    this.saludar = function(){
        return `${this.nombre} dice hola`
    }
}


    const paciente1 = new Paciente("Alexandra", "31", "1555555-4", "sano")
    
    const paciente2 = new Paciente("Alex", "25", "1555555-4", "sano")
    
    const paciente3 = new Paciente("Paola", "38", "1555555-4", "sano")
  
    console.log(paciente1)
    console.log(paciente2)
    console.log(paciente3)


// Definición del constructor de pacientes

    function Paciente() {
    this.listaPacientes = []; // Array para almacenar los datos de los pacientes
  }
  // Método para agregar un nuevo paciente
  Paciente.prototype.agregarPaciente = function(paciente) {
    this.listaPacientes.push(paciente);
  };
  
  // Método para buscar pacientes por nombre
  Paciente.prototype.buscarPacientePorNombre = function(nombre) {
    const pacientesEncontrados = [];
    for (let paciente of this.listaPacientes) {
      if (paciente.nombre === nombre) {
        pacientesEncontrados.push(paciente);
      }
    }
    return pacientesEncontrados;
  };
  
  // Método para mostrar todos los pacientes registrados
  Paciente.prototype.mostrarPacientesRegistrados = function() {
    return this.listaPacientes;
  };
  
  // Ejemplo de uso
  const paciente = new Paciente();
  
  // Agregamos algunos pacientes de ejemplo
  paciente.agregarPaciente({ nombre: 'Juan', edad: 30, rut:'12.254.568-9', diagnostico: '- ' });
  paciente.agregarPaciente({ nombre: 'María', edad: 25, rut:'12.254.568-9', diagnostico:'- ' });
  paciente.agregarPaciente({ nombre: 'Pedro', edad: 35, rut:'12.254.568-9', diagnostico: '- ' });
  
  // Buscar paciente por nombre
  const pacienteJuan = paciente.buscarPacientePorNombre('Juan');
  console.log('Pacientes con nombre "Juan":', pacienteJuan);
  
  // Mostrar todos los pacientes registrados
  const todosLosPaciente = paciente.mostrarPacientesRegistrados();
  console.log('Todos los pacientes registrados:', todosLosPaciente);
  