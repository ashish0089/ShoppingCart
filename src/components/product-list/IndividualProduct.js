import React, {Component} from "react";
import "./index.css";



export default class IndividualProduct extends Component {

    handleAddToCart = () =>{
        console.log("Add to cart",this.props.index);
        this.props.addToCartCallback(this.props.index);
        
    }

    addQuantity = () =>{
        console.log("add quantitty",this.props.index);
        this.props.addQuantityCallback(this.props.index);
    }
    
    removeQuantity =() =>{
        console.log("remove quantity",this.props.index);
        this.props.removeQuantityCallback(this.props.index);
    }
   
    render() {
        const product= this.props.product;
        const i= this.props.index;
            return (
                <section className="w-30"
                            data-testid={'product-item-' + i}
                            key={product.id}>
                    <div className="card ma-16">
                        <img alt="Your Cart" src={product.image}
                                className="d-inline-block align-top product-image"/>
                        <div className="card-text pa-4">
                            <h5 className="ma-0 text-center">{product.name}</h5>
                            <p className="ma-0 mt-8 text-center">${product.price}</p>
                        </div>
                        <div className="card-actions justify-content-center pa-4">

                            {!product.cartQuantity && <button className="x-small outlined" data-testid="btn-item-add"
                            onClick={(i)=>this.handleAddToCart(i)}>
                                Add To Cart
                            </button>}

                            {product.cartQuantity>0 &&<div className="layout-row justify-content-between align-items-center">
                                <button className="x-small icon-only outlined"
                                        data-testid="btn-quantity-subtract"
                                        onClick={this.removeQuantity}>
                                    <i className="material-icons">remove</i>
                                </button>

                                <input type="number"
                                        disabled
                                        className="cart-quantity" data-testid="cart-quantity"
                                        value={product.cartQuantity}/>

                                <button className="x-small icon-only outlined"
                                        data-testid="btn-quantity-add"
                                        onClick={this.addQuantity}>
                                    <i className="material-icons">add</i>
                                </button>
                            </div>}

                        </div>
                    </div>
                </section>
                    )
                }
}


