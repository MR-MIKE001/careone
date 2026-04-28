// src/components/layout/Layout.tsx
import type { ReactNode } from 'react';

import Footer from './Footer';
import Navbar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-root">
      <Navbar />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;