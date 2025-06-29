/**
 * Predict Output
 * | **Context**               | **`this` refers to**                        |
| ------------------------- | ------------------------------------------- |
| Global                    | `window` (non-strict), `undefined` (strict) |
| Regular function          | `window` or `undefined`                     |
| Object method             | The object itself                           |
| Arrow function            | Lexical `this` (outer scope)                |
| Constructor (`new`)       | Newly created object                        |
| `call` / `apply` / `bind` | Explicitly defined `this`                   |
| DOM Event handler         | The HTML element                            |
| Class method              | The class instance                          |

 */

'use strict' 
function show() {
  console.log(this);
}
show();

// 2----------->

const obj = {
  name: "Mukesh",
  say () {
    console.log(this.name);
  },
  say1:() =>{
    console.log(this.name);
  },
   say2:function() {
     console.log(this.name);
  }
};


obj.say()
obj.say1()
obj.say2()

// 3-----------------

const person = {
  name: "Mukesh",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
person.greet();


// 4.
const obj1 = {
  name: "ToughCrew",
  sayHi() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  }
};
obj1.sayHi();
// 5

const user = {
  name: 'Mukesh',
  greet() {
    return `Hello, ${this.name}`;
  }
};

const { greet } = user;
console.log(greet());

//6 
class Crew {
  constructor(name) {
    this.name = name;
  }

  hello() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  }
}

new Crew("Mukesh").hello();

// Advanced--->

// 6

const obj3 = {
  name: "Mukesh",
  outer() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};
obj3.outer();
//  how to fix

// 7
const obj4 = {
  name: "Mukesh",
  outer() {
    function mid() {
      function inner() {
        console.log(this.name);
      }
      inner();
    }
    mid();
  }
};
obj4.outer();
// 8
const obj5 = {
  name: "Mukesh",
  outer: () => {
    const mid = () => {
      const inner = () => {
        console.log(this.name);
      };
      inner();
    };
    mid();
  }
};
obj5.outer();

// 9
const obj6 = {
  multiplier: 3,
  numbers: [1, 2, 3],
  multiply() {
    return this.numbers.map(function (n) {
      return n * this.multiplier;
    });
  }
};

console.log(obj6.multiply());

//  9
const p2 = {
  name: "Mukesh",
  getArrow() {
    return () => {
      console.log(this.name);
    };
  }
};

const fn = p2.getArrow();
fn();

// 10 
let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);

//12 sorting 
// :everything undefined, null, empty is pushed to end
const data = [
  { name: 'Alice', age: 45 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
];

const result = data.sort((a, b) => a.age - b.age);

console.log(result);
// --
console.log([3, undefined, 1, , 2, null].sort());
console.log([true, false, true, false].sort());

// ---
 

