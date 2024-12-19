const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (!element) throw new Error(`Please check "${selection}" selector, no such element exists`);
    return element;
};
  
class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    // Bind this to all functions
    ['increase', 'decrease', 'reset'].forEach(fn => this[fn] = this[fn].bind(this));

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}
  
const firstCounter = new Counter(getElement('.first-counter'), 1);
const secondCounter = new Counter(getElement('.second-counter'), 0);