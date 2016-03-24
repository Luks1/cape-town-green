var randomNumber = function(range){
  return Math.floor(Math.random() * range);
};

var moneyIndex = {
    0 : 5,
    1 : 10,
    2 : 20
  };

var passengerList = function(maxPassengers){

  var maxNumber = randomNumber(40);
  var passengers = [];
  for(var i=0;i<maxNumber;i++){
    var random = randomNumber(3) ;
    passengers.push(moneyIndex[random]);
  }

  return passengers;
};

var taxiPriceType = function(){
  var random = randomNumber(3);
  return moneyIndex[random];
};

var displayMessage = function(text){
    var message = document.getElementById("message");
    message.innerHTML = text;
};

var displayTaxiPassengerCount = function(count){
    var q = document.querySelector(".passengers");
    q.innerHTML = count;
};

var displayQueueCount = function(val){
    var q = document.querySelector("#queue-five-rand");
    q.innerHTML = val;
};

var moveTaxi = function(from, to) {
    var taxi = document.querySelector('.taxi');
    taxi.classList.remove(from);
    taxi.classList.add(to);
};
