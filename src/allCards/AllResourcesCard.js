import React, { Component } from "react";
import response from "../attendance_data";
import {
  addToCheckInCart,
  removeFromAllResources
} from "../actions/cartActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class AllResourcesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      data: response.data,
      keywords: null
    };
  }
  // const news=props.news;
  // console.log(props.news)
  inputChange = event => {
    // console.log(event.target.value);
    this.setState({ keywords: event.target.value });
    this.props.searchNews(event.target.value);
  };
  filterData = ({ news, data }) => {
    if (news.length > 0) {
      return news.map(item => {
        return (
          <div className="allData" key={item.resource.id}>
            <div className="">
              <img
                className="mr-3 mt-2 myImage"
                src={`/images/photo.jpg`}
                alt="Generic placeholder image"
              />
            </div>
            <div className="">
              <h6 className="mt-2" style={{ marginLeft: "110px" }}>
                {item.resource.first_name}
              </h6>
              <h6 className="" style={{ marginLeft: "110px", color: "gray" }}>
                {item.resource.last_name}
              </h6>
              <span className="" style={{ color: "gray" }}>
                {item.resource.phone_number}
              </span>
              <span className="ml-2" style={{ color: "gray" }}>
                {item.resource.email}
              </span>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                style={{ marginLeft: "229px" }}
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div>
                  <span>
                    <Link
                      className="dropdown-item"
                      onClick={() =>
                        this.props.addToCheckInCart(this.props.cartItems, item)
                      }
                    >
                      <i className="fa fa-check-circle mr-3"></i>
                      <span>CheckIn</span>
                    </Link>
                  </span>
                </div>
                <div>
                  <span>
                    <Link
                      className="dropdown-item"
                      onClick={() =>
                        this.props.removeFromAllResources(
                          this.props.items,
                          item
                        )
                      }
                    >
                      <i className="fa fa-trash-alt mr-3"></i>
                      <span>Delete</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    if (data.length > 0) {
      return data.map(item => {
        return (
          // firstBigCard
          <div className="allData" key={item.resource.id}>
            <div className="col-md-1 col-sm-2">
              <img
                className="mr-3 mt-2 myImage"
                src={`/images/photo.jpg`}
                alt="Generic placeholder image"
              />
            </div>
            <div className="col-md-2 col-sm-4">
              <h6 className="mt-2" style={{ marginLeft: "110px" }}>
                {item.resource.first_name}
              </h6>
              <h6 className="" style={{ marginLeft: "110px", color: "gray" }}>
                {item.resource.last_name}
              </h6>
              <span className="" style={{ color: "gray" }}>
                {item.resource.phone_number}
              </span>
              <span className="ml-2" style={{ color: "gray" }}>
                {item.resource.email}
              </span>
            </div>
            <div className="dropdown col-md-1 col-sm-2">
              <button
                className="myDropDown btn dropdown-toggle"
                style={{ marginLeft: "229px" }}
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div>
                  <span>
                    <Link
                      className="dropdown-item"
                      onClick={() =>
                        this.props.addToCheckInCart(this.props.cartItems, item)
                      }
                    >
                      <i className="fa fa-check-circle mr-3"></i>
                      <span>CheckIn</span>
                    </Link>
                  </span>
                </div>
                <div>
                  <span>
                    <Link
                      className="dropdown-item"
                      onClick={() =>
                        this.props.removeFromAllResources(
                          this.props.items,
                          item
                        )
                      }
                    >
                      <i className="fa fa-trash-alt mr-3"></i>
                      <span>Delete</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="myCard col-lg-3 col-sm-12 ml-5 text-center">
        {this.filterData(this.props)}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartItems: state.cart.checkInItems,
    items: state.cart.items
  };
}
export default connect(mapStateToProps, {
  addToCheckInCart,
  removeFromAllResources
})(AllResourcesCard);
