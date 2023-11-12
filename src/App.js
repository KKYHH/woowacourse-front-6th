import ChristmasController from "./controller/ChristmasController.js";
class App {
  async run() {
    const chirstmasController = new ChristmasController;
    chirstmasController.startReservation();
  }
}

const app = new App();
app.run();
export default App;
