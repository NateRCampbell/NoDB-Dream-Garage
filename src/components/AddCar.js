import axios from "axios";
import { Component } from "react";

const parentStyle = {
   display: "flex",
   flexDirection: "row",
   flexWrap: "wrap",
   justifyContent: "center",
   alignContent: "center",
   alignItems: "center",
};
const addStyle = {
   margin: "5px",
   display: "flex",
   height: "15px",
   width: "100px",
};

class AddCar extends Component {
   constructor() {
      super();
      this.state = {
         make: "",
         model: "",
         year: "",
         horsePwr: "",
         price: "",
         img: "",
      };
   }
   handleMake = (value) => {
      this.setState({ make: value });
   };
   handleModel = (value) => {
      this.setState({ model: value });
   };
   handleYear = (value) => {
      this.setState({ year: value });
   };
   handleHorsePwr = (value) => {
      this.setState({ horsePwr: value });
   };
   handlePrice = (value) => {
      this.setState({ price: value });
   };
   handleImg = (value) => {
      this.setState({ img: value });
   };

   render() {
      return (
         <div>
            <h2>Add Car</h2>
            <div style={parentStyle}>
               Make:
               <input
                  style={addStyle}
                  value={this.state.make}
                  onChange={(e) => this.handleMake(e.target.value)}
               />
               Model:
               <input
                  style={addStyle}
                  value={this.state.model}
                  onChange={(e) => this.handleModel(e.target.value)}
               />
               Year:
               <input
                  style={addStyle}
                  value={this.state.year}
                  onChange={(e) => this.handleYear(e.target.value)}
               />
               BHP:
               <input
                  style={addStyle}
                  value={this.state.horsePwr}
                  onChange={(e) => this.handleHorsePwr(e.target.value)}
               />
               Price:
               <input
                  style={addStyle}
                  value={this.state.price}
                  onChange={(e) => this.handlePrice(e.target.value)}
               />
               Image:
               <input
                  style={addStyle}
                  value={this.state.img}
                  onChange={(e) => this.handleImg(e.target.value)}
               />
               <button
                  onClick={() => {
                     this.props.addCar(
                        this.state.make,
                        this.state.model,
                        this.state.year,
                        this.state.horsePwr,
                        this.state.price,
                        this.state.img
                     );
                     this.setState({
                        make: "",
                        model: "",
                        year: "",
                        horsePwr: "",
                        price: "",
                        img: "",
                     });
                  }}
               >
                  Add Car
               </button>
            </div>
         </div>
      );
   }
}
export default AddCar;
