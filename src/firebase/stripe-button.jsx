import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pulishablekey = 'pk_test_ZiIWUr5sMwHLh5giR0Uk58VV00aCbj77mz';
    const ontoken = token => {
        alert('Payment Successful');
    }
  return (
    <StripeCheckout
        name="React Dev App." // the pop-in header title
        description={`React app test price is $${price}`} // the pop-in header subtitle
        image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
        panelLabel="Give Money"
 
        amount={priceForStripe} // cents
        currency="USD"
        stripeKey={pulishablekey}
        label="Pay Now" 

        shippingAddress
        billingAddress
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).

        token={ontoken} // submit callback


    />

  )
}

export default StripeButton