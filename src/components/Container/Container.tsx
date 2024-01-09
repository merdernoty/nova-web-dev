import React from 'react';

interface Container {
    children: React.ReactNode;
}

const Container: React.FC<Container> = ({ children }) => {
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            {children}
        </div>
    );
};

export default Container;
