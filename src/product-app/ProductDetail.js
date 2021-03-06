import React from 'react';
import Star from './Star';


function ProductDetail(props) {
  let item = props.item;
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-6 mx-auto">
            <figure>
              <img src={item.imageUrl} alt={item.productName} className="img-fluid" />
            </figure>
          </div>
          <div className="col-6">
            <h2 className="text-uppercase text-dark">{item.productName}</h2>
            <h5>{item.productCode}</h5>
            <p>{item.description}</p>
            <h4>Price: $<span>{item.price}</span></h4>
            <div><Star rating={item.starRating} /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;



