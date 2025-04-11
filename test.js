export class Test {
  constructor(x) {
    this._x = x;
  }
  get x() {
    return this._x;
  }
  callist(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
}

export function pow(x, y) {
  return Math.pow(x, y);
}
