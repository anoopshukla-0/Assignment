const counter = {
  count: 0,

  increment() {
    this.count++;
    console.log(`Count after increment ${this.count}`);
  },

  decrement() {
    if (this.count > 0) {
      this.count--;
    } else {
      console.log("Count is already at 0 and cannot be decreased.");
    }
    console.log(`Count after decrement ${this.count}`);
  },

  reset() {
    this.count = 0;
    console.log("Count has been reset to 0.");
  },
};

console.log("Incrementing...");
counter.increment();
counter.increment();
counter.increment();
console.log();
console.log("Decrementing...");
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
console.log();
console.log("Resetting...");
counter.reset();