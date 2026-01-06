import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

import { Outlet } from "react-router-dom";
import ContactUs from "./ContactUs/ContactUs";


function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* <ContactUs /> */}
        </>
    )
}


export default Root