import React, { Component } from "react";
import AllResourcesCard from "../allCards/AllResourcesCard";
import response from "../attendance_data";
// import CheckInCard from '../cards/CheckInCard'
// import CheckOutCard from '../cards/CheckOutCard'
import CheckInCard from '../allCards/CheckInCard'
import CheckOutCard from '../allCards/CheckOutCard'

import Header from './Header'
import { connect } from "react-redux";
 class Attendence extends Component {
 
constructor(props) {
  super(props)
  this.state = {
      // news: this.props.items,
      filtered:[],
      checkInItems:[],
  }
  console.log("data,",this.state.data)
}

filterNews(keywords){
  let{items}=this.props
let myFilterData=items.filter((item)=>{
    return  item.resource.first_name.indexOf(keywords)>-1
})
console.log("filterData",this.state.myFilterData)
this.setState({filtered:myFilterData})
}
filterCheckInItems(keywords){
  let myFilterData=this.props.checkInItems.filter((item)=>{
      return  item.resource.first_name.indexOf(keywords)>-1
  })
  // console.log("filterData",this.state.myFilterData)
  this.setState({checkInItems:myFilterData})
  }
render() {
  return (
      <div>
          <Header searchNews={keywords=>this.filterNews(keywords),
           keywords=>this.filterCheckInItems(keywords)
            } />
          <div className="container-fluid">
          <div className="row">
         <AllResourcesCard 
         news={this.state.filtered}
         data={this.props.items}
         />
         <CheckInCard />
         <CheckOutCard />
         </div>
         </div>
      </div>
  )
}
}
function mapStateToProps(state){
  return{
    items:state.cart.items,
    checkInItems:state.cart.checkInItems,
    checkOutItems:state.cart.checkOutItems
  }
  }
export default connect (mapStateToProps,)(Attendence);