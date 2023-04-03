const brayan = {
  name: "Brayan",
  age: 22,
  coursesAproved: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
  ],

  aprovedCourse(newCourse) {
    this.coursesAproved.push(newCourse);
  },
};

function Student(name, age, coursesAproved) {
  this.name = name;
  this.age = age;
  this.coursesAproved = coursesAproved;

  // this.aprovedCourse = function(newCourse) {
  //     this.coursesAproved.push(newCourse);
  // }
}

Student.prototype.aprovedCourse = function (newCourse) {
  this.coursesAproved.push(newCourse);
};

const sergio = new Student("Sergio", 22, [
  "Curso Definitivo de HTML y CSS",
  "Curso Practico de HTML y CSS",
]);

sergio.aprovedCourse("Curso de ReactJS");

// Prototipos con la sintaxis de clases
class Student2 {
    constructor(name, age, coursesAproved) {
        this.name = name;
        this.age = age;
        this.coursesAproved = coursesAproved;
    }
    
    aprovedCourse(newCourse) {
        this.coursesAproved.push(newCourse);
    }
    
}

const poli = new Student2("Poli", 22, ['Curso de ReactJS', 'Curso de VueJS']);


// Optimización de código para recibir un objeto de modo tal que no sea necesario pasar los parámetros uno por uno

class Student3 {
    constructor({
        name,
        age,
        coursesAproved,
    }) {
        this.name = name;
        this.age = age;
        this.coursesAproved = coursesAproved;
    }
    
    aprovedCourse(newCourse) {
        this.coursesAproved.push(newCourse);
    }
    
}

const brayan2 = new Student3({
    name: "Brayan",
    age: 22,
    coursesAproved: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
});
