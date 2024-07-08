class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    static saludar(persona) {
        return `Hola, ¿cómo estás ${persona.nombre}?`;
    }

    static esMayorDeEdad(edad){
        if(edad >= 18){
            return 'True';
        } else{
            return 'False';
        }
    }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Guillermo", 19, "M");

const mayorDeEdad = Persona.esMayorDeEdad(persona1.edad);
console.log(`Es ${persona1.nombre} mayor de edad? ${mayorDeEdad}`);

// document.querySelector("#saludo").innerHTML = /*html*/`
//     <h1>Nombre: <span>${Persona.saludar(persona1)}</span></h1>
    
// `;

class Estudiante extends Persona{
    carrera;
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    static estudiar(estudiante){
        return `${estudiante.carrera}`;
    }
}

// Instancia de la clase estudiante
const estudiante1 = new Estudiante("Guillermo", 19, "M", "Desarrollador de Software")

// document.querySelector("#saludo").innerHTML = /*html*/`
//     <h1>Nombre: <span>${Persona.saludar(estudiante1)}</span></h1>
//     <h2>Carrera: <span>${Estudiante.estudiar(estudiante1)}</span></h2>
//     <h3>Mayor de Edad: <span>${Persona.esMayorDeEdad(persona1.edad)}</span></h3>
//     `;

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    static hacerSonido(sonido){
        return `Guau Guau`;
    }
}

// Crear una instancia para Animal
const animal1 = new Animal("Doky", 14);

// document.querySelector("#saludo").innerHTML = /*html*/ `
//     <h4>Nombre: <span>${animal1.nombre}</span></h4>
//     <h4>Sonido: <span>${Animal.hacerSonido(animal1, "Guau Guau")}</span></h4>
//     <h4>Estado: <span>${Animal.moverCola(animal1)}</span></h4>
// `;

class Perro extends Animal{
    raza;
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this.raza = raza;
    }

    static moverCola(perro){
        return `El perro esta moviendo la cola`;
    }
}

// document.querySelector("#saludo").innerHTML = /*html*/ `
//     <h4>Nombre: <span>${animal1.nombre}</span></h4>
//     <h4>Sonido: <span>${Animal.hacerSonido(animal1)}</span></h4>
//     <h4>Estado: <span>${Perro.moverCola(animal1)}</span></h4>
// `;


class Figura {
    constructor(color, area){
        this.color = color;
        this.area = area;
    }

    static calcularArea(figura){
        return `Area: ${figura.area}`;
    }
}

//Crear una instancia para mi figurea
const figura1 = new Figura ("Azul", 24);

// document.querySelector("#saludo").innerHTML = /*html*/ `
//     <h5>Figura: <span>${figura1.color}</span></h5>
//     <h5><span>${Figura.calcularArea(figura1)}</span></h5>
// `;

class Circulo extends Figura {
    radio;
    constructor(color, area, radio) {
        super(color, area);
        this.radio = radio;
    }

    static calcularArea(circulo){
        const area = Math.PI * circulo.radio **2;
        return `Area del Circulo: ${area.toFixed(2)}`;
    }
}

//Instancia para circulo
const circulo1 = new Circulo ("Yellow",0, 8);

// document.querySelector("#saludo").innerHTML = /*html*/ `
//     <h5>Figura: <span>${figura1.color}</span></h5>
//     <h5><span>${Figura.calcularArea(figura1)}</span></h5>
//     <h5><span>${Circulo.calcularArea(circulo1)}</span></h5>
// `;

class Rectangulo extends Figura {
    largo;
    ancho;
    constructor(color, area, largo, ancho) {
        super(color, area);
        this.largo = largo;
        this.ancho = ancho;
    }

    static calcularArea(rectangulo){
        const area = rectangulo.largo * rectangulo.ancho;
        return `Área del Rectángulo: ${area}`;
    }
}

//Instancia para Rectangulo
const rectangulo1 = new Rectangulo ("Green", null, 7, 3);

