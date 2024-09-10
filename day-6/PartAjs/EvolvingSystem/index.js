function Device(name, type, status = false) {
  this.name = name;
  this.type = type;
  this.status = status;
}
Device.prototype.swtich = function () {
  this.status = !this.status;
  console.log(`Status : ${this.status ? "Off" : "On"}`);
};

function SmartHome(owner) {
  this.owner = owner;
  this.devices = [];
}
SmartHome.prototype.add = function (device) {
  this.devices.push(device);
};

function SmartDevice(name, type, brand, connectivity) {
  Device.call(this, name, type);
  this.brand = brand;
  this.connectivity = connectivity;
}

function SmartLight(name, type, brand, connectivity, brightness, color) {
  SmartDevice.call(this, name, type, brand, connectivity);
  this.brightness = brightness;
  this.color = color;
}

function SmartThermostat(name, type, brand, connectivity, temperature, mode) {
  SmartDevice.call(this, name, type, brand, connectivity);
  this.connectivity = connectivity;
  this.temperature = temperature;
}

let d1=new Device("Buld","Charge");
let smartHome=new SmartHome("Rohit Gupta");
let smartDevice=new SmartDevice("Tv","LED","Normal","white")
let smartLight=new SmartLight("Tv","LED","Samsung","Wifi")
let SmartThermostat=new smartThermostat("Tv","LED","wireless","22C")


