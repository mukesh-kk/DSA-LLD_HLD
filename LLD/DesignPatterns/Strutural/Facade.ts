// # The Facade Pattern provides a unified 
// # interface to a Set of interfaces in a subsystem. 
// # It hides the complexities and provides
// # a simpler API to the client.


//subssytems

class TVsystem {
  turnOn() { console.log("TV is ON"); }
  setInput(source: string) { console.log(`Input set to ${source}`); }
}

class SoundSystem {
  turnOn() { console.log("Sound System is ON"); }
  setVolume(level: number) { console.log(`Volume set to ${level}`); }
}

class StreamingService {
  connect() { console.log("Connected to Netflix"); }
  play(movie: string) { console.log(`Playing ${movie}`); }
}


// Facade class

class HomeTheaterFacade {
  constructor(
    private tv: TVsystem,
    private sound: SoundSystem,
    private stream: StreamingService
  ) {}

  watchMovie(movie: string) {
    console.log("\n--- Setting up movie night ---");
    this.tv.turnOn();
    this.tv.setInput("HDMI");
    this.sound.turnOn();
    this.sound.setVolume(10);
    this.stream.connect();
    this.stream.play(movie);
  }
}

const facade = new HomeTheaterFacade(new TVsystem(), new SoundSystem(), new StreamingService());
facade.watchMovie("Inception");
