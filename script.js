// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Step 2: getMakeModel Method
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Step 3: SportsCar Constructor
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Step 4: getTopSpeed Method
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Step 5: Set up inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
