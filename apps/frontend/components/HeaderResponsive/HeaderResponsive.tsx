import { Burger, Container, createStyles, Group, Header, Paper, Transition } from '@mantine/core';
import { useBooleanToggle, useWindowScroll } from '@mantine/hooks';
import cn from 'classnames';
import { useState } from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 100,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors['grape'][9], 0.25)
          : theme.colors['grape'][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

const HeaderResponsive = ({ links }: HeaderResponsiveProps) => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [_, scrollTo] = useWindowScroll();

  const items = links.map((link) => (
    <a
      key={link.label}
      data-id={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        toggleOpened(false);
        const elementId = (event.target as HTMLAnchorElement).dataset['id']?.toLowerCase();
        if (elementId === 'home') return scrollTo({ y: 0 });
        if (elementId)
          (document.getElementById(`scroll-to-${elementId}`) as HTMLElement)?.scrollIntoView({
            behavior: 'smooth',
            inline: 'end',
          });
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header
      height={HEADER_HEIGHT}
      className={cn(classes.root, ' bg-white/80 backdrop-blur-md dark:bg-black/80')}
    >
      <Container className={classes.header}>
        <div className="w-full text-center font-stylish  text-xl font-bold md:w-fit md:text-3xl">
          Himanshu Sharma
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
          <div className="ml-4">
            <ColorSchemeToggle />
          </div>
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              className={cn(classes.dropdown, 'bg-white/90 dark:bg-black/90')}
              withBorder
              style={styles}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HeaderResponsive;
