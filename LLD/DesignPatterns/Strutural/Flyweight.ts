// //
// The Flyweight Pattern is used to minimize memory usage by sharing as much data as possible with similar objects. 
// It’s great when you have lots of similar objects.

// When to Use?
// You need to create a large number of objects.

// Many of those objects share common data (intrinsic).

// You can separate shared state (intrinsic) from unique state (extrinsic).


// Flyweight (Shared Object)
// The Flyweight Pattern is all about sharing data to minimize memory usage.
class CharacterStyle {
    constructor(
      public font: string,
      public size: number,
      public color: string
    ) {}
  }

  //Flyweight Factory
  class StyleFactory {
    private styles: Map<string, CharacterStyle> = new Map();
  
    getStyle(font: string, size: number, color: string): CharacterStyle {
      const key = `${font}-${size}-${color}`;
      if (!this.styles.has(key)) {
        this.styles.set(key, new CharacterStyle(font, size, color));
      }
      return this.styles.get(key)!;
    }
  }
  

  // Context (Unshared Object)

  class Character {
    constructor(
      private char: string,
      private style: CharacterStyle,
      private position: number // extrinsic state
    ) {}
  
    render() {
      console.log(`Char: '${this.char}' at pos ${this.position}, style: ${this.style.font}, ${this.style.size}px, ${this.style.color}`);
    }
  }
  

//   #Usage Example
const factory = new StyleFactory();

const style1 = factory.getStyle("Arial", 12, "black");
const style2 = factory.getStyle("Arial", 12, "black"); // reused

console.log(style1 === style2); // true ✅

const c1 = new Character("H", style1, 0);
const c2 = new Character("i", style2, 1);

c1.render();
c2.render();

  