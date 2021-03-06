import React from 'react';
import ReactDOM from 'react-dom';

// const mobiles = ['iPhone1', 'iPhone2', 'iPhone3', 'iPhone4'];
const productObj = {
  productId: 1,
  productName: "Leaf Rake",
  description: "Natural Product",
  Price: 100,
  show: true,
}


class Productdetail extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2>ProductId: {this.props.data.productId}</h2>
        <h2>ProductName: {this.props.data.productName}</h2>
        <h2>Description: {this.props.data.description}</h2>
        <h2>Price: {this.props.data.Price}Rs</h2>
      </div>
    )
  }
}

class Star extends React.Component{
  constructor(){
    super();
  }

  componentWillUnmount(){
    alert('Star Component will Unmount');
  }

  render(){
    return (
      <div>
        <p>Star Component</p>
      </div>
    )
  }
}

class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = productObj;

    // this.updateProduct = this.updateProduct
    // .bind(this);
  }

  updateProduct = () => {
    this.setState({
      productId: 2,
      productName: 'Blue Rose',
      description: 'Artificial',
      Price: 200
    })
  }

  remove = (()=>{
    this.setState({
      show: false,
    })
  })

  // updateProduct() { used bind when we used a normal function
  //   debugger;
  //   this.setState({
  //     productId: 2,
  //     productName: 'Blue Rose',
  //     description: 'Artificial',
  //     Price: 200
  //   })
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('this run after constructor before render');
  //   return {
  //     productName: props.produtName,
  //   }
  // }

  // componentDidMount() {
  //   console.log('this run after DOM ready');
  //   setTimeout(() => {
  //     this.setState({
  //       productId: 3,
  //     })
  //   }, 3000)
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    // console.log(prevProps, prevState.productName);
    document.getElementById('divOne').innerText = "Before ProductName: " + prevState.productName;
    return true;
  }

  componentDidUpdate(){
    // console.log(this.state.productName);
    document.getElementById('divTwo').innerText = "After ProductName: " + this.state.productName;
  }

  render() {
    let star;
    if(this.state.show){
      star = <Star />;
    }
    return (
      // <ul>
      //   {mobiles.map((mobile, index) => <li kay={index}>{mobile}</li>)}
      // </ul>
      <div>
        {star}
        <h3>Product List Are:</h3>
        {/* <Productdetail data={productObj} /> */}
        <p>{this.state.productId}</p>
        <p>{this.state.productName}</p>
        <p>{this.state.description}</p>
        <p>Rs.{this.state.Price}</p>
        <button type="button" onClick={this.updateProduct}>Update Product</button>
        <h2 id="divOne"></h2>
        <h2 id="divTwo"></h2>
        <button onClick={this.remove}>Remove Star Component</button>
      </div>
    )
  }
}

// function Productlist() {
//   return (
//     <ul>
//      { mobiles.map((mobile, index) => <li key={index}>{mobile}</li> )}
//     </ul>
//   )
// }


export default Productlist;