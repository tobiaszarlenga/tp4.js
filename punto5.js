// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
class Persona {
    constructor(nombre, edad, DNI, sexo, peso, fechaNacimiento, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.fechaNacimiento = fechaNacimiento;
        this.altura = altura;


    }

    mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo){
        return `<ul>
                        <li>Generacion: <strong>${generacion} </strong></li>
                        <li>Marco temporal: <strong>${marcoTemporal}</strong></li>
                        <li>Historia: <strong>${historia}</strong></li>
                        <li>Rasgo: <strong>${rasgo}</strong></li>
        </ul>`;
        
        
    }
    mostrarGeneracion(){
        if (this.fechaNacimiento >=1930 && this.fechaNacimiento <= 1948){
            return this.mostrarDetalleGeneracion(
                "Silent Generation",
        "1930-1948",
        "Conflictos bélicos",
        "Austeridad 😐"
            )
        } else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968){
            return this.mostrarDetalleGeneracion(
                "baby Boom",
                "1949-1968",
                "Paz y explosión demográfica",
                "Ambicion 🤑"
              );
            } else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento < 1980) {
              return this.mostrarDetalleGeneracion(
                "Generación X",
                "1969 - 1980",
                "Crisis del 73 y transición española",
                "Obsesión por el exito 😎"
              );
            } else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento < 1993) {
              return this.mostrarDetalleGeneracion(
                "Generación Y (Millenials)",
                "1981 - 1993",
                "Inicio de la digitalización",
                "Frustración 😕"
              );
            } else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento < 2010) {
              return this.mostrarDetalleGeneracion(
                "Generación Z (Centennials)",
                "1994 - 2010",
                "Expansión masiva de internet",
                "Irreverencia 😋"
              );
            } else if (this.fechaNacimiento >= 2011) {
              return this.mostrarDetalleGeneracion(
                "Generación Alfa",
                "2011 - Actualidad",
                "Nativos Digitales al 100%",
                "Son predilectos 😜"
              );
            } else {
              return '<p>No se posee datos para la fecha seleccionada</p>';
            }
          }   
          esMayorDeEdad(){
            if (this.edad >= 18){
                return true;
            } else {
                return false;

  
          }
        }
          mostrarDatos(){
           return` <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Edad: ${this.edad}</li>
            <li>DNI: ${this.DNI}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso}</li>   
            <li>Altura: ${this.altura}</li>
            <li>Fecha de nacimiento: ${this.fechaNacimiento}</li>
            


            </ul>
         `; }
         generaDNI() {
            return parseInt(Math.random()* 99999999);}

    

                
        
    

}

let nombre = prompt("ingrese el nombre");
let edad = parseInt(prompt("ingrese el edad"));
let DNI = parseInt(prompt("ingrese el dni"));
let sexo = prompt("ingrese el sexo");
let peso = parseFloat(prompt("ingrese el peso"));
let fechaNac = parseInt(prompt("ingrese el fecha nacimiento"));
let altura = parseFloat(prompt("ingrese su altura"));

let persona1 = new Persona(nombre, edad, DNI, sexo, peso, fechaNac, altura);

document.write(persona1.mostrarDatos());
document.write(
  `<p>La persona es mayor de edad: ${
    persona1.esMayorDeEdad ? "Si" : "No"
  }</p>`
);
document.write(persona1.mostrarGeneracion());
document.write(persona1.generaDNI());