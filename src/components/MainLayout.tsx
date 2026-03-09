import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className="selection:bg-indigo-100 selection:text-indigo-600">
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default MainLayout;
