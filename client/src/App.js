import React, {useEffect, useState} from 'react';

const App = () => {
    const [health, setHealth] = useState({});
    useEffect(()=>{
        fetch('/health')
            .then(res=>res.json())
            .then(res=>setHealth(res))
    },[]);
    return (
        <div className="App">
            This is a basic app
            Health is: {JSON.stringify(health)}
        </div>
    );
};

export default App;
