var Bee = function() {
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  //inherit food property from grub
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


// Create a Bee class, in pseudoclassical style, with:

// an eat method that is inherited from grub
var bee = new Bee();
console.log(bee);
