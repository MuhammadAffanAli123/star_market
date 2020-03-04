import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './nav.css'
class Nav extends Component {
    render() {
        return (
           
           <div >
                        <img className="phonestyle" src={process.env.PUBLIC_URL + '/phoneicon.png'}/><span style={{color:"black",marginLeft:"9%",fontSize:"32px"}}>Products</span>
<FontAwesomeIcon icon={faShoppingCart} style={{color:"black",marginLeft:"59%",fontSize:"393%"}}/>
               <img />
               
                           </div>
        )
    }
}

export default Nav
