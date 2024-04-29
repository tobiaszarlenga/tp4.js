let auto = {
    color :" rojo",
    marca : " Toyota",
    modelo : " Corolla",
    motor: false,
    encenderAuto(){
        this.motor=true;
    },
    apagarAuto(){
        this.motor=false;
    }
}
document.write('<br>color del auto'+auto.color);
document.write('<br>marca del auto'+auto.marca);
document.write('<br>modelo del auto'+auto.modelo);
document.write('<br>estado del motor'+((auto.motor)?' Encendido':' Apagado'));

auto.encenderAuto();{
    document.write('<br>estado del motor'+((auto.motor)?' Encendido':' Apagado'));
}

auto.apagarAuto();{
    document.write('<br> estado del motor '+ ((auto.motor)?'encendido':'apagado'))
}