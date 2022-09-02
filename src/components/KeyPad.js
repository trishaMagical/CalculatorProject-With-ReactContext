import React from 'react'
import Key from "./Key"
import OtherKey from './OtherKey';
import SignKey from './SignKey';

const KeyPad = () => {

  return (
    <div className="container">
      <Key />
      <SignKey />
      <OtherKey />
    </div>
  )
}

export default KeyPad
