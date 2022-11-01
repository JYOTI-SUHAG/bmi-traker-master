import React from "react";
import Copyright from "./Components/Copyright";
import Dashboard from "./Containers/Dashboard";

function App() {
    return (
        <div className="App">
            <Dashboard />
            <Copyright
                appName="BMI Tracker"
                developer="Anmol Agrawal"
                developerUrl="https://anmolagrawal.dev/"
            />
        </div>
    );
}

export default App;
