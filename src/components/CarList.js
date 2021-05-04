import { Component } from "react";
import axios from "axios";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
// import GarageList from "./GarageList";

const imgStyle = {
   height: "150px",
};

class CarList extends Component {
   constructor() {
      super();
      this.state = {
         carsArray: [],
      };
   }

   componentDidMount() {
      axios
         .get("/api/cars")
         .then((res) => {
            // console.log(res);
            this.setState({ carsArray: res.data });
         })
         .catch((err) => {
            alert(err);
         });
   }

   addCar = (make, model, year, horsePwr, price, img) => {
      axios
         .post(`/api/cars`, { make, model, year, horsePwr, price, img })
         .then((res) => {
            this.setState({ carsArray: res.data });
         })
         .catch((err) => {
            console.log(err);
         });
   };
   // addGarage = (id) => {
   //    axios
   //       .post("api/garage/add", { id })
   //       .then((res) => {
   //          // this.setState({ carsArray: res.data });
   //          console.log(res.data);
   //       })
   //       .catch((err) => {
   //          console.log(err);
   //       });
   // };
   editCar = (id, make, model, year, horsePwr, price) => {
      axios
         .put(`api/cars/${id}`, {
            make,
            model,
            year,
            horsePwr,
            price,
         })
         .then((res) => {
            this.setState({ carsArray: res.data });
         })
         .catch((err) => {
            console.log(err);
         });
   };

   render() {
      console.log(this.state.carsArray);
      return (
         <div>
            <AddCar addCar={this.addCar} />
            {this.state.carsArray.map((cars) => {
               return (
                  <div className="carInfo" style={{ padding: "20px" }}>
                     <img src={cars.img} style={imgStyle} />
                     <div> Make: {cars.make} </div>
                     <div> Model: {cars.model}</div>
                     <div> Year: {cars.year}</div>
                     <div> Horse Power: {cars.horsePwr}bhp</div>
                     <div> Price: ${cars.price}</div>
                     <EditCar editCar={this.editCar} />
                     <button
                        onClick={() => {
                           this.props.addGarage(cars.id);
                        }}
                     >
                        Add to Garage
                     </button>
                  </div>
               );
            })}
         </div>
      );
   }
}

export default CarList;
