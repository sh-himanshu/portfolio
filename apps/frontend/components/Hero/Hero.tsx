import { Box, Container, Title } from '@mantine/core';
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
      <Container size="lg" className="pt-[60px] md:h-screen">
        <div className="flex h-full w-full flex-col-reverse items-center justify-center py-8 sm:px-20 md:flex-row md:justify-around md:py-0 md:px-0">
          <motion.div
            className="mt-10 w-full  md:mt-0 md:w-fit md:px-8 lg:basis-1/2 lg:px-0"
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <Title className="font-title text-2xl font-light  md:text-4xl">
              <div>
                <span className="mr-2">
                  Hello
                  <img
                    src="/wave.gif"
                    className="ml-2 mb-2 inline h-8 w-8 md:h-9 md:w-9 lg:h-11 lg:w-11"
                  />
                </span>
                <div>
                  <span className="mr-3 inline">I'm</span>
                  <span
                    className={cn(
                      styles['text-gradient'],
                      'inline bg-clip-text text-3xl font-medium uppercase tracking-tighter text-transparent md:text-5xl'
                    )}
                  >
                    Himanshu,
                  </span>
                </div>
                <div>& I am a</div>
              </div>
              <div className="mb-4 md:mb-8">
                <Typewriter
                  options={{
                    strings: ['Software Engineer.', 'Full Stack Developer.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Title>

            {/* <Text className="hidden max-w-lg text-justify md:block">
              {data?.data.attributes.about}
            </Text> */}
            <a
              className={cn(styles.btn, 'mx-auto mt-4 scale-[70%] md:mx-0 md:mt-10 md:scale-100')}
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
            className=" flex w-full items-center justify-end  md:basis-1/2"
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex w-full justify-center rounded-lg bg-gradient-to-tr from-[#925cffbb] to-[#86fbbd99] p-4  md:w-fit">
              <Tilt tiltReverse={true} className="flex w-32 sm:w-40 md:w-52 lg:w-64">
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
