// Target object
const person = {
    name: "John",
    age: 25
  };
  
  // Handler to define custom behavior for operations
  const handler = {
    get(target, prop) {
      if (prop in target) {
        return `Property "${prop}" is: ${target[prop]}`;
      } else {
        return `Property "${prop}" not found!`;
      }
    },
    set(target, prop, value) {
      if (prop === "age" && value < 0) {
        console.log("Age cannot be negative!");
      } else {
        target[prop] = value;
      }
    }
  };
  
  // Create the Proxy
  const proxyPerson = new Proxy(person, handler);
  
  // Using the proxy
  console.log(proxyPerson.name);  // Output: Property "name" is: John
  console.log(proxyPerson.age);   // Output: Property "age" is: 25
  console.log(proxyPerson.gender);  // Output: Property "gender" not found!
  
  // Setting properties
  proxyPerson.age = -5;  // Output: Age cannot be negative!
  proxyPerson.age = 30;  // Successfully sets age to 30
  console.log(proxyPerson.age);  // Output: Property "age" is: 30
  