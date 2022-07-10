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
        <div className="flex h-full  w-full flex-col-reverse items-center justify-around md:flex-row">
          <motion.div
            className="md:px-8 lg:flex-1 lg:px-0"
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <Title>
              <div className="flex items-end text-3xl sm:text-4xl lg:text-5xl">
                <span className="mr-2">Hello</span>
                <img src="/wave.gif" className="mb-1 h-8 w-8 md:h-9 md:w-9 lg:h-11 lg:w-11" />
                <span className="mr-3">, I'm</span>
                <span className="bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text font-sans uppercase tracking-tighter  text-transparent">
                  Himanshu
                </span>
              </div>
              <div className="my-4 text-2xl md:my-8">
                <Typewriter
                  options={{
                    strings: ['Software Engineer.', 'Web Developer.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Title>

            <Text className="max-w-lg text-justify">{data?.data.attributes.about}</Text>
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
            className=" flex w-full flex-1 items-center justify-end"
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex w-full justify-center rounded-lg bg-gradient-to-tr from-[#925cffbb] to-[#86fbbd99] p-4 sm:mx-20 md:mx-0 md:w-fit">
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
