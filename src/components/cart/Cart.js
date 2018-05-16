import React, { Component } from 'react'
import './Cart.css';
import CartItem from './CartItem';
class Cart extends Component {
  
 constructor(props){
   super(props); 
 }

  render(){
     //This is feature of type script
     //Object rest properties 
    const { items, total, currency, removeFromCart }= this.props; 
  return (
    <div>
            <h3>Shopping Cart</h3>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                    {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                     <CartItem key={item._id} currency={currency}  {...item} onClick={() => removeFromCart(item)} />
                                ))}
                            </div>
                       )}
                       {items.length === 0 && (
                           <div className="alert alert-info">Cart is empty</div>
                       )}
                         <hr/>
                         <div className="checkout">
                         {items.length > 0 && (
                             <button type="button"  className="btn btn-primary btn-lg">Checkout</button>
                         )} 
                              <span className="cart__total">   
                                    Total: {total} {currency}
                             </span>                  
                         </div> 
                       
                    </div>
                </div>
            </div>
        </div>
  )
}
}

export default Cart; 