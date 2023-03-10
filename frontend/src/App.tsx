import { useEffect } from "react";
import { useRoutes } from 'react-router-dom';
import axios from "axios";

import routes from "./router/index";

import './App.scss';

function App() {

    const outlet = useRoutes(routes);

//    创建axios实例并配置baseURL
    useEffect(() => {
        axios.create({
            baseURL: "/api"
        });
    }, []);

    return (
        <div className="App">
            { outlet }
        </div>
    );
}

export default App;
