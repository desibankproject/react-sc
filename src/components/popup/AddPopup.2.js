import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import showproducts from '../../img/show-all.gif';
import bgimage from '../../img/backgrounds.jpg';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '650px',
    backgroundColor       : '#d7b56de3',
    backgroundImage       : "url('../../img/backgrounds.jpg')"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')

class AddPopup extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  /**
   * 
   *https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f}
    * {@param} 
   *  event 
   */
  handleSubmit(event){
    const form = event.target;
    console.log("---form--");
    console.log(form);
    const data = new FormData(form);
    var product={};
    for (let name of data.keys()) {
      const input = form.elements[name];
     // const parserName = input.dataset.parse;
      //if (parserName) {
       // const parser = inputParsers[parserName];
       // const parsedValue = parser(data.get(name));
        let tdata=data.get(name)
        console.log("tdata = "+tdata);
        data.set(name, tdata);
        //dynamically creating JavaScript object
        product[name]=tdata;
      //}
    }

    console.log("---data--");
    console.log(product);
    console.log(data);
    event.preventDefault();
    console.log("method is called from child component");
    this.props.addProductPopup(product);
    this.closeModal();
  }

  render() {
    const inline={
      display:"inline"
    } 

    const bgimage={
    backgroundImage: "url('../../img/backgrounds.jpg')"
   } 
   const cheight={
    height: "34px",
    fontSize:"16px"
   } 
    return (
      <div style={inline}>
        <button type="button" onClick={this.openModal} className="btn btn-warning btn-lg">Add New Product</button>
       
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
 <form onSubmit={this.handleSubmit} method="post">
          <h2 ref={subtitle => this.subtitle = subtitle}>Add New Product 
           <img src={showproducts}  alt="Add Product" height="40px;"/>

     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button  type="button" className="btn btn-primary btn-lg"  onClick={this.closeModal}>&times;</button>
     
           </h2>
        
           
         <div className="modal-header">
 
      <div className="modal-body">
      <div className="form-group">
          Pid   :  
         <input type="text" className="form-control" id="pid" name="pid"/>
         </div>
       <div className="form-group">
          Name   :  
         <input type="text" className="form-control" id="username" name="name"/>
         </div>
         <div className="form-group">
      	<label id="stream">Category:</label>
  			<select style={cheight} name="category" className="form-control" id="category">
  					<option>Men</option>	
  					<option>Women</option>	
  					<option>Shoose</option>	
  					<option>Fruit</option>	
            
  			</select>
        </div>
        
          <div className="form-group">
       Price   :  
        <input type="text" className="form-control" id="price" name="price"/>
        </div>
      
      
          <div className="form-group">
       Image   :  
        <input type="text" className="form-control" id="image" name="image"/>
        </div>

        
        <div className="form-group">
       Mfg   :  
        <input type="text" className="form-control" id="mfg" name="mfg"/>
        </div>
         
         <div className="form-group">
      	<label id="stream">Store:</label>
  			<select style={cheight} name="store" className="form-control" id="store">
  					<option>Fremont</option>	
  					<option>Idea</option>	
            <option>New York</option>	
  			</select>
        </div>
        <div className="form-group">
       Description   :  
        <input type="text" className="form-control" id="description" name="description"/>
        </div>
        <div className="modal-footer">
        	<input type="button" value="Close"  onClick={this.closeModal}  className="btn btn-primary btn-lg" id="close"/>
        	<input type="submit"   value="Add Product" className="btn btn-primary btn-lg" id="addProduct"/>
      </div>

         </div>
     
    </div>
         
    </form>
        </Modal>
      
      </div>
    );
  }
}

export default AddPopup;