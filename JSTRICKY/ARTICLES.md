# Interview Questions

[Hoisting](https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/)

[ArrowVsNormalFunction](https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/)

<br/>

# Normal Function Vs Arrow #
🔥 Key Differences 🔥
<br/>
|Feature |	Normal Function |	Anonymous Function	| Arrow Function|
|--------| -----------------| ----------------------| --------------|
| Name	  | Yes (Optional)|	No |No|
|  Hoisting 	| 	Yes		| No	| 	No
| `this` Context	  | 	Own this		| Own this	| 	Inherits this	| 
| `arguments` Object   	|  	Yes		| Yes	| 	No	| 
| Short Syntax	| 	No	| 	No	| 	Yes	| 


<br/>
<br/>
<br/>

🔥 Key Differences Bind Call Apply  🔥
<br/>

| Method  | When to Use | Arguments Passing | Calls Function Immediately? | Example |
|---------|------------|-------------------|-----------------------------|---------|
| `call()`  | When you want to invoke a function with a specific `this` | Passed individually | ✅ Yes | ```greet.call(person, "Hello", "!")``` |
| `apply()` | When you want to invoke a function and pass arguments as an array | Passed as an array | ✅ Yes | `greet.apply(person, ["Hi", "!!"])` |
| `bind()`  | When you want to create a new function with `this` permanently set | Passed individually | ❌ No (returns a function) | `const greetAlice = greet.bind(person, "Hey"); greetAlice("?");` |
<br/>

