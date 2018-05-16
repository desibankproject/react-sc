
import React, { Component } from 'react'
import Popup from "reactjs-popup";

/**
 * 
 */
 class AddPopup extends Component {
  render() {

    return (
      <div>
          <Popup trigger={<button class="btn btn-primary btn-lg">Add Product</button>} position="top left">
    {close => (
      <div>
        Content here!!!!!!!!!!!!
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
      </div>
    )
  }
}

export default AddPopup;