import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import StorePicker from "./components/StorePicker.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App container m-auto flex justify-center place-items-center min-h-screen">
            <div className="">
                <div className="flex justify-center">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left font-bold">
                    Vite + React
                </h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>

                <StorePicker />
            </div>
        </div>
    );
}

export default App;
