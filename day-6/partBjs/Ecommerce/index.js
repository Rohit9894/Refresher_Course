
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}


Product.prototype.getDetails = function () {
  return `${this.name} costs $${this.price} and we have ${this.quantity} in stock.`;
};


function Electronics(name, price, quantity, brand, model) {

  Product.call(this, name, price, quantity);
  this.brand = brand;
  this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;


Electronics.prototype.powerOn = function () {
  return `${this.name} is now ON.`;
};

Electronics.prototype.powerOff = function () {
  return `${this.name} is now OFF.`;
};


function Clothing(name, price, quantity, size, material) {
  
  Product.call(this, name, price, quantity);
  this.size = size;
  this.material = material;
}


Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;


Clothing.prototype.tryOn = function () {
  return `Trying on ${this.name} in size ${this.size}.`;
};


function Book(name, price, quantity, author, genre) {

  Product.call(this, name, price, quantity);
  this.author = author;
  this.genre = genre;
}


Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;


Book.prototype.read = function () {
  return `Reading "${this.name}" by ${this.author}.`;
};


const laptop = new Electronic
console.log(laptop.getDetails()); 
console.log(laptop.powerOn()); 
const shirt = new Clothing("T-Shirt", 25, 50, "M", "Cotton");
console.log(shirt.getDetails()); 
console.log(shirt.tryOn()); 

const novel = new Book("1984", 15, 100, "George Orwell", "Dystopian");
console.log(novel.getDetails()); 
console.log(novel.read()); 
