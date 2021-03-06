import React from 'react';


class Productdetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: 1,
      productName: "Leaf Rake",
      description: "Natural Product",
      Price: 100,
    }
  }
  render() {
    return (
      // console.log(this.state);
      <div>
        <p>{this.state.productId}</p>
        <p>{this.state.productName}</p>
        <p>{this.state.description}</p>
        <p>Rs.{this.state.Price}</p>
      </div>
    )

  }
}

export default Productdetails;