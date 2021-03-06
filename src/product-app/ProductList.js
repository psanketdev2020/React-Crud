import React, { Component } from 'react';
import Product from './Product';
import Search from './Search';
import '../App';
import ToggleImage from './ToggleImage';
import ProductDetail from './ProductDetail';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleImg: true,
            getProductDetail: '',
            inputValue: '',
        }
    }

    // for show & hide images
    showHideImage = (e) => {
        // console.log(this.state.toggleImg);
        this.setState({
            toggleImg: !this.state.toggleImg
        })
    }

    // for get id from product array & send to product component
    showProductDetail = (id) => {
        let products = this.props.product
        let getId = products.filter(item => {
            return item.productId === id;
        });
        this.setState({
            getProductDetail: getId,
        })
    }

    searchProduct = (e) => {
        let searchValue = e.target.value;
        // console.log(searchValue);
        searchValue = searchValue.trim();
        this.setState({
            inputValue: searchValue
        })
    }

    render() {
        return (
            <>
                {this.state.getProductDetail == "" ? (
                    <div className="container">
                        <div className="py-4">
                            <h3 className="text-center">Product List App</h3>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <ToggleImage showHideImage={this.showHideImage} />
                                <button className="btn btn-primary btn-sm">Add Product</button>
                            </div>
                            <div className="ml-auto">
                                <Search
                                    inputValue={this.state.inputValue}
                                    searchProduct={this.searchProduct}
                                />
                            </div>
                        </div>
                        <div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Code</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Star Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        /* here we have pass the :
                                            inputVal: for get input value ,
                                            showProductDetail: get seprate product id
                                            mainData: get product array
                                            toggleImg: get the true or false value
                                        */}
                                    <Product
                                        inputValue={this.state.inputValue}
                                        showProductDetail={(id) => this.showProductDetail(id)}
                                        mainData={this.props.product}
                                        toggleImg={this.state.toggleImg}
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) :
                    // This map, selected product data and pass data to the product details
                    this.state.getProductDetail.map((item) =>
                        <ProductDetail key={item.productId} item={item} />
                    )
                }
            </>
        )
    }
}

export default ProductList;
