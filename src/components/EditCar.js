import { Component } from "react";

class EditCar extends Component {
   constructor() {
      super();
      this.state = {
         editMode: false,
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

   toggleEdit = () => {
      this.setState({ editMode: !this.state.editMode });
   };

   handleSave = () => {
      this.props.editCar(
         this.props.cars.id,
         this.state.make,
         this.state.model,
         this.state.year,
         this.state.horsePwr,
         this.state.price,
         this.toggleEdit
      );
   };

   render() {
      return this.state.editMode ? (
         <div>
            <input
               placeholder="Make"
               value={this.state.make}
               onChange={(e) => this.handleMake(e.target.value)}
            />
            <input
               placeholder="Model"
               value={this.state.model}
               onChange={(e) => this.handleModel(e.target.value)}
            />
            <input
               placeholder="Year"
               value={this.state.year}
               onChange={(e) => this.handleYear(e.target.value)}
            />
            <input
               placeholder="Horse Power"
               value={this.state.horsePwr}
               onChange={(e) => this.handleHorsePwr(e.target.value)}
            />
            <input
               placeholder="Price"
               value={this.state.price}
               onChange={(e) => this.handlePrice(e.target.value)}
            />
            <input
               placeholder="image URL"
               value={this.state.img}
               onChange={(e) => this.handleImg(e.target.value)}
            />
            <button onClick={this.handleSave}>Save</button>
            <button onClick={this.toggleEdit}>Cancel</button>
         </div>
      ) : (
         <div>
            <button onClick={this.toggleEdit}>Edit Car</button>
         </div>
      );
   }
}

export default EditCar;
