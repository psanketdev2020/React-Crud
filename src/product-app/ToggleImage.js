import React from 'react';

function ToggleImage({ showHideImage }) {
  return (
    <>
      <button className="btn btn-primary mr-3 btn-sm" onClick={showHideImage}>Toggle Image</button>
    </>
  )
}
export default ToggleImage;
