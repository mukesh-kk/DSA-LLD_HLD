//  Note: 'for of' can only work on  objects that have iterator


/**
 * Any object that returns [Symbol.iterator](){} can be iterated with for of
 */
const print=console.log
const arr={
    data:[1,2,4,5],
    push:function(a){
        this.data.push(a)
    },
    [Symbol.iterator]:function(){ // returns object that return next()->{value,done}
        let index=0
        return {
            next:()=>{
                if (index>=this.data.length){
                    return {done:true,}
                }else{
                    return {done:false,value:this.data[index++]}
                }
            }
        }
    }
}

// for (let a of arr){
//     print(a) // 1,2,4,5
// }
// const iterator =arr[Symbol.iterator]()
// print(iterator.next())  //1 
// print(iterator.next())//2
// print(iterator.next())//3
// print(iterator.next())//4
// print(iterator.next()) //done
// print(iterator.next()) //done


//  Generators : used for lazy execution ie pausing and playing a function
// Generators use iterators underthe hood
function * generator(){
    yield 1
    yield 100
    yield 'Mukesh'
}
//  const gen=generator()
// for (let a of generator()){
//     print(a)
// }
function * infiniteCounter(){
    let i=0
    while (true){
        yield i++
    }

}
// const abc= infiniteCounter()
// print(abc.next())
// print(abc.next())
// print(abc.next())
// print(abc.next())
// print(abc.next())


