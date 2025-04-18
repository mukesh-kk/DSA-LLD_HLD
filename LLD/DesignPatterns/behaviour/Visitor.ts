//The Visitor Pattern is super useful when you want to add
//  operations to a group of objects without changing their classes
// You separate the algorithm from the objects.


interface Animal {
    accept(visitor: AnimalVisitor): void;
  }


  class Monkey implements Animal {
    accept(visitor: AnimalVisitor): void {
      visitor.visitMonkey(this);
    }
  
    shout() {
      console.log("Monkey: Ooh ooh aah aah!");
    }
  }
  
  class Lion implements Animal {
    accept(visitor: AnimalVisitor): void {
      visitor.visitLion(this);
    }
  
    roar() {
      console.log("Lion: Roaaar!");
    }
  }
  

  interface AnimalVisitor {
    visitMonkey(monkey: Monkey): void;
    visitLion(lion: Lion): void;
  }
  


  class Vet implements AnimalVisitor {
    visitMonkey(monkey: Monkey): void {
      console.log("Vet checks the monkey's health .");
      monkey.shout();
    }
  
    visitLion(lion: Lion): void {
      console.log("Vet checks the lion's health. rigoroulsy");
      lion.roar();
    }
  }

  class Zookeeper implements AnimalVisitor {
    visitMonkey(monkey: Monkey): void {
      console.log("Zookeeper feeds the monkey. apple ");
    }
  
    visitLion(lion: Lion): void {
      console.log("Zookeeper feeds the lion. meat");
    }
  }
  