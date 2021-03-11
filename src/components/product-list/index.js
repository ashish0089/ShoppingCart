import React, {Component} from "react";
import "./index.css";
import IndividualProduct   from './IndividualProduct';

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products:[]
        }
    }

    addToCartCallback =(i) =>{
        console.log("This is inside parent",i)
        this.props.parentCallback(i);
    }

    removeQuantityCallback = (index) =>{
        this.props.parentRemoveQuantityCallback(index);
    }

    addQuantityCallback = (index) =>{
        this.props.parentAddQuantityCallback(index);
    }

    render() {
        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {this.props.products.map((product, i) => {
                    return (
                        <IndividualProduct product={product} index={i}
                        addToCartCallback={this.addToCartCallback}
                        addQuantityCallback={this.addQuantityCallback}
                        removeQuantityCallback={this.removeQuantityCallback}></IndividualProduct>
                    )
                })}

            </div>

        );
    }
}

export const UpdateMode = {
    ADD: 1,
    SUBTRACT: 0
}
