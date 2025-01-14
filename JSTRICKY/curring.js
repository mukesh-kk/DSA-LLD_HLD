// Write a function to make the following code snippet work? Expert 🚀
// console.log(sum(4, 6, 8, 10).value); //output - 28
// console.log(sum(4)(6)(8)(10).value); //output - 28


//concept : argument + closure + recursion +curring

function sum(...args){
    
    const funx= (num)=>{
        return sum(...args,num)
    }
    funx.value=args.reduce((p,c)=>p+c,0);
    return funx
}

// console.log(sum(4, 6, 8, 10).value); //output - 28
// console.log(sum(4)(6)(8)(10).value); //output - 28
  

// auto currying 
// concepts : recursion+ closure + arguments of fucntion + currying


function curry(func){
    return function curried(...args){
        if(args.length>=func.length){
            return func(...args)
        }else{
            return function(...nextArgs){
                return curried(...args,...nextArgs)
            }
        }
    }
}

const multiplier=(a,b,c)=>a*b*c;

const curriesMultiplier=curry(multiplier);

console.log(curriesMultiplier(1,2,3))
console.log(curriesMultiplier(1,2)(3))
console.log(curriesMultiplier(1)(2)(3))
console.log(curriesMultiplier(1)(2,3))




