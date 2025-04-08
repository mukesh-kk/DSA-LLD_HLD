class Singleton{
    private static instance: Singleton;
    constructor(){
        if (Singleton.instance) {
            return Singleton.instance;
        }
        return  Singleton.instance=this
    }
}

console.log(new Singleton()==new Singleton())// true
