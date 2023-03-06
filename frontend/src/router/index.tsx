import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

//页面
const Home = lazy(() => import("../views/home/home"));
//组件
const Loading = lazy(() => import("../components/loading/loading"));

const loading = (comp: React.ReactElement<any,any>) => (
    <React.Suspense fallback={<Loading />}>
        { comp }
    </React.Suspense>
);

const routes = [
    {
//        主页
        path: "/",
        element: loading(<Home />)
    },
    {

    }
];

export default routes;
