// [Client] → [Handler1] → [Handler2] → [Handler3]
//  the one that passes a request down a chain of handlers until one of 
// them handles it. Great for decoupling sender and receiver!

interface Handler{
    setNext(handler:Handler):Handler;
    handle(request:number):void
}

abstract class Approver implements Handler{
    protected nextApprover:Handler |null=null
    setNext(handler: Handler): Handler {
        this.nextApprover=handler
        return handler
    }
    abstract handle(request: number): void;
}

class Director extends Approver{
    handle(request: number): void {
        if(request<=1000){
            console.log('Director approved')
        }else{
            this.nextApprover?.handle(request)
        }
    }
}
class VicePresident extends Approver{
    handle(request: number): void {
        if(request<=5000){
            console.log('Vice President approved')
        }else{
            this.nextApprover?.handle(request)
        }
    }
}class President extends Approver{      
    handle(request: number): void {
        if(request<=10000){
            console.log('President approved')
        }else{
            if (this.nextApprover===null){
                console.log('Request denied')
            }else{
            this.nextApprover?.handle(request)}
        }
    }
}

new Director()
.setNext(new VicePresident()).setNext(new President())
.handle(2000)
