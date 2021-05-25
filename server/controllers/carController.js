const { nanoid } = require("nanoid");
const { cars } = require("./listOfCars");

module.exports = {
   getCars: (req, res) => {
      res.status(200).send(cars);
   },

   addCars: (req, res) => {
      const { make, model, year, horsePwr, price, img } = req.body;
      const car = {
         make,
         model,
         year,
         horsePwr,
         price,
         img,
         id: nanoid(),
      };
      cars.unshift(car);
      res.status(200).send(cars);
   },
   editCars: (req, res) => {
      const { id } = req.params;
      const { make, model, year, horsePwr, price } = req.body;
      const index = cars.findIndex((e) => {
         return e.id === id;
      });
      console.log(index);
      cars[index] = {
         ...cars[index],
         make: make,
         model: model,
         year: year,
         horsePwr: horsePwr,
         price: price,
      };
      res.status(200).send(cars);
   },
};
