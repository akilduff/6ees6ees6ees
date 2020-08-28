class HoneyMakerBee extends Bee {


  constructor() {
    super()
    this.age = 10;
    this.color = 'yellow'
    this.job = 'make honey'
    this.honeyPot = 0;
      // console.log(Grub(this));

  }

  makeHoney() {
    this.honeyPot++
  }

  giveHoney() {
    this.honeyPot--
  }
};
