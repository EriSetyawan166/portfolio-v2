import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TanstackQueryProvider from './lib/TanstackQueryProvider';

const App: React.FC = () => {
    return (
        <TanstackQueryProvider>
            <div>
                <Navbar />
                <AppRoutes />
                <Footer />
            </div>
        </TanstackQueryProvider>
    );
};

export default App;
