//Here we will learn three different ways to create an object.
//The ways are constructor, object instantiation, object-literal (Choose your favorite)

//Two ways to access object properties.
//1.	objectName.variable
//2.	objectName["variable"]


//You can use the three ways to create methods.
//1.	for constructors...

		//this.methodName = function() {}

//2.	for objects...

		//objectName.methodName = function() {}

//3.	for object-literal...

    //methodName: function() {}



// -----------------------------------------------------------------------------------------
//Method 1: Constructor
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.meow = function() {
        console.log(this["name"] + " goes " + "Meow!");
    }
    //this.meow = function {}
    //same as...
    //Cat.prototype.meow = function() {console.log("Meow!");}
    // ^^Use this line to define methods outside the object instance^^
    //anything with .prototype() is give to all instances of an object (or Cat here)
}
// -----------------------------------------------------------------------------------------
//Method 2: Create a new Object instance
var Dog = new Object();
Dog.name = "Lola";
Dog.breed = "Pug";
Dog.sing = function() {
	console.log("~~~Well my name is " + Dog.name + " and I'm a special " + Dog.breed + "!~~~");
}
// -----------------------------------------------------------------------------------------
//Method 3: Object literal
//NOTE: The members in this object definition are a comma-seperated list. Keep this in mind
// to avoid an error.
var Rabbit = {
	name: "Bugs",
	color: "White",
	tail: "Fluffy",
	job: "chew carrots for a living, doc!",
	makeSound: function(){
		console.log(this.name + " makes discrete rabbit sounds...");
	},
	sayJob: function() {
        // complete this method
    console.log("*More indisctinct rabbit sounds* \nI " + this.job);
    }
};
// -----------------------------------------------------------------------------------------

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Garfield", "Domestic Shorthair");

gary.meow = function() {console.log(gary.name + " says \"I refuse to meow!\"");}
//^this .meow() will be ONLY used on gary, no other Cat.
// To add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console (do the following):
//Cat.prototype.meow = function() {console.log("Meow!");} //creates a method for all Cats

console.log("\nCats! Please introduce yourself.\n")
cheshire.meow();
gary.meow();
console.log("\nFine we'll move on to the dog... Please introduce yourself.\n")
Dog.sing();
console.log("Great! What about you, " + Rabbit["name"] + ", would you like to say anything?");
Rabbit.makeSound();
console.log("\nUhh... anything else?\n");
Rabbit.sayJob();
console.log("\n");



//More "advanced" topics (Yet to be completed with notes explaining every line, but mostly done)
// ------------------------------PROTOTYPES---------------------------

function Rectangle (height, width) {
  this.height = height
  this.width = width
}

//Superclass method:
Rectangle.prototype.toString = function () {
  return `Rect: ${this.height}x${this.width}`
}

//Superclass method:
Rectangle.prototype.area = function () {return this.height * this.width}

//Create its derived class:
function Square (side) {
  Rectangle.call(this, side, side) //Call super constructor
  //^Square inherits Rectangle constructor
}

// subclass extends superclass
Square.prototype = Object.create(Rectangle.prototype) //Square inherits Rectangle AKA Square is now Rectangle
Square.prototype.constructor = Square; /*Square is also a Square
Basically saying give it the type Square, since the line above says you're creating a Rectangle*/

//Square has all of Rectangle methods:
Square.prototype.toString = function () {
  return `Square: ${this.width}^2`
}

let sq = new Square(5, 5); //Square has Rectangle constructor
console.log(sq.toString());
console.log(sq.width);


