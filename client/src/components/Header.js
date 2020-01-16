import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
// steps to connect to redux store
// import connect function
// define mapStateToProps function

class Header extends Component {
    renderContent = () => {
        // User model being fetched is available inside component as this.props.auth
        switch (this.props.auth) {
            case null:
                return 'Loading...';
            case false:
                return <li> <a href="/auth/google" > Login with Google </a> </li>;
            default:
                return [
                    <li key="1" > <Payments /> </li>,
                    <li key="3" style={{ margin: '0 10px' }}> Credits: {this.props.auth.credits} </li>,
                    <li key="2" > <a href="/api/logout" > Log out </a> </li>
                ];
        }
    }

    render() {
        console.log(this.props, 'from HEADER.js')
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                        className="brand-logo">Hermes
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

// destructure attributes from state
function mapStateToProps({ auth }) {
    // combine auth:auth
    return { auth }
}

export default connect(mapStateToProps)(Header);