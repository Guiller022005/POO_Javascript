class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    static saludar(persona) {
        return `Hola, ¿cómo estás ${persona.nombre}?`;
    }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Guillermo", 19, "M");

document.querySelector("#saludo").innerHTML = /*html*/`
    <h1>Nombre: <span>${Persona.saludar(persona1)}</span></h1>
`;

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

document.querySelector("#saludo").innerHTML = /*html*/`
    <h1>Nombre: <span>${Persona.saludar(estudiante1)}</span></h1>
    <h2>Carrera: <span>${Estudiante.estudiar(estudiante1)}</span></h2>
`;