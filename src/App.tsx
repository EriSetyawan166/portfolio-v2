import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <AppRoutes />
        </div>
    );
};

export default App;
