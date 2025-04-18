// You don’t care how the data is stored —
//  you just want to go through it in order.

interface Iterator1<T> {
    hasNext(): boolean;
    next(): T;
}

interface Iterable1<T> {
    createIterator(): Iterator1<T>;
}
class NameCollection implements Iterable1<string> {
    private names: string[] = [];

    add(name: string): void {
        this.names.push(name);
    }

    createIterator(): Iterator1<string> {
        return new NameIterator(this.names);
    }

    
}

class NameIterator implements Iterator1<string> {
    private index: number = 0;
    constructor(private names: string[]=[]) {
        this.names = names;
    }

    hasNext(): boolean {
        return this.index < this.names.length;
    }

    next(): string {
        if (this.hasNext()) {
            return this.names[this.index++];
        }
        return null as any; // or throw an error
    }
}

const names = new NameCollection();
names.add("Alice"); 
names.add("Bob");
names.add("Charlie");
names.add("Dave");
names.add("Eve");

const iterator=names.createIterator()

while(iterator.hasNext()){
    console.log(iterator.next())
}

