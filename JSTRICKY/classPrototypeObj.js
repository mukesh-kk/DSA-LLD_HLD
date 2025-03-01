const _radius = Symbol(); // Private variable
const secret = Symbol(); // private method
const _color=Symbol()

class Circle {
    momo=null
    constructor(r, c) {
        this[_radius] = r;  // Private property
        this[_color] = c;  
    }

    [secret](str) { // Private method
        console.log(str);
    }

    static neededStuff() { // available with instance of class
        console.log("You need to tell me the radius, I will give you a circle object.");
    }

    get radius() {
        return this[_radius];
    }

    get color() {
        this[secret]("called private methid")
        return this[_color];
     
    }

    set color(c) {
        this[_color] = c; 
    }
}

// const cirl=new Circle(1,3)
// console.log(cirl.color) //get 3
// cirl.color=2 //set
// console.log(cirl.color) //get 2

/////////////////////////////////////////////////////////////////////

//--------------- Getting Property  Decription and changing them-------------
// Object.getOwnPropertyDescriptors(prototype) & Object.getOwnPropertyDescriptor(prototype,propertyname)
/**
 * 🔹 Summary Table
Property	Effect
writable: true	✅ Value can be changed
writable: false	❌ Value cannot be changed (read-only)
enumerable: true	✅ Shows in loops (for...in, Object.keys())
enumerable: false	❌ Hidden from loops
configurable: true	✅ Can be deleted/modified
configurable: false	❌ Cannot be deleted or modified
 */
class Person {
    constructor(name){
        this._name=name
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

mukesh=new Person('Mukesh') //create object  -> you can configure object property only not of class's
const allDescription=Object.getOwnPropertyDescriptors(mukesh)
const nameDescrition=Object.getOwnPropertyDescriptor(mukesh,'_name')
let x=null
Object.defineProperty(mukesh,'_name',{
    enumerable:false,
    configurable:false,
    get:()=>{
        return x
    },
    set:(a)=>{
        x=a +a
    }
})

mukesh._name="ANjali"
console.log(mukesh._name,Object.keys(mukesh))



//---------------------freeze vs seal-------------------------------------------------->
// --------- 
// Object.freeze()
// Fully immutable: No adding, deleting, or modifying properties.
// Property descriptors and prototype cannot be changed.
// Object.seal()
// Structure is locked (no adding/deleting properties), but values can be modified.
// Property descriptors and prototype cannot be changed.





const obj1 = { name: "Alice", age: 25 };
Object.freeze(obj1);

obj1.age = 30; // ❌ Doesn't change (silent in non-strict mode, throws error in strict mode)
obj1.city = "New York"; // ❌ Cannot add new properties
delete obj1.name; // ❌ Cannot delete properties

console.log(obj1); // { name: "Alice", age: 25 }

const obj2 = { name: "Bob", age: 28 };
Object.seal(obj2);

obj2.age = 30; // ✅ Allowed (modifying existing property)
obj2.city = "Los Angeles"; // ❌ Cannot add new properties
delete obj2.name; // ❌ Cannot delete properties

console.log(obj2); // { name: "Bob", age: 30 }
