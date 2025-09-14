import React,{Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import PreLoader from "./PreLoader";
import NavBar from "./NavBar";
import DashBoard from "../views/DashBoard";
import Footer from "./Footer";
import routes from "./routes";


const DefaultLayOut = () => {

    const Loading = () => <div>Loading...</div>


    return(<>
        

        {/* <NavBar /> */}

        <Suspense fallback={<Loading/>}>
            <Routes>
                {routes.map((route, idx) =>
                    <Route key={idx} path={route.path} element={<route.component />} />)}
                <Route path="/" element={<DashBoard />} />
            </Routes>
        </Suspense> 

        <Footer/>
    </>)

};

export default DefaultLayOut;