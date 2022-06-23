import { useMantineColorScheme } from '@mantine/core';
import React from 'react';
import Footer from '../Footer/Footer';
import HeaderResponsive from '../HeaderResponsive/HeaderResponsive';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const props = {
    links: [
      {
        link: '/home',
        label: 'Home',
      },
      {
        link: '/about',
        label: 'About',
      },
      {
        link: '/work',
        label: 'Work',
      },
      {
        link: '/skills',
        label: 'Skills',
      },
      {
        link: '/contact',
        label: 'Contact',
      },
    ],
  };

  const { colorScheme } = useMantineColorScheme();

  return (
    <div className={colorScheme}>
      <HeaderResponsive {...props} />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
