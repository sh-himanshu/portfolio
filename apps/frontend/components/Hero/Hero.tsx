import { Container, createStyles, Text, Title } from '@mantine/core';
import cn from 'classnames';
import Image from 'next/image';
import { HiOutlineDownload } from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import type { MiscData } from '../../pages';

import styles from './Hero.module.css';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, rgb(26 27 30)  70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: theme.spacing.xl * 7,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 600,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

interface HeroProps {
  data?: MiscData;
}

const Hero = ({ data }: HeroProps) => {
  // const { data, isLoading } = useQuery('miscData', getData, { initialData });
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Hi, I'm{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Himanshu Sharma
              </Text>
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

            <Text className={classes.description} mt={30}>
              {data?.data.attributes.about}
            </Text>
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
          </div>
          <Tilt tiltReverse={true} className=" p-3">
            <Image
              className={cn(styles['picture'], 'pointer-events-none')}
              src="/me-crop.png"
              height={466}
              width={350}
            />
          </Tilt>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
