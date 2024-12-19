const getElement = (selection: string): HTMLElement => {
    const element = document.querySelector(selection) as HTMLElement;
    if (!element) throw new Error(`Please check "${selection}" selector, no such element exists`);
    return element;
};

class Counter {
  counter: HTMLElement;
  value: number;
  resetBtn: HTMLElement;
  increaseBtn: HTMLElement;
  decreaseBtn: HTMLElement;
  valueDOM: HTMLElement;

  constructor(element: HTMLElement, value: number) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset') as HTMLElement;
    this.increaseBtn = element.querySelector('.increase') as HTMLElement;
    this.decreaseBtn = element.querySelector('.decrease') as HTMLElement;
    this.valueDOM = element.querySelector('.value') as HTMLElement;
    this.valueDOM.textContent = this.value.toString();

    // Bind this to all functions
    ['increase', 'decrease', 'reset'].forEach(fn => (this[fn] = this[fn].bind(this)));

    this.increaseBtn.addEventListener('click', this.increase.bind(this));
    this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
    this.resetBtn.addEventListener('click', this.reset.bind(this));
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value.toString();
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value.toString();
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value.toString();
  }
}

const firstCounter = new Counter(getElement('.first-counter'), 1);
const secondCounter = new Counter(getElement('.second-counter'), 0);