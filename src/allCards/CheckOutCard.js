import React, { Component } from 'react'
import response from '../attendance_data'
import { addToCheckOutCart,removeFromCheckOut} from '../actions/cartActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class CheckInCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cartItems:[],
      data:response.data
    };
  }
// const news=props.news;
// console.log(props.news)

render(){
    const {checkOutItems}=this.props
  return(

<div className="myCard col-lg-3  ml-5 text-center">
{checkOutItems.map(item=>
{ 
  return(
          // firstBigCard
            <div className="allData" key={item.resource.id}>
                    <div className="col-md-1">
          <img className="mr-3 mt-2 myImage" src={`/images/photo.jpg`} alt="Generic placeholder image"
         />
         </div>
          <div className="col-md-2">
            <h6 className="mt-2" style={{marginLeft:'110px'}}>{item.resource.first_name}</h6>
            <h6 className="" style={{marginLeft:'110px',color:'gray'}}>{item.resource.last_name}</h6>
            <span className="" style={{color:'gray'}}>{item.resource.phone_number}</span>
            <span className="ml-2" style={{color:'gray'}}>{item.resource.email}</span>
          </div>
          <div className="dropdown col-md-1">
          <button className="myDropDown btn dropdown-toggle"style={{marginLeft: '229px'}}type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {/* <div><span><Link className="dropdown-item" onClick={()=>this.props.addToCheckOutCart(this.props.checkOutItems,item) }><i className="fa fa-check-circle mr-3"></i><span>CheckOut</span></Link></span></div> */}
          <div><span><Link className="dropdown-item" onClick={()=>this.props.removeFromCheckOut(this.props.checkOutItems,item) }><i className="fa fa-trash-alt mr-3"></i><span>Delete</span></Link></span></div>
          </div>
                        </div> 
                           </div>  
                            )})
                            
                            }
                      
                    </div>
                    // </div>
        )
    }
}
function mapStateToProps(state){
  return{
    checkOutItems:state.cart.checkOutItems
    
  }
  
  }
export default connect (mapStateToProps,{addToCheckOutCart,removeFromCheckOut })(CheckInCard);