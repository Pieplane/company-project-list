import React from 'react'
import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'CYBERIA',
    description: 'Company project list',
  };

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        
        <body>
            <Navbar />
            {children}
        </body>
    </html>
  )
}

export default MainLayout