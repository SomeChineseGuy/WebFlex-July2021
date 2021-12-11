class Rectangle {
  constructor(length, width) {
    this.width = width;
    this.length = length
  }

  area() {
    return this.width * this.length
  }
}

const myRecetangle = new Rectangle(3, 5)
console.log(myRecetangle)
console.log(myRecetangle.area())

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width)
    // super()
    this.height = height;
  }

  volumn() {
    // return this.width * this.length * this.height
    return this.area() * this.height
  }
}

const myPrism = new Prism(3,4,5);
console.log(myPrism)
console.log(myPrism.volumn())