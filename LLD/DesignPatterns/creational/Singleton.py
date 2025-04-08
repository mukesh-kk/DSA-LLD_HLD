class Singleton:
    _instance=None # 👈 class/static variable

    def __new__(cls): # called before __init__
        if cls._instance is None:
            cls._instance=super().__new__(cls)
        return cls._instance
# __new__ should always return instance
# __init__ -> modify obj
# __new__ -> create obj 



# JS 

'''class Singleton{

        construtor(){
            if(Singleton.ins){
                return Singleton.ins
            }
            Singlton.ins=this // store on class itself

            // consturctor implicitely returns this if we don't return anything
        }
 }
# '''

