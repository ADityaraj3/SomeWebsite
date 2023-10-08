import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout;