
// The Composite Pattern lets you treat individual objects and 
// compositions of objects uniformly.

interface FileSystemComponent {
    show(indent?: string): void;
  }

  
class Files implements FileSystemComponent {
    constructor(private name: string) {}
  
    show(indent: string = ''): void {
      console.log(`${indent}- 📄 ${this.name}`);
    }
  }
  
class Folder implements FileSystemComponent {
    private children: FileSystemComponent[] = [];
  
    constructor(private name: string) {}
  
    add(component: FileSystemComponent) {
      this.children.push(component);
    }
  
    show(indent: string = ''): void {
      console.log(`${indent}+ 📁 ${this.name}`);
      for (const child of this.children) {
        child.show(indent + '  ');
      }
    }
  }
  
const root = new Folder("root");
const src = new Folder("src");
const dist = new Folder("dist");

src.add(new Files("index.ts"));
src.add(new Files("utils.ts"));

dist.add(new Files("bundle.js"));

root.add(src);
root.add(dist);
root.add(new Files("readme.md"));

root.show();
