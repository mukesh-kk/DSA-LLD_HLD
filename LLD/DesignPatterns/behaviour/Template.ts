// The Template Method Pattern defines the skeleton of an algorithm in a base class,
//  letting subclasses override certain steps of t
// the algorithm without changing the overall structure.

abstract class DataProcessor{
    public process(data:string):void{
        this.loadData(data)
        this.transformData()
        this.saveData()
    }

    protected abstract loadData(data:string):void
    protected abstract transformData():void     
    protected abstract saveData():void
}


class JSONDataProcessor extends DataProcessor{
    protected loadData(data: string): void {
        console.log(`Loading JSON data: ${data}`)
    }
    protected transformData(): void {
        console.log('Transforming JSON data')
    }
    protected saveData(): void {
        console.log('Saving JSON data')
    }
}

class XMLDataProcessor extends DataProcessor{
    protected loadData(data: string): void {
        console.log(`Loading XML data: ${data}`)
    }
    protected transformData(): void {
        console.log('Transforming XML data')
    }
    protected saveData(): void {
        console.log('Saving XML data')
    }
}

const csvProcessor = new XMLDataProcessor();
csvProcessor.process('sdsds');
// 📥 Loading CSV data
// 🔄 Converting CSV rows to objects
// 💾 Saving cleaned CSV

const jsonProcessor = new JSONDataProcessor();
jsonProcessor.process('dsadas');
// 📥 Loading JSON data
// 🔄 Parsing JSON
// 💾 Saving processed JSON
