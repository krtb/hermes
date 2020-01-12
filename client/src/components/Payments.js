import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

class Payments extends Component {
    render(){
        return(
            <div>
                Payments Component
            </div>
        )
    } 
}

export default connect()(Payments);