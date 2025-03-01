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
writable: true	✅ Value can be changed writable: false	❌ Value cannot be changed (read-only)
enumerable: true	✅ Shows in loops (for...in, Object.keys()) enumerable: false	❌ Hidden from loops
configurable: true	✅ Can be deleted/modifiedconfigurable: false	❌ Cannot be deleted or modified
                    
                    [Object Base ] ❌
                        ^
                        |
                    [PersonBase]:  ✅ Object.getPrototype(mukesh)| Person.prototype | mukesh.__proto__
                       ^
                       |
                    mukesh ->instance🔥

                    {🔥
                    _name:"Mukesh", ------>own
                    fetch():{},--->own

                    [[prototype]] { ✅
                      constuctor(){} ---->prototype
                      fetch2(){} ---->prototype
                      fetch3(){} ---->prototype

                        [[prototype] { ❌
                            constuctor(){}
                            toString(){}
                            valueOf(){}
                            hasOwnProperty(){}

                      }
                     }
                }
}
 */
class Person {
    constructor(name){
        this._name=name // instance member 
        this.fetch=function(){ // instance member  or own Property
            return "Banglore"
        }
    }
    fetch2(){// prototype member -> Person.prototype or Object.getPrototype(mukesh)  ie Person Base

        return 'Banglore'  
    }
}
Person.prototype.fetch3=function(){ // prototype member
    return this._name
}

mukesh=new Person('Mukesh') //create object  -> you can configure object property only not of class's
const allDescription=Object.getOwnPropertyDescriptors(mukesh)
const nameDescrition=Object.getOwnPropertyDescriptor(mukesh,'_name')
// console.log(allDescription)
let x=null
Object.defineProperty(mukesh,'_name',{
    configurable:false,
    get:()=>{
        return x
    },
    set:(a)=>{
        x=a +a
    }
})

mukesh._name="ANjali"
// console.log(mukesh._name,Object.keys(mukesh))
// console.log(Object.keys(mukesh)) // lists only own property
// for (let k in mukesh)console.log(k ) // enumerates all properties (own+prototype)


//---------------------Freeze vs Seal-------------------------------------------------->
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
// 
// console.log(obj1); // { name: "Alice", age: 25 }

const obj2 = { name: "Bob", age: 28 };
Object.seal(obj2);

obj2.age = 30; // ✅ Allowed (modifying existing property)
obj2.city = "Los Angeles"; // ❌ Cannot add new properties
delete obj2.name; // ❌ Cannot delete properties

// console.log(obj2); // { name: "Bob", age: 30 }


// -------------Object Utils-------
// ----Object.create------- Object.assign -----Object.defineProperty------->

// Object.assign(a,b)
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
// console.log(target);
// console.log(returnedTarget === target); //true
const hehe={ 
    isHuman: true,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
}
const newObjFromPrototype=Object.create(hehe,{name:{enumerable:true,value:'mukesh'}}) 
//hehe:  The object which should be the prototype of the newly-created object. second:property descriptors
Object.defineProperty(hehe,'address',{value:'Banglore',writable:false})
Object.defineProperties(hehe,{t1:{value:1},t2:{value:"2"}})

// console.log(Object.getPrototypeOf(newObjFromPrototype)==hehe)
// console.log(hehe.address,hehe.t1)