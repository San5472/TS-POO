class Medidas {
    protected alto: number
    protected ancho: number

    constructor(alto: number, ancho: number){
        this.alto = alto
        this.ancho = ancho
    }

    aerea(): number {
        return this.alto * this.ancho
    }
}

class Rectangulo extends Medidas {}

const medirRectangulo = new Rectangulo(20, 4)
console.log(medirRectangulo.aerea())

class Triangulo extends Medidas{}
const trianguloMedidas = new Triangulo(80, 120)

console.log(trianguloMedidas.aerea());
