import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    // conditionally render based on state from authReducer & fetchUser action
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return 'Loading...';
            case false:
                return <li> <a href="/auth/google" > Login with Google </a> </li>;
            default:
                return <li> <a href="/api/logout" > Log out </a> </li>;
        }
    }

    render() {
        return(
            <nav>
                <div class="nav-wrapper">
                    <Link to={ this.props.auth ? '/surveys' : '/' } >
                        HERMES
                    </Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        { this.renderContent() }
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps ({auth}) {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header);