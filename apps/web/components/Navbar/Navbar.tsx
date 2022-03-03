import styles from './Navbar.module.scss';
import { navItems } from '../../pages';
import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import { MdMoreVert, MdClose } from 'react-icons/md';
import { useState } from 'react';
import cn from 'classnames';

interface NavItemsProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo = () => {
  return (
    <div className={styles.image_wrapper}>
      <Image src={logo} alt="logo" />
    </div>
  );
};

const NavItems = ({ show, setShow }: NavItemsProps) => {
  return (
    <>
      <div className={styles.navlink_container}>
        {navItems.map((item, index) => (
          <div key={`nav_item-${index}`}>{item}</div>
        ))}
      </div>
      <div className={styles.toggle} onClick={() => setShow(!show)}>
        <MdMoreVert />
      </div>
      <div
        className={cn(styles.backdrop, { [styles.invisible]: !show })}
        onClick={() => setShow(false)}
      >
        <div className={cn(styles.popup, { 'opacity-0': !show })}>
          <MdClose onClick={() => setShow(false)} />
          {navItems.map((item, index) => (
            <div key={`nav_item_sm-${index}`}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={cn(styles.navbar, {
        'backdrop-blur-sm  backdrop-hue-rotate-60': !show,
      })}
    >
      <Logo />
      <NavItems show={show} setShow={setShow} />
    </div>
  );
};

export default Navbar;
