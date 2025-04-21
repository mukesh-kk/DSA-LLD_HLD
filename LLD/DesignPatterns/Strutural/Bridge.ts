// The Bridge Pattern decouples an abstraction from
//  its implementation so that both can evolve independently.

interface Device {
    turnOn(): void;
    turnOff(): void;
  }

  class TV implements Device {
    turnOn() {
      console.log("📺 TV is now ON");
    }
  
    turnOff() {
      console.log("📺 TV is now OFF");
    }
  }
  
  class Projector implements Device {
    turnOn() {
      console.log("📽️ Projector is now ON");
    }
  
    turnOff() {
      console.log("📽️ Projector is now OFF");
    }
  }

class DeviceRemoteControl {
    constructor(protected device: Device) {}
  
    turnOnDevice() {
      this.device.turnOn();
    }
  
    turnOffDevice() {
      this.device.turnOff();
    }
  }
  