import React from 'react';
import Header from './components/header';        // Ensure this matches the actual filename on disk
import Footer from './components/footer';        // Ensure this matches the actual filename on disk
import MatchMaker from './components/matchmaker'; // Ensure this matches the actual filename on disk
import Login from './components/login';          // Ensure this matches the actual filename on disk
import Signup from './components/Signup';         // Ensure this matches the actual filename on disk
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div style={mainContentStyle}>
                <Login />
                <Signup />
                <MatchMaker />
            </div>
            <Footer />
        </div>
    );
};

const mainContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
};

export default App;
