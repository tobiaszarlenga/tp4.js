class Cuenta{
    constructor(titular){
        this.titular=titular;
        this.saldo=0;
    }
    ingresar(monto){
        this.saldo+=monto;
        document.write(`<p>ingreso: $${monto}</p>`);
    }
    extraer(monto){
        if (this.saldo >= monto){
            this.saldo-=monto;
            document.write(`<p> extraccion de $${this.saldo} </p>`)

        }
        else{
            document.write(`<p> no hay saldo suficiente </p>`)
        }

    }
    informar(){
        document.write(`<p> titular: ${this.titular} </p>`);
        document.write(`<p> saldo: $${this.saldo} </p>`);
    }
}
let cuenta= new Cuenta('Tobias');
cuenta.informar();
cuenta.ingresar(10000);
cuenta.informar();
cuenta.extraer(5500);
cuenta.informar();