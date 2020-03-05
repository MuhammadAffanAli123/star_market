import React, { Component } from 'react'
import './productcard.css'
import {ProductConsumer} from './Contaxt';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
class Productcard extends Component {
    render() {

const {id,title,img,price,incart}=this.props.itempass
        return (
<div className="container">
    
    <div className="row">
        <ProductConsumer>
            {(value)=>(<div  style={{overflow:"hidden",border:"2px solid",marginTop:"3%",backgroundColor:"white",marginLeft:"5%"}}  className="col-sm-6 col-lg-3 maincard">                        
                <Link to="/detail">
                    <div  >
                <img onClick={
                    ()=>{
               console.log( value.handleproduct(this.props.itempass.id))}}                
                 className="cardimg"  src={img} />
            
            </div></Link>
    <button style={{marginLeft:"90%"}} disabled={incart?true:false}>{incart?("in cart"):(<FontAwesomeIcon icon={faShoppingCart}/>)}</button>
 <br/>       <p style={{display:"inline",fontFamily: 'Lacquer',fontSize:"203%"}} >{this.props.itempass.title}</p><span style={{marginLeft:"64%"}}>{price}$</span>

            </div>)}
    
            </ProductConsumer>
    </div>
    
</div>

            )
                }
            }
    
export default Productcard























{/* {console.log(this.props.productscard,"usssssssssssssssssssssama")}
<div className="container">
    <div style={{marginTop:"2%",backgroundColor:"rgb(240, 231, 231)"}} className="row">
        
           
    {
        this.props.productscard.map( (item)=>{
            console.log(item.cart,"itemmmmmmmmmmmmmm")
            return(
                
            <div style={{overflow:"hidden",border:"2px solid",marginTop:"3%",backgroundColor:"white",marginLeft:"5%"}}  className="col-sm-6 col-lg-3 maincard">                        
                {console.log(item.img)}
                <Link to="/detail">
                    <div  >
                <img className="cardimg"  src={item.img} />
            
            </div></Link>
<button style={{marginLeft:"90%"}} ><FontAwesomeIcon icon={faShoppingCart}/></button>
 <br/>       <p style={{display:"inline",fontFamily: 'Lacquer',fontSize:"203%"}} >{item.title}</p><span style={{marginLeft:"64%"}}>{item.price}$</span>

            </div>)
        })
    }
    
            

    

    </div>
   
</div> */}{/* {console.log(this.props.productscard,"usssssssssssssssssssssama")}
<div className="container">
    <div style={{marginTop:"2%",backgroundColor:"rgb(240, 231, 231)"}} className="row">
        
           
    {
        this.props.productscard.map( (item)=>{
            console.log(item.cart,"itemmmmmmmmmmmmmm")
            return(
                
            <div style={{overflow:"hidden",border:"2px solid",marginTop:"3%",backgroundColor:"white",marginLeft:"5%"}}  className="col-sm-6 col-lg-3 maincard">                        
                {console.log(item.img)}
                <Link to="/detail">
                    <div  >
                <img className="cardimg"  src={item.img} />
            
            </div></Link>
<button style={{marginLeft:"90%"}} ><FontAwesomeIcon icon={faShoppingCart}/></button>
 <br/>       <p style={{display:"inline",fontFamily: 'Lacquer',fontSize:"203%"}} >{item.title}</p><span style={{marginLeft:"64%"}}>{item.price}$</span>

            </div>)
        })
    }
    
            

    

    </div>
   
</div> */}