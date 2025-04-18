// [Colleague A] ↔️  
//                \
//                 [Mediator]  
//                /
// [Colleague B] ↔️
// Instead of components talking directly to each other, 
// they talk through the mediator.

//This keeps components loosely coupled and simplifies maintenance.

interface ChatMediator{
    sendMessage(message:string,sender:User):void;
    addUser(user:User):void;
}

class User{
    private name:string;
    private mediator:ChatMediator|null=null
    constructor(name:string, mediator:ChatMediator|null=null){
        this.name=name
        this.mediator=mediator
    }
    
    send(message:string):void{
        this.mediator?.sendMessage(message,this)
    }
    receive(message:string,from:User):void{
        console.log(`${this.name} received: ${message} from ${from.name}`)
    }   


}
class ChatGroup implements ChatMediator{
    private users:User[]=[];
    sendMessage(message:string,sender:User):void{
        for(let user of this.users){
            if(user!==sender){
                user.receive(message,sender)
            }
        }
    }
    addUser(user:User):void{
        this.users.push(user)
    }
}

const ccGroup=new ChatGroup()
const user1=new User('Alice',ccGroup)
const user2=new User('Bob',ccGroup) 
const user3=new User('Charlie',ccGroup)
const user4=new User('Dave',ccGroup)
ccGroup.addUser(user1)
ccGroup.addUser(user2)          
ccGroup.addUser(user3)
ccGroup.addUser(user4)
user1.send('Hello everyone!')
user2.send('Hi Alice!')
user3.send('Hello Alice!')
