// Password Checker Challenge//

// defining username variables//
var username = prompt("Please enter desired username. (May not contain '!, #, or $'. Must be 6 characters long.)");
var userArray = [];

// defining username variables//
function validName(username) {
  if (username.length < 6 || username.includes("!") || username.includes("#") || username.includes("$")) {
      username = prompt("Please enter desired username. (May not contain '!, #, or $'. Must be 6 characters long.)");
      validName(username)
    } else {
      userArray.push(username);
  }
}

// calling username function//
validName(username)

// defining password variables
var password = prompt("Please enter desired password. (May not contain '!, #, or $'. Must be 6 characters long. Cannot be same as username.)");
var passwordArray = []

function validPassword(password) {
  if (password.length < 6 || password.includes("!") || password.includes("#") || password.includes("$") || password == username) {
      password = prompt("Please enter desired password. (May not contain '!, #, or $'. Must be 6 characters long. Cannot be same as username.)");
      validPassword(password)
    } else {
      passwordArray.push(password);
  }
}


// calling password function
validPassword(password)



// Car Object Challenge//

// var carInfo = {
//   make: "Nissan",
//   modelYear: "2009",
//   color: "Navy",
//   speed: 0,
//   accelerate: function() {return this.speed += 10},
//   brake: function() {return this.speed -= 7},
//   getData: function() { return this.color+" "+this.modelYear+" "+this.make+"." }
// };
//
// carInfo.getData();
//
// while (carInfo.speed <= 40) {
//   console.log(carInfo.accelerate());
// }
//
// while (carInfo.speed > 0) {
//   if (carInfo.speed > 7) {
//     console.log(carInfo.brake());
//   } else {
//   console.log(carInfo.speed-=carInfo.speed)
//   }
// }

var carInfo = {
  make: "Nissan",
  modelYear: "2009",
  color: "Navy",
  speed: 50,
  accelerate: function() {
    if (this.speed <= 75) {
    // this.speed += 10
      return this.speed += 10;
    } else {
    // (85 - this.speed) + this.speed
    var customAccelerate = 85 - this.speed;
    return customAccelerate + this.speed;
    }
  },
  brake: function() {return this.speed -= 7},
  getData: function() { return this.color+" "+this.modelYear+" "+this.make+"." }
};

// console.log(carInfo.accelerate());

// carInfo.getData();

while (carInfo.speed > 0) {
  if (carInfo.speed = 2) {
    carInfo.speed = 0
  }
  var halfSpeed = carInfo.speed/2;
  var brakeRandom = Math.floor(Math.random() * halfSpeed);
  var customBrake = carInfo.speed - brakeRandom;
  carInfo.speed = customBrake;
  console.log(customBrake);
  console.log(carInfo.speed);
}











// accelerate to 50//
while (carInfo.speed <= 50) {
  return carInfo.accelerate();
}
// brake to 0//
while (carInfo.speed > 0) {
  if (carInfo.speed > 7) {
    return carInfo.brake();
  } else {
  return carInfo.speed-=carInfo.speed;
  }
}
