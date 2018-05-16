import React, { Component } from 'react'
import products from '../../img/products.jpg';
import AddPopup from '../popup/AddPopup'
import EditPopup from '../popup/EditPopup'
import Cart from '../cart/Cart'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
 
import axios from 'axios';


/**
 * @author Nagendra
 * This is stateful component 
 * that's why we have to create
 * constructor inside it
 */
 class Products extends Component {

    constructor(props){
      super(props);
      //Define the initial state of the
      //products
      this.state={
        products:[],
        carts:[],
        total:0
      };
      //this.addProduct=this.addProduct.bind(this);
           
    }
     

    /**
     * Write code to fetch data from 
     * and updating the state of product!
     * node.js application
     * ngOnInit(){ }
     */
    componentDidMount() {
      console.log("___componentDidMount__");
      axios.get('http://localhost:444/api/v1/products')
      .then(res => {
           this.setState({ products: res.data });
           console.log(this.state.products);
      });
    }

    /**
     * this method is invoked from
     * the child component which
     * is product popup in this case
     * @param {*} product 
     */
    addProduct = (product) =>{
      product._id="5aee5b0c2f713511e388a01p";
      console.log("@_@_@addProduct is called_)@)@");
      console.log(product); 
      //arr1.push(...arr2) // Adds arr2 items to end of array
      //arr1.unshift(...arr2) //Adds arr2 items to beginning of array
      console.log(this.state.products);
      console.log("_#)#WOWO)#)");
      this.setState({
        //spreed operator =  ...
        products:[...this.state.products,product]
      });
      console.log(this.state.products);
      axios.post('http://localhost:444/api/v1/products', product)
      .then((result) => {
        console.log(result);
        this.props.history.push("/product")
      });
    }

    updateProduct=(product) =>{
      console.log("@_@_@updateProduct is called_)@)@");
      console.log(product); 
      //arr1.push(...arr2) // Adds arr2 items to end of array
      //arr1.unshift(...arr2) //Adds arr2 items to beginning of array
      console.log(this.state.products);
      console.log("_#)#WOWO)#)");
      //updating the current state into GUI
     //As of 2016, you're supposed to use Array.findIndex (an ES2015/ES6 standard) for this:
      let index=this.state.products.findIndex(item => item._id === product._id);
      console.log(")))index--- ... "+index);
      this.state.products[index]= product; 
      this.setState({
        //spreed operator =  ...
        products:this.state.products
      });
      console.log(this.state.products);
       axios.put('http://localhost:444/api/v1/products', product)
       .then((result) => {
        console.log(result);
        //this.props.history.push("/product")
     });
    }

    deleteProduct = (pid) => {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do delete this record.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
             /// alert('Click Yes')
              console.log(pid);
              //updating the state
              //products/:papa
              axios.delete('http://localhost:444/api/v1/products/'+pid)
              .then((result) => {
                console.log(result);
                this.setState({
                  //spreed operator =  ...
                  products: this.state.products.filter(item =>item._id!==pid)
                });
                //this.props.history.push("/product")
              });
            } 
          },
          {
            label: 'No',
            onClick: () => alert('Sorry record could not be deleted!')
          }
        ]
      })
    };

    addProductToCart=(product)=> {
      console.log(product);
      var index=this.state.carts.findIndex(item => item._id === product._id);
      if(index!=-1){
        return;
      }
      this.setState({
        //spreed operator =  ...
        carts:[...this.state.carts,product]
      });
      let total=this.state.total;
      total=total+product.price;
      this.setState({total:total});
    }

    removeProductFromCart=(product)=> {
      this.setState({
        //spreed operator =  ...
        carts: this.state.carts.filter(item =>item._id!==product._id)
      });
      let total=this.state.total;
      total=total-product.price;
      this.setState({total:total});
    }

    isInCart(_id){
       var index=this.state.carts.findIndex(item => item._id === _id);
       console.log(_id+"  = "+index);
       if(index==-1){
          return false;
       }else{
          return true;
       }
    }


  render() {
    //defining inline css
    const inlinecss={
      height:"200px"
    }
    //defining inline css
    const imgHeight={
      height:"50px"
    }
    const tabHeader={
      backgroundColor: "rgb(246, 247, 249)"
    }
    //const isInCart=false;
    return (
      <div>
        
          <img src={products} style={inlinecss} alt=""/>
          <AddPopup addProductPopup={this.addProduct}/>
          <hr/>
          <hr/>
          <Cart total={this.state.total} currency="$" 
          items={this.state.carts}    removeFromCart={this.removeProductFromCart}/>
         <h2>Product Available in store!</h2>
                  
  <table className="table table-bordered">
    <thead  style={tabHeader}>
      <tr>
      <th>SNo</th>
        <th>Pid</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Image</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {this.state.products.map((prod,index) =>
      <tr key={prod._id}>
       <td>{index+1}</td>
       <td>
       <button className={this.isInCart(prod._id) ? 'btn btn-danger' : 'btn btn-info'}
                            onClick={this.addProductToCart.bind(this,prod)}>
                                {this.isInCart(prod._id) ? 'In Cart' : 'Add to cart'}
                        </button>
        
          &nbsp;&nbsp;
                        {prod.pid}
        </td>
        <td>{prod.name}</td>
        <td>{prod.category}</td>
        <td>{prod.price}</td>
        <td><img src={prod.image} style={imgHeight} alt=""/></td>
        <td>
        <button type="button" onClick={this.deleteProduct.bind(this,prod._id)} className="btn btn-primary btn-lg">Delete</button>
          &nbsp;
         <EditPopup  {...prod} updateProductPopup={this.updateProduct}/>
        </td>
   </tr>
   )}
      <tr id="12P">
      <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
     
   </tr>
   <tr  id="13P">
   <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
       
        <td>&nbsp;</td>
     
   </tr>
    </tbody>
  </table>
         
      </div>
    )
  }
}

export default Products;
