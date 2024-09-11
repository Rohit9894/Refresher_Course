// Car Class
class Car {
    constructor(name, accelerationPower, brakingPower, maxFuelCapacity) {
      this.name = name;
      this.accelerationPower = accelerationPower; 
      this.brakingPower = brakingPower;          
      this.speed = 0;                            
      this.fuelLevel = maxFuelCapacity;          
      this.maxFuelCapacity = maxFuelCapacity;   
    }
  
    accelerate() {
      if (this.fuelLevel > 0) {
        this.speed += this.accelerationPower;
        this.fuelLevel -= 1;
        console.log(`Accelerating. Current speed: ${this.speed} m/s. Fuel level: ${this.fuelLevel}`);
      } else {
        console.log("Cannot accelerate. Fuel level is zero.");
      }
    }
  
    brake() {
      this.speed = Math.max(0, this.speed - this.brakingPower); 
      console.log(`Brakes applied. Current speed: ${this.speed} m/s`);
    }
  
    checkSpeed() {
      console.log(`Current speed: ${this.speed} m/s`);
      return this.speed;
    }
  
    refuel() {
      this.fuelLevel = this.maxFuelCapacity;
      console.log(`Refueled to maximum capacity: ${this.fuelLevel} units`);
    }
  
    drive(duration, accelerateInterval, brakeInterval) {
      let time = 0;
      
      const interval = setInterval(() => {
        time++;
  
        if (time % accelerateInterval === 0) {
          this.accelerate();
        }
  
        if (time % brakeInterval === 0) {
          this.brake();
        }
  
        console.log(`Time: ${time} s, Speed: ${this.speed} m/s, Fuel Level: ${this.fuelLevel}`);
  
        if (time >= duration || this.fuelLevel <= 0) {
          clearInterval(interval);
          console.log('Driving session ended.');
        }
      }, 1000);
    }
  }

  const myCar = new Car('Speedster', 5, 3, 20);
  

  myCar.checkSpeed(); 
  myCar.accelerate(); 
  myCar.brake();      
  myCar.refuel();     
  

  myCar.drive(15, 2, 3);
  