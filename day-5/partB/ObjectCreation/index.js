function Iphoe1(ASIN, color, display, camera) {
  this.ASIN = ASIN;
  this.color = color;
  this.display = display;
  this.camera = camera;
}
Iphoe1.prototype.dial=function(){
    console.log("tring.. tring")
}
Iphoe1.prototype.seneMessage=function(){
    console.log("Sending message...")

}
Iphoe1.prototype.cameraClicked=function(){
    console.log("Camera clicked")
}


function Iphoe2(ASIN, color, display, camera,bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth=bluetooth;
  }
  Iphoe2.prototype.dial=function(){
      console.log("tring.. tring")
  }
  Iphoe2.prototype.seneMessage=function(){
      console.log("Sending message...")
  
  }
  Iphoe2.prototype.cameraClicked=function(){
      console.log("Camera clicked")
  }
  Iphoe2.prototype.cameraClicked=function(){
    console.log("Camera clicked")
}
  Iphoe2.prototype.connectBluetooth =function(){
    console.log("Bluetooth connected successfully...")
}