class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  mostrarDatos() {
    document.write(
      `${this.nombre} es el nombre: ${this.telefono} es el numero`
    );
  }
  get obtenerNombre() {
    return this.nombre;
  }
  get obtenerTelefono() {
    return this.telefono;
  }
  get obtenerTamanio() {
    return this.tamanio;
  }
  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarTelefono(nuevoTelefono) {
    this.telefono = nuevoTelefono;
  }
  set modificarTamanio(nuevoTamanio) {
    this.tamanio = nuevoTamanio; //
  }
}

class agenda {
  constructor(tamanio) {
    this.contactos = [];
    this.tamanio = tamanio;
  }
  set modificarTamanio(nuevoTamanio) {
    this.tamanio = nuevoTamanio;
  }

  agregarContacto(contacto) {
    if (this.existeContacto(contacto)) {
        console.log("el contacto ya existe no se puede agregar");
  }else{ if(!this.agendaLlena()){
    this.contactos.push(contacto);
    console.log("contacto agregado");
    this.listarContactos();

}
} 
  }



existeContacto(contacto) {
    const exist = this.contactos.find(
      (contactoExistente) => contactoExistente.nombre === contacto.nombre
    );
      if (exist) {
      console.log("El contacto existe");
      return true;
    } else {
      console.log("El contacto no existe");
      return false;
    }
  }
  listarContactos(){
    for (let i = 0; i < this.contactos.length;i++){
        console.log(`Nombre: ${this.contactos[i].obtenerNombre} Telefono: ${this.contactos[i].obtenerTelefono}`)
    }
  }

  buscarContacto(contacto){
    const encontrado = this.contactos.find(
        (existentes) => existentes.nombre === contacto);
        if (encontrado) {
            console.log("contacto encontrado");
        } else { console.log("contacto no encontrado");

    

  }
  }
  eliminarContacto(contacto){
    let contactosFiltrados = this.contactos.filter(
        (contactoExistente) => contactoExistente.nombre != contacto
    );
    this.contactos = contactosFiltrados;
    console.log(`contactos almacenados en la agenda`+ this.contactos)

  }

  agendaLlena(){
    if(this.contactos.length === this.tamanio){
      console.log('la agenda esta llena');
        return true;

    } else{
      console.log('la agneda no esta llena');
        return false;
    }
  }

huecosVacios(){
  let cantidadDeEspacios = this.tamanio - this.contactos.length;
  if (cantidadDeEspacios > 0 ){
    console.log('queda espacios'+ cantidadDeEspacios);
  }else{
    console.log('no quedan espacios');
  }
}
}

let agendaNueva = new agenda(10)

do {
  let opcion = parseInt(prompt(
    `Seleccione una opcion: 
      1- agregar contacto,
      2- consulta si existe un contacto,
      3- listar contactos, 
      4- buscar contacto, 
      5- eliminar contacto
      6- consulta si la agenda esta llena
      7- consultar si la agenda tiene huecos libres
      8- cambiar el tamaño de la agenda`
  )

    
  );
  switch (opcion) {
    case 1:
    agendaNueva.huecosVacios();

    let nombre = prompt("ingrese un nomnbre");
    let telefono = parseInt(prompt("ingrese un telefono"));
    let contacto1 = new Contacto (nombre, telefono);
    agendaNueva.agregarContacto(contacto1);
    break;



    case 2:
      let nombreBuscado = prompt("ingrese el contacto que desea buscar");
      let contacto = new Contacto(nombreBuscado, 0);
      agendaNueva.existeContacto(contacto);

      break;
    case 3:
      agendaNueva.listarContactos();
      break;
    case 4:
      let contactoBuscado = prompt("ingrese el contacto que desea buscar");
      agendaNueva.buscarContacto(contactoBuscado); break;
      case 5:
        let contactoEliminar = prompt("ingrese el contacto que desea eliminar");
        agendaNueva.eliminarContacto(contactoEliminar);
        break;
    case 6:
      agendaNueva.agendaLlena();
      break;
    case 7:
      agendaNueva.huecosVacios();
      break;
    case 8:
      let nuevoTamanio = parseInt(prompt("ingrese el nuevo tamaño de la agenda"));
      agendaNueva.modificarTamanio(nuevoTamanio);
      break;
    default:
      console.log("opcion no valida");
      break;
  }
   
 
} while (confirm("quiere realizar otra operacion?"))