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
        return edad >= 18;
    }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Guillermo", 19, "M");

const mayorDeEdad = Persona.esMayorDeEdad(persona1.edad);
console.log(`Es ${persona1.nombre} mayor de edad? ${mayorDeEdad}`);

document.querySelector("#saludo").innerHTML += /*html*/ `
    <h1>Persona:</h1>
    <h5>Nombre: <span>${persona1.nombre}</span></h5>
    <h5>Edad: <span>${persona1.edad}</span></h5>
    <h5>Sexo: <span>${persona1.sexo}</span></h5>
    <h5>Saludo: <span>${Persona.saludar(persona1)}</span></h5>
    <h5>¿Es mayor de edad?: <span>${mayorDeEdad}</span></h5>
`;

class Estudiante extends Persona{
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    static estudiar(estudiante){
        return `${estudiante.carrera}`;
    }
}

// Instancia de la clase estudiante
const estudiante1 = new Estudiante("Guillermo", 19, "M", "Desarrollador de Software");

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Estudiante:</h1>
    <h5>Nombre: <span>${estudiante1.nombre}</span></h5>
    <h5>Edad: <span>${estudiante1.edad}</span></h5>
    <h5>Sexo: <span>${estudiante1.sexo}</span></h5>
    <h5>Carrera: <span>${Estudiante.estudiar(estudiante1)}</span></h5>
`;

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    static hacerSonido(sonido){
        return sonido;
    }
}

// Crear una instancia para Animal
const animal1 = new Animal("Doky", 14);

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Animal:</h1>
    <h5>Nombre: <span>${animal1.nombre}</span></h5>
    <h5>Edad: <span>${animal1.edad}</span></h5>
    <h5>Sonido: <span>${Animal.hacerSonido("Guau Guau")}</span></h5>
`;

class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this.raza = raza;
    }

    static moverCola(perro){
        return `El perro ${perro.nombre} está moviendo la cola`;
    }
}

// Instancia para Perro
const perro1 = new Perro("Doky", 14, "Clasific");

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Perro:</h1>
    <h5>Nombre: <span>${perro1.nombre}</span></h5>
    <h5>Edad: <span>${perro1.edad}</span></h5>
    <h5>Raza: <span>${perro1.raza}</span></h5>
    <h5>Estado: <span>${Perro.moverCola(perro1)}</span></h5>
`;

class Figura {
    constructor(color, area){
        this.color = color;
        this.area = area;
    }

    static calcularArea(figura){
        return `Área: ${figura.area}`;
    }
}

// Crear una instancia para Figura
const figura1 = new Figura("Azul", 24);

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Figura:</h1>
    <h5>Color: <span>${figura1.color}</span></h5>
    <h5>Área: <span>${Figura.calcularArea(figura1)}</span></h5>
`;

class Circulo extends Figura {
    constructor(color, area, radio) {
        super(color, area);
        this.radio = radio;
    }

    static calcularArea(circulo){
        const area = Math.PI * circulo.radio ** 2;
        return `Área del Círculo: ${area.toFixed(2)}`;
    }
}

// Instancia para Círculo
const circulo1 = new Circulo("Yellow", 0, 8);

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Círculo:</h1>
    <h5>Color: <span>${circulo1.color}</span></h5>
    <h5>Área: <span>${Circulo.calcularArea(circulo1)}</span></h5>
`;

class Rectangulo extends Figura {
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

// Instancia para Rectángulo
const rectangulo1 = new Rectangulo("Green", null, 7, 3);

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Rectángulo:</h1>
    <h5>Color: <span>${rectangulo1.color}</span></h5>
    <h5>Área: <span>${Rectangulo.calcularArea(rectangulo1)}</span></h5>
`;

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
        return velocidadKmH / 1.60934;
    }
}

// Crear una instancia para Vehiculo
const vehiculo1 = new Vehiculo("Chevrolet", "Camaro Z-10", 150);
vehiculo1.acelerar();

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Vehículo:</h1>
    <h5>Marca: <span>${vehiculo1.marca}</span></h5>
    <h5>Modelo: <span>${vehiculo1.modelo}</span></h5>
    <h5>Velocidad: <span>${vehiculo1.velocidad} km/h</span></h5>
`;

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

// Instancia para Coche
const coche1 = new Coche("Lamborghini", "Huracan", 250, "Gasolina");
coche1.acelerar();

// Convertir la velocidad del Coche a mph
const velocidadMph = Vehiculo.convertirKmHEnMph(coche1.velocidad).toFixed(2);

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Coche:</h1>
    <h5>Marca: <span>${coche1.marca}</span></h5>
    <h5>Modelo: <span>${coche1.modelo}</span></h5>
    <h5>Velocidad: <span>${coche1.velocidad} km/h</span></h5>
    <h5>Velocidad en Mph: <span>${velocidadMph} mph</span></h5>
    <h5>Combustible: <span>${coche1.combustible}</span></h5>
`;

class Empleado {
    constructor(nombre, edad, sueldo){
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.id = Empleado.generarIdUnico();
    }

    calcularSalarioAnual(){
        return this.sueldo * 12;
    }

    static generarIdUnico(){
        if (!this.proximoId) {
            this.proximoId = 1;
        } else {
            this.proximoId++;
        }
        return this.proximoId;
    }
}

// Instancia para Empleado
const empleado1 = new Empleado("Albert", 24, 1200000);
const salarioAnual = empleado1.calcularSalarioAnual();

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Empleado:</h1>
    <h5>Nombre: <span>${empleado1.nombre}</span></h5>
    <h5>Edad: <span>${empleado1.edad}</span></h5>
    <h5>Salario Anual: <span>${salarioAnual}</span></h5>
    <h5>ID: <span>${empleado1.id}</span></h5>
`;

class Gerente extends Empleado {
    constructor(nombre, edad, sueldo, departamento){
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }

    calcularSalarioAnualConBono(){
        const salarioConBono = this.sueldo * 1.1;
        const salarioAnual = salarioConBono * 12;
        const salarioFormateado = salarioAnual.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        
        return salarioFormateado;
    }
}

// Instancia para Gerente con salario inicial de 1400000
const gerente1 = new Gerente("Alejo", 26, 1400000, "Ventas");
const salarioAnualGerenteConBono = gerente1.calcularSalarioAnualConBono();

document.querySelector("#saludo").innerHTML += /*html*/ `
    <hr>
    <h1>Gerente:</h1>
    <h5>Nombre: <span>${gerente1.nombre}</span></h5>
    <h5>Edad: <span>${gerente1.edad}</span></h5>
    <h5>Salario Anual con Bono: <span>${salarioAnualGerenteConBono} COP</span></h5>
    <h5>Departamento: <span>${gerente1.departamento}</span></h5>
    <h5>ID: <span>${gerente1.id}</span></h5>
`;
