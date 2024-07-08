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
const persona1 = new Persona("Guillermo", 30, "M");

document.querySelector("#saludo").innerHTML = /*html*/`
    <h1>Nombre: <span>${Persona.saludar(persona1)}</span></h1>
`;
