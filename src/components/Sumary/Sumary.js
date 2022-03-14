/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Redirect, Link  } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid"

import PaymentContext from "../../Context/PaymentContext";
import PersonDataContext from "../../Context/PersonDataContext";
import BillingDetailContext from "../../Context/BillingDatailContext";

import Cart from "../Cart";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";


function Summary() {
    const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

    const [cartItems, setCartItems] = useState(() =>
    loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
    );
    const { data } = useContext(PersonDataContext);
    const { billingDetail } = useContext(BillingDetailContext);
    const { paymentData } = useContext(PaymentContext);



    return (
        <>
        <h2>Your Order Confirmed!</h2>
            <p>Hi {data.personName},</p>
            <p>Your order has been confirmed and will be shipping soon.</p>
            <hr/>
            <div className="row">
                <div className="col">
                    <p>Order Date</p>
                    <p>fecha de hoy</p>
                </div>
                <div className="col">
                    <p>Order Code</p>
                    <p>code</p>
                </div>
                <div className="col">
                    <p>Payment</p>
                    <p>Card</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>{billingDetail.address}</p>
                </div>

            </div>
            <Cart
        className="col col-4"
        cartItems={cartItems}
      />
            <Link to="/checkout/step-3" className="btn btn-primary">Back</Link>
        </>
    );
}

export default Summary;
