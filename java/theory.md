4. Multithreading & Concurrency
"Explain the difference between synchronized methods and synchronized blocks. How would you handle a scenario where multiple threads need to update a shared counter safely?"
Tests: Concurrency knowledge, thread safety understanding, and practical problem-solving.

5. Java Collections & Performance
"When would you use HashMap vs ConcurrentHashMap vs LinkedHashMap? How do you optimize performance when dealing with large collections in a backend service?"
Tests: Collections framework knowledge, performance considerations, and memory management.


6. Java 8+ Features & Functional Programming
"Explain Stream API with examples. What's the difference between map() and flatMap()? How do lambda expressions work, and what are method references? Compare functional interfaces like Predicate, Function, and Consumer.


7.Multithreading Challenge
Problem: Implement a thread-safe counter that can be incremented by multiple threads. Then create a scenario where 10 threads each increment it 1000 times. Ensure the final count is exactly 10,000.
Tests: Thread safety, synchronization, concurrent execution

8."How does Optional help prevent NullPointerException? Show different ways to create Optional objects and chain operations. When should you NOT use Optional?"

9."Explain default methods in interfaces. How do they solve the interface evolution problem? What happens when a class implements two interfaces with the same default method signature?"
Tests: Interface design, backward compatibility, diamond problem resolution

10. Method References & Functional Interfaces
"What are the four types of method references? Convert these lambda expressions to method references and explain when you'd use each approach. What makes an interface 'functional'?"
javalist.stream().map(s -> s.toUpperCase())
list.stream().filter(s -> s.isEmpty())
list.stream().map(String::valueOf)

fix this

public class ThreadSafeCounter {
    private int count = 0; 
    public  void increment() { count++; } 
    public int getCount() { return count; }
    
    public static void main(String[] args) {
        ThreadSafeCounter counter = new ThreadSafeCounter();
        Thread[] threads = new Thread[10]; 
        
        for (int i = 0; i < 10; i++) 
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) counter.increment();
            });
        
        for (Thread t : threads) t.start(); 
        for (Thread t : threads) try { t.join(); } catch (InterruptedException e) { e.printStackTrace(); } 
        
        System.out.println("Final count: " + counter.getCount()); 
    }
}
