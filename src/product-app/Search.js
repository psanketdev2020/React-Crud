import React from 'react';

function Search(props) {
  let inputValue = props.inputValue;
  let searchProduct = props.searchProduct;
  return (
    <>
      <div className="form-group">
        <label className="mb-1">Filter By:</label>
        <input type="text" placeholder="Search" value={inputValue} onChange={searchProduct}
          className="form-control w-100" />
      </div>
    </>
  )
}

export default Search;