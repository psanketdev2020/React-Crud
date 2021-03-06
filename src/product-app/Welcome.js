import React from 'react';

function Welcome(props) {

//  setTimeout(()=>{
//    document.querySelector('.welcome-msg').remove();
//  }, 5000)

  return (
    <>
      <div className="welcome-msg">
        <h5 className="mb-0">Welcome Sanket,</h5>
        <p className="mb-0">to my brand new <span>Product List </span> App.</p>
      </div>
    </>
  )
}


export default Welcome;