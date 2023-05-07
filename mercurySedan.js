//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//Jennifer's Note: I am getting an error that require is not defined? But this code was pre-written for me.

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.
// Jennifer's Note: I decided to write it here instead of making a file named index.js! I did make an index.html to see console.logs and errors.
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    constructor(type) {
    super(make, model, year, color)
    this.maxPassengers = 5;
    passengers = 0;
    numberOfWheels = 4;
    maximumSpeed = 160;
    fuel = 10;
    scheduleService = false;
}

loadPassenger(num){
    console.log("Hop on in!")
}

start() {
    if (this.fuel > 0) {
        return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }

scheduleService(mileage){
    if (this.mileage > 30000) {
        console.log("Time for maintenance!!")
    } else {
        console.log("Don't worry about maintenance yet!")
    }
}
}


//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:

let dolly = new Car(Ford)
dolly.loadPassenger(2)
dolly.start()
dolly.scheduleService(28953)
console.log(dolly)

let bruce = new Car(Ford)
bruce.loadPassengers(4)
bruce.start()
bruce.scheduleService(56948)
console.log(bruce)

//Jennifer's Note: I can't seem to get these two things to console.log ....