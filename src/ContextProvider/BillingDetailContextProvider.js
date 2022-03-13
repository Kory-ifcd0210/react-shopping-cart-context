import React, { useReducer} from "react";

import BillingDetailContext from "../Context/BillingDatailContext";

const SAVE_NEW_BILLING_DETAIL = "saveNewBillingDetail";

function billingDetailReducer(state,action){
    switch (action.type) {
        case SAVE_NEW_BILLING_DETAIL :
            {
                return action.newDetail;
            }

        default:
            {
                return state;
            }
    }
}


function BillingDetailContextProvider({children}){
    // initial state like App const

    const [billingDetailState, setBillingDetailState] = useReducer(billingDetailReducer,{});

    function saveBillingDetail(newDetail){
        setBillingDetailState({type: SAVE_NEW_BILLING_DETAIL,
            newDetail: newDetail });
    }

    return (
        <BillingDetailContext.Provider value={{
            billingDetail: billingDetailState,
            saveBillingDetail: saveBillingDetail
        }}>
            {children}
        </BillingDetailContext.Provider>
    )
}

export default BillingDetailContextProvider;