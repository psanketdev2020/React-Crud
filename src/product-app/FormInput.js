import React from 'react';

function FormInput(props) {

  return (
    <>
      <input type={props.type} placeholder={props.placeholder} className="form-control w-100" />
    </>
  )
}

export default FormInput;