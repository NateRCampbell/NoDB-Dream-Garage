import { Component } from "react";
import axios from "axios";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
// import GarageList from "./GarageList";

const imgStyle = {
   height: "150px",
   width: "225px",
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
      console.log({model},{year})
      axios.put(`api/cars/${id}`, {
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
         <div className="darktheme">
            <AddCar addCar={this.addCar} />
            <div className="body-style">
               {/* <div className="car-style"> */}
               {this.state.carsArray.map((car) => {
                  return (
                     <div className="car-info" style={{ padding: "20px" }}>
                        <img src={car.img} style={imgStyle} />
                        <div> Make: {car.make} </div>
                        <div> Model: {car.model}</div>
                        <div> Year: {car.year}</div>
                        <div> Horse Power: {car.horsePwr}bhp</div>
                        <div> Price: ${car.price}</div>
                        <EditCar editCar={this.editCar} car={car} />
                        <button
                           onClick={() => {
                              this.props.addGarage(car.id);
                           }}
                        >
                           Add to Garage
                        </button>
                     </div>
                  );
               })}
               {/* </div> */}
            </div>
         </div>
      );
   }
}

export default CarList;
