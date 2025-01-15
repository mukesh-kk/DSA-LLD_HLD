class EventBus {
    constructor() {
      this.events = {}; // Object to store event callbacks
    }
  
    // Subscribe to an event
    subscribe(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = []; // Initialize event list if not present
      }
      this.events[eventName].push(callback); // Add callback to the event list
    }
  
    // Unsubscribe from an event
    unsubscribe(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
      }
    }
  
    // Publish an event
    publish(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(callback => callback(data)); // Invoke all callbacks
      }
    }
  }
  
  // Example Usage
  const eventBus = new EventBus();
  
  // Subscriber 1
  const listener1 = (data) => {
    console.log(`Listener 1 received data: ${data}`);
  };
  
  // Subscriber 2
  const listener2 = (data) => {
    console.log(`Listener 2 received data: ${data}`);
  };
  
  // Subscribe to an event
  eventBus.subscribe('myEvent', listener1);
  eventBus.subscribe('myEvent', listener2);
  
  // Publish the event
  console.log("Publishing 'myEvent' with data 'Hello World!'");
  eventBus.publish('myEvent', 'Hello World!');
  
  // Unsubscribe a listener
  console.log("Unsubscribing Listener 1 from 'myEvent'");
  eventBus.unsubscribe('myEvent', listener1);
  
  // Publish again to see the effect
  console.log("Publishing 'myEvent' again with data 'Hello Again!'");
  eventBus.publish('myEvent', 'Hello Again!');
  