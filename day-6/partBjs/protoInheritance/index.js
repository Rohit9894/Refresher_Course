function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = true;
}

function Cars(index, maxSlot) {
  this.carforRents = [];
  for (let i = 0; i < maxSlot; i++) {
    if (index == 0) {
      this.carforRents.push(new Car("Toyata", "Corolla", "2020"));
    } else if (index == 1) {
      this.carforRents.push(new Car("Suzuki", "Corolla", "2022"));
    } else {
      this.carforRents.push(new Car("Tata", "Corolla", "2024"));
    }
  }
}
function Showroom(number) {
  this.Vehicle = [];
  this.numberofFloors = number;
  for (let i = 0; i < this.numberofFloors; i++) {
    this.Vehicle[i] = new Cars(i, this.numberofFloors);
  }
  // this.bookCar(customer,type){
  //   let car=this.findCar(type);

  // }

  this.findCar = function (type) {
    for (let i = 0; i < number; i++) {
      for (let car of this.Vehicle[i].carforRents) {
        if (type === car.make && car.isAvailable) {
          return car;
        }
      }
    }
    return false;
  };
}
Showroom.prototype.bookCar = function (type, customer) {
  let car = this.findCar(type);

  if (car) {
    customer.rentedCar.push(car);
    car.isAvailable = false;
    console.log("Congratulations , Your Car is Booked");
  } else {
    console.log("No Car is Availabe for Rent");
  }
};

function Customer(name) {
  this.name = name;
  this.rentedCar = [];
}
let cars = new Showroom(3);
let c1 = new Customer("Rohit Gupta");
cars.bookCar("Tata", c1);
