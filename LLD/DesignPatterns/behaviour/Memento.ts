// The Memento Pattern lets you capture and restore an object’s internal 
// state without violating encapsulation.

// It’s all about saving the state somewhere so you can roll back later — like Ctrl + Z.



// Originator | The object whose state needs to be saved
// Memento | A snapshot of the originator's state
// Caretaker | Manages memento history (like Undo Manager)

class TextEditor {
    private content: string = '';

    public setContent(content: string): void {
        this.content = this.content + content;
    }

    public getContent(): string {
        return this.content;
    }

    public save(): Memento {
        return new Memento(this.content);
    }

    public restore(memento: Memento): void {
        this.content = memento.getContent();
    }
}

class Memento{
    private readonly content:string
    constructor(content:string){
        this.content=content     
                   }

    getContent():string{
        return this.content
    }

}

class Caretaker{
    private mementos:Memento[]=[]

    addMemento(memento:Memento):void{
        this.mementos.push(memento)
    }

    pop():Memento|undefined{
        if (this.mementos.length===0){
            return undefined
        }
        return this.mementos.pop()
    }
    clear():void{
        this.mementos=[]
    }
}

const editor = new TextEditor();
const caretaker = new Caretaker()
editor.setContent('Hello, ');
caretaker.addMemento(editor.save()) 
editor.setContent('world! ');
caretaker.addMemento(editor.save()) 
editor.setContent('This is a memento pattern example.');

caretaker.addMemento(editor.save())

console.log('Current content:', editor.getContent());
console.log('Undoing last change...');
caretaker.pop()
editor.restore(caretaker.pop()!)


console.log(editor.getContent())



