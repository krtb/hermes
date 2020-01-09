import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {

    render() {
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">HERMES</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a>Log In</a></li>
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