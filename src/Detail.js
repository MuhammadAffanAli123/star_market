import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';
import Productcard from './Productcard';

class Detail extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                {
                    (value)=>{
                        const {id,company,incart,price,img,info,title}=value.Detail
                        return(
                            <div className="container">
                                <div className="row">
                                    <div style={{}} className="col-xl-12 col-md-12 col-sm-12 col-md-12">
                        <h1 className="text-center" style={{paddingBottom:"5%"}}>model:{title}</h1>
                        <p style={{marginLeft:"51%",fontSize:"23px",fontWeight:"bold"}}>Made By Compnay Name :{company}</p>
                                        <img src={img} style={{float:"left",paddingRight:"5%"}}/>
                                        
                                        <p>
                     <span style={{fontWeight:"bolder"}}>Some Thing About Phone :</span>   {value.Detail.info}<br/><br/><span style={{fontWeight:"bold"}}>Price :{price}</span>
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                   }
                }
                </ProductConsumer>

            </div>
        )
    }
}
export default Detail