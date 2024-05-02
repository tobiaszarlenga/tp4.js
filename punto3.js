class Rectangulo {
    constructor(lado1, lado2){
        this.alto = lado1;
        this.ancho = lado2;
    }
    set cambiarAltura(nuevaAltura){
        this.alto = nuevaAltura;
    }
    set cambiarAncho(nuevaAncho){
        this.ancho = nuevaAncho;
    }
    get altoRectangulo(){
        return this.alto;
    }
    get anchoRectangulo(){
        return this.ancho;
    }
    get area() {
        return this.alto * this.ancho;
    }
    get perimetro() {
        return 2 * (this.alto + this.ancho);
    }
    detalle() {
        return `<p>el rectangulo tiene una altura de ${this.altoRectangulo}cm y un ancho de ${this.anchoRectangulo}cm</p>`
}
}
let rectangulo1 = new Rectangulo(10, 9);
document.write(`<h2>Primer rectangulo</h2>`);
document.write(rectangulo1.detalle());
document.write(`el area del rectangulo es ${rectangulo1.area} cm cuadrado y su permietro es de ${rectangulo1.perimetro}`);

rectangulo1.cambiarAltura = 15;
rectangulo1.cambiarAncho = 20;
document.write(`<h3>modificar el rectangulo</h3>`)
document.write(rectangulo1.detalle());
document.write(`el area del rectangulo es de ${rectangulo1.area}cm cuadrados y su perimetro es de |${rectangulo1.perimetro}`)   

let rectangulo2 = new Rectangulo(5, 15)

document.write(`<h2>Segundo rectangulo</h2>`);
document.write(rectangulo2.detalle());
document.write(`el area del rectangulo es de ${rectangulo2.area}cm cuadrado y su perimetro es de |${rectangulo2.perimetro}cm`) 

rectangulo2.cambiarAltura = 10;
rectangulo2.cambiarAncho = 30;
document.write(`<h3>rectangulo 2 modificado</h3>`);
document.write(rectangulo2.detalle());
document.write(`el area del rectangulo es de ${rectangulo2.area} y su perimetro es de ${rectangulo2.perimetro}`);