import React from "react";

import PersonalDetail from "../../components/PersonalDetail/PersonalDetail";
// import Cart from "../../components/Cart";

import withLayout from "../../hoc/withLayout";


function Step1(){
    return (
        <>
            <PersonalDetail/>
            {/* <Cart/> */}
        </>
    )
}

export default withLayout(Step1);