import { useRoutes } from 'react-router-dom';

import routes from "./router/index";

import './App.scss';

function App() {

    const outlet = useRoutes(routes);

    return (
        <div className="App">
            { outlet }
        </div>
    );
}

export default App;
