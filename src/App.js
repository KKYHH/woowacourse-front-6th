import EventController from "./controller/EventController.js";
class App {
  async run() {
    const eventController = new EventController();
    eventController.startReservation();
  }
}

const app = new App();
app.run();

export default App;