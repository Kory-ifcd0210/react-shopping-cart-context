import React from "react";

import BillingDetail from "../../components/BillingDetail/BillingDetail";
// import Cart from "../../components/Cart";

import withLayout from "../../hoc/withLayout";


function Step2(){
    return (
        <>
            <BillingDetail/>
            {/* <Cart/> */}
        </>
    )
}

export default withLayout(Step2);