import React, { Component } from 'react'
import {Products} from './Data';
const ProductContaxt=React.createContext();
var a="usama"
export default class ProductProvider extends Component {


    state={
        product:Products,
        name:"usama"
    }
    scholl={
        clas:"1",
        class:"2"
    }
    intro={
        name:"usama",
        class:"2nd"
    }
    render() {
        console.log(this.state)
        {console.log(a)}

        return(
            <ProductContaxt.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContaxt.Provider>
        )
    }
}
const ProductConsumer=ProductContaxt.Consumer;


export {ProductProvider,ProductConsumer};