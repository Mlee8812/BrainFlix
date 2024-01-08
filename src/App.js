import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Upload from "./Components/Upload/Upload";
import Home from './Home';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/video/:id"
                        render={(props) => {
                            return <Home {...props} />;
                        }}
                    />
                    <Route path="/upload" component={Upload} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
