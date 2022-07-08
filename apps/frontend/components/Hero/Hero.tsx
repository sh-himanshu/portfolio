import { Box, Container, Text, Title } from '@mantine/core';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineDownload } from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import type { MiscData } from '../../pages';
import styles from './Hero.module.css';
interface HeroProps {
  data?: MiscData;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0)  0%, ${
          theme.colorScheme === 'dark' ? 'rgb(26 27 30)' : 'rgb(255 255 255)'
        }  50%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)`,
      })}
    >
      <Container size="lg" className="h-screen pt-[80px]">
        <div className="flex h-full  w-full flex-col-reverse items-center justify-around  md:flex-row">
          <motion.div
            className="flex-1 "
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <Title>
              <div className="flex items-end text-4xl">
                <span className="mr-2">Hello</span>
                <img src="/wave.gif" className="mb-1 h-11 w-11" />
                <span className="mr-3">, I'm</span>
                <span className="bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text font-sans text-4xl uppercase tracking-tighter text-transparent  ">
                  Himanshu
                </span>
              </div>
              <div className="mt-8 text-2xl">
                <Typewriter
                  options={{
                    strings: ['Software Engineer.', 'Web Developer.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Title>

            <Text className="mt-8 max-w-lg text-justify">{data?.data.attributes.about}</Text>
            <a
              className={cn(styles.btn, 'mt-10')}
              download
              href={data?.data.attributes.resume}
              target="_blank"
            >
              <span className={styles['text-container']}>
                <HiOutlineDownload className="text-2xl" />
                <span className={styles.text}>RESUME</span>
              </span>
            </a>
          </motion.div>

          <motion.div
            className="flex w-full flex-1 items-center justify-end "
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex w-full justify-center rounded-lg bg-gradient-to-tr from-[#925cffbb] to-[#86fbbd99] p-4 md:w-fit">
              <Tilt tiltReverse={true} className="flex w-48 md:w-52 lg:w-64">
                <Image
                  className={cn(styles['picture'], 'pointer-events-none')}
                  src="/me-crop.png"
                  height={400}
                  width={300}
                />
              </Tilt>
            </div>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
};

export default Hero;
