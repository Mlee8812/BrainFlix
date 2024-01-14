import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadVideo from "./Components/UploadVideo/UploadVideo";
import HomePage from "./Components/HomePage/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={HomePage} />
                <Route path="/upload" component={UploadVideo} />
                <Route path="/:id" component={HomePage} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;