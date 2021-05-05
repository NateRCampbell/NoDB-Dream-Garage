import { Component } from "react";
import axios from "axios";

const gargaeStyle = {
   backgroundColor: "grey",
};

const imgStyle = {
   height: "150px",
};

class GarageList extends Component {
   constructor() {
      super();
      this.state = {
         garageArray: [],
      };
   }

   componentDidMount() {
      axios
         .get(`api/garage`)
         .then((res) => {
            this.setState({ garageArray: res.data });
         })
         .catch((err) => {
            console.log(err);
         });
   }

   // removeGarage = (id) => {
   //    axios
   //       .delete(`/api/garage/remove/${id}`)
   //       .then((res) => {
   //          this.setState({ garageArray: res.data });
   //       })
   //       .catch((err) => {
   //          console.log(err);
   //       });
   // };

   render() {
      return (
         <div style={gargaeStyle}>
            {this.props.garageList.map((cars) => {
               return (
                  <div className="car-info" style={{ padding: "20px" }}>
                     <img src={cars.img} style={imgStyle} />
                     <div> Make: {cars.make} </div>
                     <div> Model: {cars.model}</div>
                     <div> Year: {cars.year}</div>
                     <div> Horse Power: {cars.horsePwr}bhp</div>
                     <div> Price: ${cars.price}</div>
                     <button onClick={() => this.props.garageRemove(cars.id)}>
                        Remove from Garage
                     </button>
                  </div>
               );
            })}
         </div>
      );
   }
}

export default GarageList;
