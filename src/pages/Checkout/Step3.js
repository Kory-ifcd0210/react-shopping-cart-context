import React from "react";

import Payment from "../../components/Payment/Payment";
// import Cart from "../../components/Cart";

import withLayout from "../../hoc/withLayout";


function Step3(){
    return (
        <>
            <Payment/>
            {/* <Cart/> */}
        </>
    )
}

export default withLayout(Step3);