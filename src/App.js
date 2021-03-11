import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        }
    }

    parentCallback = (i) =>{
        console.log("inside app js",i);
        const products = [...this.state.products];
        products[i].cartQuantity = products[i].cartQuantity+1;
        this.setState({
            products
        })
        this.modifyCartItem(i,products[i],"add");
    }

    parentAddQuantityCallback = (i) =>{
        const products = [...this.state.products];
        products[i].cartQuantity = products[i].cartQuantity+1;
        this.setState({
            products
        })
        this.modifyCartItem(i,products[i],"add");
    }

    parentRemoveQuantityCallback =(i) =>{
        const products = this.state.products;
        products[i].cartQuantity = products[i].cartQuantity-1;
        this.setState({
            products
        })
         this.modifyCartItem(i,products[i],"remove");
        console.log("this is remove quantity",i);
    }
    modifyCartItem =(i,item,operation) =>{
        console.log(i, " "+item);
        const cart = this.state.cart;
        let itemIndex;
        itemIndex = cart.items.findIndex((ele)=>ele.name === item.name)
        if(operation ==='add' && cart.items && cart.items[itemIndex]
            && cart.items[itemIndex].name.indexOf(item.name) !=-1){
            //itemIndex = cart.items.findIndex((ele)=>ele.name === item.name);
            // cart.items =[...this.state.cart.items, item]
        }else if(operation ==='add' ){
            cart.items =[...this.state.cart.items, item]
        }
        if(operation ==='remove' && cart.items[itemIndex].cartQuantity ===0){
            cart.items = cart.items.filter((item,index)=> itemIndex !== index);
        }
        this.setState({
            cart
        });
      
    }
    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products} 
                    parentCallback={this.parentCallback}
                    parentAddQuantityCallback={this.parentAddQuantityCallback}
                    parentRemoveQuantityCallback ={this.parentRemoveQuantityCallback}
                    />
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
