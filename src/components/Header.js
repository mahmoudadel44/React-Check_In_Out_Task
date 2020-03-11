import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keywords: ''
        }
        // console.log(props);
    }

    inputChange = (event) => {
        // console.log(event.target.value);
        this.setState({ keywords: event.target.value })
        this.props.searchNews(event.target.value);
    }
    render() {
        return (
            <div className="header">
                <input onChange={this.inputChange}/>
         <i className="fa fa-search fa-2x"></i>
         <Link to='/' style={{textDecoration:'none',marginLeft:'100px'}}>Log Out</Link>
            </div>
        )
    }
}

export default Header;

