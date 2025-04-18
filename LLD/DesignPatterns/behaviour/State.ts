//The State Pattern lets an object change its behavior when
//  its internal state changes
// , as if the object’s class changed

// State Interface
interface State {
    handle(context: TrafficLight): void;
  }
  
  // Context
class TrafficLight {
    private state: State;
  
    constructor(state: State) {
      this.state = state;
    }
  
    setState(state: State) {
      this.state = state;
    }
  
    request() {
      this.state.handle(this);
    }
  }
  
  // Concrete States
  class GreenLight implements State {
    handle(context: TrafficLight) {
      console.log("🟢 Green light — Cars can go");
      context.setState(new YellowLight());
    }
  }
  
  class YellowLight implements State {
    handle(context: TrafficLight) {
      console.log("🟡 Yellow light — Slow down");
      context.setState(new RedLight());
    }
  }
  
  class RedLight implements State {
    handle(context: TrafficLight) {
      console.log("🔴 Red light — Stop");
      context.setState(new GreenLight());
    }
  }
  