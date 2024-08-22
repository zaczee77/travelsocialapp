import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Travel Social App</h1>
        </header>
    );
};

const headerStyle = {
    background: '#282c34',
    color: '#61dafb',
    padding: '10px',
    width: '100%',
    textAlign: 'center',
};

export default Header;
