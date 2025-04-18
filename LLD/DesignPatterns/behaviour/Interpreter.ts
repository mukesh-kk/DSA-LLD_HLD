// The Interpreter Pattern defines a way to evaluate language grammar or expressions. 
// It’s useful when you have a 
// domain-specific language (DSL) or a set of rules to process.


// Basic Structure
// Expression interface: Declares an interpret() method

// Terminal expressions: Final values (e.g., numbers, booleans)

// Non-terminal expressions: Combine expressions (e.g., AND, ADD, SUBTRACT


interface Expression {
    interpret(): boolean;
  }


  // termical expressions
class Literal implements Expression {
    constructor(private value: boolean) {
        this.value = value;
    }
  
    interpret(): boolean {
      return this.value;
    }
  }
  
 // Non-terminal expressions
  class AndExpression implements Expression {
    constructor(private left: Expression, private right: Expression) {
        this.left = left;
        this.right = right;
    }
  
    interpret(): boolean {
      return this.left.interpret() && this.right.interpret();
    }
  }
  
  class OrExpression implements Expression {
    constructor(private left: Expression, private right: Expression) {
        this.left = left;
        this.right = right;
    }
  
    interpret(): boolean {
      return this.left.interpret() || this.right.interpret();
    }
  }
  
  
const trueExp = new Literal(true);
const falseExp = new Literal(false);

const andExpr = new AndExpression(trueExp, falseExp); // true AND false
const orExpr = new OrExpression(trueExp, falseExp);   // true OR false

console.log("true AND false =", andExpr.interpret()); // false
console.log("true OR false =", orExpr.interpret());   // true
