import React, { Component } from 'react';
import FormInput from './FormInput';
import './ProductList';
import '../App';


class AddProduct extends Component {

  constructor(props) {
    super(props);
  }

  type = {
    text: 'text',
  }

  submitFormData = (event) => {
    event.preventDefault();
    let productUrl = event.target[0].value;
    let productName = event.target[1].value;
    let productCode = event.target[2].value;
    let productDescription = event.target[3].value;
    let productPrice = Number(event.target[4].value);
    let productStar = Number(event.target[5].value);

    const productData = {
      productId: Number(new Date),
      imageUrl: productUrl,
      productName: productName,
      productCode: productCode,
      description: productDescription,
      price: productPrice,
      starRating: productStar
    }

    if (productUrl && productName && productCode && productDescription && productPrice && productStar) {
        // console.log(productData);
      alert('Your Product Addeed Successfully');
      this.props.onAddProduct(productData);
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="w-50 mx-auto py-4">
            <h4 className="text-center">Add Products</h4>
            <form onSubmit={this.submitFormData}>
              <div className="form-group">
                <label className="mb-1">Produt URL:</label>
                <FormInput type="text" placeholder="Produt URL" />
              </div>
              <div className="form-group">
                <label className="mb-1">Product Name:</label>
                <FormInput type="text" placeholder="Product Name" />
              </div>
              <div className="form-group">
                <label className="mb-1">Product Code:</label>
                <FormInput type="text" placeholder="Enter URLProduct Code" />
              </div>
              <div className="form-group">
                <label className="mb-1">Description:</label>
                <FormInput type="text" placeholder="Description" />
              </div>
              <div className="form-group">
                <label className="mb-1">Price:</label>
                <FormInput type="text" placeholder="Price" />
              </div>
              <div className="form-group">
                <label className="mb-1">Star Rating:</label>
                <FormInput type="text" placeholder="Star Rating" />
              </div>
              <button className="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </>
    )
  }

}

export default AddProduct;