class Producto {
  constructor(nombre, precio, codigo) {
    this.nombre = nombre;
    this.precio = precio;
    this.codigo = codigo;
  }

  mostrarDetalle() {
    return document.write(
      `<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Precio: ${this.precio}</li>
            <li>Codigo: ${this.codigo}</li>


            </ul>
            
            `
    );
  }
}

let productos = []; //array de los productos

let leche = new Producto("milk", 2000, "d43886");
let coca = new Producto("cola", 1000, "d4776");
let sanguche = new Producto("chegu", 2000, "d40036");

productos.push(leche);

productos.push(coca);

productos.push(sanguche);

for (let i = 0; i < productos.length; i++) {
  productos[i].mostrarDetalle();
}
