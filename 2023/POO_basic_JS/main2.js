const brayan2 = {
  name: "Brayan",
  age: 22,
  coursesAproved: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
  ],
  socialMedia: {
    twitter: "brayan_2",
    instagram: "brayan_2",
    facebook: undefined,
  },
  aprovedCourses: ["Curso de ReactJS", "Curso de VueJS"],
  learningsPaths: [
    {
      name: "Desarrollo Web",
      courses: ["Curso de HTML", "Curso de CSS", "Curso de JavaScript"],
    },
    {
      name: "Ingles",
      courses: ["Curso de Ingles", "Curso de Ingles 2", "Curso de Ingles 3"],
    },
  ],
};

// Con POO
class learningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }

  addCourse(newCourse) {
    this.courses.push(newCourse);
  }
}

const escuelaWeb = new learningPaths({
  name: "Escuela de Desarrollo Web",
  courses: ["Curso de HTML", "Curso de CSS", "Curso de JavaScript"],
});

const escuelaData = new learningPaths({
  name: "Escuela de Data Science",
  courses: ["Curso de Python", "Curso de R", "Curso de SQL"],
});

const escuelaVgs = new learningPaths({
  name: "Escuela de Videojuegos",
  courses: ["Curso de Unity", "Curso de Unreal", "Curso de Blender"],
});

class Student {
  constructor({
    name,
    age,
    email,
    twitter = undefined,
    instagram = undefined, // Opcional
    facebook = undefined, // Opcional
    aprovedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.socialMedia = {
      twitter, // twitter: twitter,
      instagram, // instagram: instagram,
      facebook, // facebook: facebook,
    };
    this.aprovedCourses = aprovedCourses;
    this.learningPaths = learningPaths;
  }
}

const brayan = new Student({
  name: "Brayan",
  age: 22,
  email: "brayan",
  twitter: "brayan_2",
  aprovedCourses: escuelaWeb.courses,
  learningPaths: escuelaData,
});

console.log(brayan);

//Exccercise

class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integrante) {
    // Verificar si hay bererista
    if (
      integrante.instrumento === "Bateria" &&
      this.integrantes.some(
        (integrante) => integrante.instrumento === "Bateria"
      )
    ) {
      console.log("No se puede agregar a la banda");
    } else {
      this.integrantes.push(integrante);
      console.log("Integrante agregado");
    }
  }
}

class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

const banda = new Banda({
  nombre: "Banda",
  generos: ["Rock", "Pop"],
});

const integrante1 = new Integrante({
  nombre: "Integrante 1",
  instrumento: "Guitarra",
});

const integrante2 = new Integrante({
  nombre: "Integrante 2",
  instrumento: "Bateria",
});

banda.agregarIntegrante(integrante1);
banda.agregarIntegrante(integrante2);
