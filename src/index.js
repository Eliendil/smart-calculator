class SmartCalculator {

  constructor(initialValue) {
      this.string = '';
      this.array = [];
      this.array.push(initialValue);
    }
    add(number) {
      this.array.push('+');
      this.array.push(number);
      return this;
    }
    subtract(number) {
      this.array.push('-');
      this.array.push(number);
      return this;
    }
    multiply(number) {
      this.array.push('*');
      this.array.push(number);
      return this;
    }
    devide(number) {
      this.array.push('/');
      this.array.push(number);
      return this;
    }
    pow(number) {
        this.array.push('**');
        this.array.push(number);
        return this;
    }
    toString() {
      for (var n = 0; n < this.array.length; n++) {
        this.string = this.string + this.array[n];
      }
// evaluetes string expressions of this.string
      return eval(this.string);
    }
}

module.exports = SmartCalculator;