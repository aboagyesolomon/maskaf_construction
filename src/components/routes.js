import React from "react";

const DashBoard = React.lazy(() => import("../views/DashBoard"));



const routes = [
    {path: "/dashboard", name:"DashBoard", component: DashBoard}
];

export default routes;