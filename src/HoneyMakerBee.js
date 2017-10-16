var HoneyMakerBee = function() {
  //call the Bee superclass. Point this to the resultant HoneyMakerBee instance via auto assignment of this -> Object.create(HoneyMakerBee.prototype)
  Bee.call(this);
  this.age = 10;
  //inherit color
  this.job = 'make honey';
  //inherit food
  this.honeyPot = 0;

};

//delegate HoneyMakerBee prototype to Bee prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//since HoneyMakerBee prototype was overwritten must reassign the correct .constructor property
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
//inherit eat from Grub
// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};
// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};



