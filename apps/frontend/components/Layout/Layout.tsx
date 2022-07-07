import { Affix, Transition, useMantineColorScheme } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import React from 'react';
import { HiOutlineArrowUp as ArrowUpIcon } from 'react-icons/hi';
import Footer from '../Footer/Footer';
import HeaderResponsive from '../HeaderResponsive/HeaderResponsive';

interface LayoutProps {
  children: React.ReactNode;
}

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix
      position={{
        bottom: 20,
        right: 20,
      }}
    >
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <button
            className="rounded-full"
            style={transitionStyles}
            onClick={() =>
              scrollTo({
                y: 0,
              })
            }
          >
            <div className="rounded-full p-2 hover:bg-cyan-600 hover:text-gray-700 hover:shadow-lg">
              <ArrowUpIcon className="h-7 w-7" />
            </div>
          </button>
        )}
      </Transition>
    </Affix>
  );
};

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
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