// document.querySelector("#saludo").innerHTML = /*html*/ `
//     <h5>Figura: <span>${figura1.color}</span></h5>
//     <h5><span>${Figura.calcularArea(figura1)}</span></h5>
//     <h5><span>${Rectangulo.calcularArea(rectangulo1)}</span></h5>
// `;

class Vehiculo {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar() {
        this.velocidad += 10;
        return this.velocidad;
    }

    static convertirKmHEnMph(velocidadKmH) {
        // Divide la velocidad en km por hora entre 1.60934
        return velocidadKmH / 1.60934;
    }
}

// Crear una instancia para vehiculo
const vehiculo1 = new Vehiculo("Chevrolet", "Camaro Z-10", 150);
vehiculo1.acelerar();

class Coche extends Vehiculo {
    constructor(marca, modelo, velocidad, combustible) {
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }

    acelerar() {
        this.velocidad += 20;
        return this.velocidad;
    }
}

// Instancia para coche
const coche1 = new Coche("Lamborghini", "Huracan", 250, "Gasolina");
coche1.acelerar();

// Convertir la velocidad del coche a mph
const velocidadMph = Vehiculo.convertirKmHEnMph(coche1.velocidad).toFixed(2);

// document.querySelector("#saludo").innerHTML = `
//     <h5>Marca del Vehiculo: <span>${coche1.marca}</span></h5>
//     <h5>Modelo: <span>${coche1.modelo}</span></h5>
//     <h5>Velocidad: <span>${coche1.velocidad} km/h</span></h5>
//     <h5>Velocidad en Mph: <span>${velocidadMph} mph</span></h5>
//     <h5>Combustible Disponible: <span>${coche1.combustible}</span></h5>
// `;

class Empleado {
    constructor(nombre, edad, sueldo){
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.id = Empleado.generaldEmpleado();
    }

    calcularSalarioAnual(){
        // Retornar salario anual del empleado (multiplicamos el sueldo mensual por 12)
        return this.sueldo * 12;
    }

    static generaldEmpleado(){
        //retorna un id unico para cada empleado, usar var estatica par incrementar el id cada vez q se cree una instancia de empleado
        if (!this.proximoId) {
            this.proximoId = 1; // Inicializar el contador estático si no existe
        } else {
            this.proximoId++; // Incrementar el contador estático
        }
        return this.proximoId;
    }
}

// Instancia para Empleado
const empleado1 = new Empleado("Albert", 24, 1200000);
const salarioAnual = empleado1.calcularSalarioAnual();

// document.querySelector("#saludo").innerHTML = `
//     <h5>Nombre: <span>${empleado1.nombre}</span></h5>
//     <h5>Edad: <span>${empleado1.edad}</span></h5>
//     <h5>Salario Anual: <span>${salarioAnual}</span></h5>
// `;

class Gerente extends Empleado {
    constructor(nombre, edad, sueldo, departamento){
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }

    calcularSalarioAnualConBono(){
        // Calcular salario anual con bono del 10%
        const salarioConBono = this.sueldo * 1.1;
        const salarioAnual = salarioConBono * 12;

        // Formatear el salario anual para que sea más entendible
        const salariototal = salarioAnual.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        
        return salariototal;
    }
}
// Instancia para Gerente con salario inicial de 1400000
const gerente1 = new Gerente("Alejo", 26, 1400000, "Ventas");
const salarioAnualGerenteConBono = gerente1.calcularSalarioAnualConBono();

document.querySelector("#saludo").innerHTML = `
    <h5>Nombre: <span>${gerente1.nombre}</span></h5>
    <h5>Edad: <span>${gerente1.edad}</span></h5>
    <h5>Salario Anual con Bono: <span>${salarioAnualGerenteConBono} COP</span></h5>
    <h5>Departamento: <span>${gerente1.departamento}</span></h5>
    <h5>Id: <span>${gerente1.id}</span></h5>
`;
