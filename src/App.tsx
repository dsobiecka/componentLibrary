import React from 'react';
import './App.css';
import Button from "./components/ui/Button/Button";

function App() {
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div className="App">
            <Button onClick={handleClick} label="Click me"/>
        </div>
    );
}

export default App;
