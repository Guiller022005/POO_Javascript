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

document.querySelector("#saludo").innerHTML = /*html*/ `
    <h4>Nombre: <span>${animal1.nombre}</span></h4>
    <h4>Sonido: <span>${Animal.hacerSonido(animal1)}</span></h4>
    <h4>Estado: <span>${Perro.moverCola(animal1)}</span></h4>
`;