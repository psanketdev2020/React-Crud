import React from 'react';
import ProductList from './product-app/ProductList';
import Welcome from './product-app/Welcome';
import AddProduct from './product-app/AddProduct';
import Data from "./product-app/Data";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      screen: 'home',
      products: [],
    }
  }

  componentDidMount() {
    const data = Data;
    this.setState({
      products: data,
    })
  }

  navigate = (type) => {
    this.setState({
      screen: type
    })
  }

  addproduct(product) {
    // console.log(product);
    this.setState(state => ({
      products: state.products.concat([product])
    }))
  }

  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand text-warning" href="#">Product List</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={() => this.navigate('home')}>
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item" onClick={() => this.navigate('productlist')}>
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item" onClick={() => this.navigate('addproduct')}>
                  <a className="nav-link" href="#">Add Product</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          {
            this.state.screen === 'home' ? (<Welcome />) : null
          }
          {
            this.state.screen === 'productlist' ? (<ProductList product={this.state.products} />) : null
          }
          {
            this.state.screen === 'addproduct' ? (<AddProduct onAddProduct={(addedProduct) => {
              this.addproduct(addedProduct)
            }} />) : null
          }
        </main>
      </>
    )
  }
}

export default App;