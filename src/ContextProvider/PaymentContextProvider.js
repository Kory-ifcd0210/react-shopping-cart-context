import React, { useReducer} from "react";

import PaymentContext from "../Context/PaymentContext";

const SAVE_NEW_PAYMENT = "saveNewPayment";

function paymentReducer(state,action){
    switch (action.type) {
        case SAVE_NEW_PAYMENT :
            {
                return action.newPayment;
            }

        default:
            {
                return state;
            }
    }
}


function PaymentContextProvider({children}){
    // initial state like App const

    const [paymentState, setPaymentState] = useReducer(paymentReducer,{});

    function savePayment(newPayment){
        setPaymentState({type: SAVE_NEW_PAYMENT,
            newPayment: newPayment });
    }

    return (
        <PaymentContext.Provider value={{
            paymentData: paymentState,
            savePayment: savePayment
        }}>
            {children}
        </PaymentContext.Provider>
    )
}

export default PaymentContextProvider;