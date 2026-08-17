///////////////////////////////
//// Vererbung mit extends ////
//////////////////////////////
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {}
// Dog erbt den constructor von Animal.
const dog = new Dog("Buddy");
// Das Objekt enthält die geerbte Eigenschaft name.
console.log(dog);

//////////////////////////////////////////////////
//// Vererbung: Dishwasher erbt von Appliance ////
/////////////////////////////////////////////////
class Appliance {
  constructor(brand) {
    this.brand = brand;
  }
}
class Dishwasher extends Appliance {}
// Erstellt ein Objekt der Klasse Dishwasher.
// Dishwasher übernimmt den constructor von Appliance.
const kitchenAppliance = new Dishwasher("Bosch");
// Gibt das Objekt mit der geerbten Eigenschaft "brand" aus.
console.log(kitchenAppliance); //Ausgabe: Dishwasher { brand: 'Bosch' }

