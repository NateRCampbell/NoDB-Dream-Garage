import React from "react";
import "./App.css";
import CarList from "./components/CarList";
// import AddCar from "./components/AddCar";
import GarageList from "./components/GarageList";
import axios from "axios";

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         garageList: [],
      };
   }
   addGarage = (id) => {
      axios
         .post("api/garage/add", { id })
         .then((res) => {
            this.setState({ garageList: res.data });
            console.log(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   removeGarage = (id) => {
      axios
         .delete(`/api/garage/remove/${id}`, { id })
         .then((res) => {
            this.setState({ garageList: res.data });
         })
         .catch((err) => {
            console.log(err);
         });
   };

   render() {
      return (
         <div className="App">
            <h1>My Garage</h1>
            <GarageList
               garageList={this.state.garageList}
               garageRemove={this.removeGarage}
            />
            <h1>Cars for Sale</h1>
            <CarList addGarage={this.addGarage} />
         </div>
      );
   }
}

export default App;
