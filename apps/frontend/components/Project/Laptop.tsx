import cn from 'classnames';
import LaptopFrame from '../../public/laptop-frame.svg';
import styles from './Laptop.module.css';

export interface LaptopProps {
  src: string;
}

const Laptop = ({ src }: LaptopProps) => {
  return (
    <div className={cn(styles['device-laptop'], 'max-w-[35rem]')}>
      <img src={src} alt="laptop screen" className={styles.screen} />
      <img src={LaptopFrame.src} alt="laptop-frame" className={styles['img-fluid']} />
    </div>
  );
};

export default Laptop;
