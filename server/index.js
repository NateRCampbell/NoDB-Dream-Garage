const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 6515;

const carCtrl = require("./controllers/carController");
const garageCtrl = require("./controllers/garageController");

app.use(express.json(), cors());

app.get("/api/cars", carCtrl.getCars);
app.post("/api/cars", carCtrl.addCars);
app.put("/api/cars/:id", carCtrl.editCars);

app.get("/api/garage", garageCtrl.getGarage);
app.post("/api/garage/add", garageCtrl.addCar);
app.delete("/api/garage/remove/:id", garageCtrl.deleteGarage);

app.listen(PORT, () => console.log(`Server is listening on port:${PORT}`));
