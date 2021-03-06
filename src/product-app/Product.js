import React from 'react';
import Star from './Star';

function Product({ inputValue, showProductDetail, mainData, toggleImg }) {
  return (
    <>
      {mainData.filter((searchValue) => {
        return searchValue.productName.includes(inputValue)
      }).map((item, index) =>
        <tr key={index}>
          <td>
            <figure style={{ opacity: toggleImg ? '1' : '0' }}>
              <img src={item.imageUrl} alt={item.productName} className="img-fluid" />
            </figure>
          </td>
          <td><a href='javascript:void(0);' onClick={() => showProductDetail(item.productId)}>{item.productName}</a></td>
          <td>{item.productCode}</td>
          <td>{item.description}</td>
          <td>${item.price}</td>
          <td><Star rating={item.starRating} /></td>
        </tr>
      )}
    </>
  )
}

export default Product;
