const { nanoid } = require("nanoid");

let cars = [
   {
      id: nanoid(),
      make: "AMG",
      model: "S 63",
      year: "2020",
      horsePwr: "603",
      price: "152,000",
      img:
         "https://www.autozeitung.de/assets/styles/article_image/public/field/images/mercedes-amg-s-63-x-tomi-design.jpg?itok=GT0c5A8Y",
   },
   {
      id: nanoid(),
      make: "BMW",
      model: "M2 Competition",
      year: "2020",
      horsePwr: "405",
      price: "59,000",
      img:
         "https://cdn.bmwblog.com/wp-content/uploads/2018/09/BMW-M2-Competition-Sunset-Orange-review-15.jpg",
   },
   {
      id: nanoid(),
      make: "BMW",
      model: "M8 Competition",
      year: "2020",
      horsePwr: "617",
      price: "146,000",
      img:
         "https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2020/10/DSC01458.jpg?quality=100&strip=all",
   },
   {
      id: nanoid(),
      make: "BMW",
      model: "M5 Competition",
      year: "2020",
      horsePwr: "617",
      price: "110,000",
      img:
         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90390718-highres-1592255347.jpg",
   },
   {
      id: nanoid(),
      make: "McLaren",
      model: "F1",
      year: "1998",
      horsePwr: "618",
      price: "19,000,000",
      img:
         "https://mclaren.scene7.com/is/image/mclaren/MSO-Heritage-1920x1080:crop-16x9?wid=1920&hei=1080",
   },
   {
      id: nanoid(),
      make: "Bugatti",
      model: "Type 57S",
      year: "1937",
      horsePwr: "135",
      price: "9,500,000",
      img:
         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1937-bugatti-type-57s-atalante-02-1-1598549861.jpg?crop=1.00xw:0.754xh;0,0.142xh&resize=980:*",
   },
   {
      id: nanoid(),
      make: "Bugatti",
      model: "Chiron Super Sport 300+",
      year: "2020",
      horsePwr: "1577",
      price: "3,900,000",
      img: "https://cdn.carbuzz.com/gallery-images/1600/705000/200/705208.jpg",
   },
   {
      id: nanoid(),
      make: "Toyota",
      model: "Corolla",
      year: "2021",
      horsePwr: "139",
      price: "20,000",
      img:
         "https://cars.usnews.com/static/images/Auto/izmo/i159614041/2021_toyota_corolla_angularfront.jpg",
   },
   {
      id: nanoid(),
      make: "dodge",
      model: "Challenger SRT Demon",
      year: "2018",
      horsePwr: "808",
      price: "85,000",
      img:
         "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoWxZIxTjnW_M0skJCq1WqEPy3IRbglaPgk08GfOLiU9W8nyYj",
   },
];

module.exports = {
   cars,
};
