var taxiLocationCounter = 1;
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
//listen for the keydown event
body.onkeydown = function(e){
  var trafficLight = new TrafficLight(taxiLocationCounter);
  var keyName = keyCodeName(e.keyCode);
    //e.keyCode - will capture the key codes
    // displayMessage(e.keyCode);

if (keyName === "right")
  if (trafficLight.color() === "green"){
    if(taxiLocationCounter<9){
      moveForward();
    }
};
 if (keyName === "left"){
    if(taxiLocationCounter>1){
      moveBackward();
    }
};

if (keyName === "up"){
  trafficLight.makeRed();
};
if (keyName === "down"){
  trafficLight.makeGreen();
};


displayMessage(createLocationClass(taxiLocationCounter));
 };

var keyCodeName = function(keycode) {
  if(keycode === 37){
    return "left";
  }
  else if(keycode === 38){
    return "up";
  }
  else if (keycode === 39){
    return "right";
  }
  else if (keycode === 40){
    return "down";
  }
  else {
    return "";
  }
};


var createLocationClass = function(taxiLocationCounter){
  if (taxiLocationCounter === 1){
    return "slot-one-of-nine";
  }
  else if (taxiLocationCounter === 2){
    return "slot-two-of-nine";
  }
  else if (taxiLocationCounter === 3){
    return "slot-three-of-nine";
  }
  else if (taxiLocationCounter === 4){
    return "slot-four-of-nine";
  }
  else if (taxiLocationCounter === 5){
    return "slot-five-of-nine";
  }
  else if (taxiLocationCounter === 6){
    return "slot-six-of-nine";
  }
  else if (taxiLocationCounter === 7){
    return "slot-seven-of-nine";
  }
  else if (taxiLocationCounter === 8){
    return "slot-eight-of-nine";
  }
  else if (taxiLocationCounter === 9){
    return "slot-nine-of-nine";
  }
};

var moveForward = function(){
  var currentLocation = createLocationClass(taxiLocationCounter);
   taxiLocationCounter = taxiLocationCounter+1;
  var newLocation = createLocationClass(taxiLocationCounter);
   moveTaxi(currentLocation,newLocation);
};

var moveBackward = function(){
  var currentLocation = createLocationClass(taxiLocationCounter);
   taxiLocationCounter = taxiLocationCounter-1;
  var newLocation = createLocationClass(taxiLocationCounter);
   moveTaxi(currentLocation,newLocation);
};

var createTrafficLightClass = function(taxiLocationCounter){
    if (taxiLocationCounter === 1){
      return ".one-of-nine";
    }
  else if (taxiLocationCounter === 2){
    return ".two-of-nine";
  }
  else if (taxiLocationCounter === 3){
    return ".three-of-nine";
  }
  else if (taxiLocationCounter === 4){
    return ".four-of-nine";
  }
  else if (taxiLocationCounter === 5){
    return ".five-of-nine";
  }
  else if (taxiLocationCounter === 6){
    return ".six-of-nine";
  }
  else if (taxiLocationCounter === 7){
    return ".seven-of-nine";
  }
  else if (taxiLocationCounter === 8){
    return ".eight-of-nine";
  }
  else if (taxiLocationCounter === 9){
    return ".nine-of-nine";
  }
};


function TrafficLight(taxiLocationCounter){

var className = createTrafficLightClass(taxiLocationCounter);
var trafficLightElement = document.querySelector(className);

// makeGreen
this.makeGreen = function(){
  trafficLightElement.classList.add("lights-go");
  trafficLightElement.classList.remove("lights-slowdown");
  trafficLightElement.classList.remove("lights-stop");
};

// make Orange
this.makeOrange = function(){
  trafficLightElement.classList.add("lights-slowdown");
  trafficLightElement.classList.remove("lights-go");
  trafficLightElement.classList.remove("lights-stop");
};

// make Red
this.makeRed = function(){
  trafficLightElement.classList.add("lights-stop");
  trafficLightElement.classList.remove("lights-slowdown");
  trafficLightElement.classList.remove("lights-go");
};

this.color = function(){
  if (trafficLightElement.classList.contains("lights-slowdown")){
    return 'orange';
  }
  if (trafficLightElement.classList.contains("lights-go")){
    return 'green';
  }
  if(trafficLightElement.classList.contains("lights-stop")){
    return 'red';
  }
}
};
