function solution() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = Number(gasWeight);
    }
  }
  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this._ribbon = {
        color: ribbonColor,
        length: Number(ribbonLength),
      };
    }
    get ribbon() {
      return this._ribbon;
    }
  }
  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }
    get text() {
      return this._text;
    }
  }
  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = solution();
let testBalloon = new classes.Balloon('yellow', 20.5);
let testPartyBalloon = new classes.PartyBalloon('yellow', 20.5, 'red', 10.25);
let testBBalloon = new classes.BirthdayBalloon(
  'yellow',
  20.5,
  'red',
  10.25,
  'HBD'
);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
console.log(testBBalloon.text);
