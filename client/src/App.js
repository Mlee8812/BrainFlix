import './App.scss';
import { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

// env variable = REACT_APP_API_URL
console.log('API_URL', process.env.REACT_APP_API_URL);

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/video-player/:videoId" component={HomePage} />
                    <Route path="/video-upload" component={VideoUploadPage} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;