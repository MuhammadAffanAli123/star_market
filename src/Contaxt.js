import React, { Component } from 'react'
import {Products} from './Data';
import {Detail} from './Data';

const ProductContaxt=React.createContext();
export default class ProductProvider extends Component {


    state={
        product:[],
        Detail:Detail
    }
componentDidMount(){
    this.setproduct()

}


    
    setproduct=()=>{
      let temparray=[]
      Products.forEach((item)=>{
         let singleitem={...item}
          temparray=[...temparray,singleitem]
      })
      this.setState({
          product:temparray
      }
      )
    }
    grtitem=(id)=>{
        const productget=this.state.product.find(item=>item.id===id)

        return productget

    }
    
handleproduct=(id)=>{
      const searchproduct=this.grtitem(id);
       this.setState(()=>{
          return{ Detail:searchproduct}
       }) 
}
    render() {
        this.grtitem()
        return(
            <ProductContaxt.Provider value={{...this.state,handleproduct:this.handleproduct}}>
                {this.props.children}
            </ProductContaxt.Provider>
        )
    }
}
const ProductConsumer=ProductContaxt.Consumer;


export {ProductProvider,ProductConsumer};