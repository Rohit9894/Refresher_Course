class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getDetails() {
    console.log(`Name:${this.name} , Email:${this.email}}`);
  }
}

class Student extends User {
  constructor(studentId, name, email) {
    super(name, email);
    this.studentId = studentId;
  }
  enroll() {
    console.log(`${this.name} has enrolled `);
  }
}

class Instructor extends User {
  constructor(instructorId, name, email) {
    super(name, email);
    this.instructorId = instructorId;
  }
  assignGrade() {
    console.log(`Instructor ${this.name} assigned a grade `);
  }
}
let i1 = new Instructor(2, "Amar Rai", "Clothes");
i1.assignGrade();
