const { cars } = require("./listOfCars");

let dreamGarage = [];

module.exports = {
   getGarage: (req, res) => {
      res.status(200).send([...dreamGarage]);
   },

   addCar: (req, res) => {
      const { id } = req.body;
      // console.log(req.body);
      const car = cars.find((e) => {
         return e.id == id;
      });
      if (car == null) {
         res.send({ success: false, message: `${id} not found` });
         return;
      }
      dreamGarage.push(car);
      res.status(200).send(dreamGarage);
   },

   deleteGarage: (req, res) => {
      const { id } = req.params;
      const newGarageArray = dreamGarage.filter((carObj) => {
         console.log(carObj);
         return carObj.id !== id;
      });
      dreamGarage = newGarageArray;
      console.log(id);
      // dreamGarage.splice(index, 1);
      res.status(200).send(dreamGarage);
   },
};
