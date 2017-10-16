var RetiredForagerBee = function() {
  ForagerBee.call(this);
  // an age property that is set to 40
  this.age = 40;
  // a job property that is set to gamble
  this.job = 'gamble';
  // a canFly property that is set to false
  this.canFly = false;
  // a color property that is set to grey
  this.color = 'grey';
  // a food property that is inherited from grub
  // a treasureChest property inherited from ForagerBee that is set to an empty array []
  };

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
// a forage method that returns "I am too old, let me play cards instead"
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};
// an eat method that is inherited from grub
// an always winning gamble method that allows the bee to add a treasure to the treasureChest
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}