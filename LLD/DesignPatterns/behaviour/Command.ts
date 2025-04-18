// # 🧠 What is the Command Pattern?
// # The Command Pattern turns a request into an object, which allows you to:

// # Parameterize clients with operations

// # Queue or log requests

// # Support undoable operations
// #       Client → [Invoker]
// #               ↓
// #        [Command Interface]
// #         ↙            ↘
// # [ConcreteCommand1] [ConcreteCommand2]
// #               ↓
// #          [Receiver]


interface Command{
    execute ():void;
}

// receiver
class Light{
    turnOn():void{
        console.log('Turned ON')
    }
    turnOff():void{
        console.log('Turn Off')
    }
}
class LightOnCommand implements Command{
    private light:Light;

    constructor(light:Light){
            this.light=light
    }
    execute(): void {
        this.light.turnOn()
    }
}

class LightOffCommand implements Command{
    private light:Light;
    constructor(light:Light){
        this.light=light
    }
    execute(): void {
        this.light.turnOff()
    }
}


class RemoteControl{
    private cmd:Command|null  =null 

    setCommand(command:Command):void{
            this.cmd=command
    }
    pressBtn():void{
        this.cmd?.execute()
    }
}

const rc=new RemoteControl()
rc.setCommand(new LightOffCommand(new Light()))
rc.pressBtn()
