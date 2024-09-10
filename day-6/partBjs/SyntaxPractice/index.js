function Animal() {
  this.type = "Animal";
  this.sound = "Animal Sound";
}
Animal.prototype.sound = function () {
  console.log(this.sound);
};
let animal = new Animal();
let dog = Object.create(animal);
dog.sound = "bark";
let mydog = Object.create(animal);
mydog.sound = "mydog";
