class Course {
    constructor ({
        name,
        classes = [],
    }){
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if(newName === "Curso Malito de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = newName;
        }
    }

}


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
  courses: ["curso de programacion basica","Curso de HTML", "Curso de CSS", "Curso de JavaScript"],
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
    email: "brayan@example.com",
    twitter: "BrayanSGL",
    learningPaths: ['Escuela de Desarrollo Web', 'Escuela de Data Science'],
});