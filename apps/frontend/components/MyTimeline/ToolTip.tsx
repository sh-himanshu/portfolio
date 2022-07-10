import { Box, Popover, Text } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';

interface ToolTipProps {
  color: string;
  text: string;
}

const ToolTip = ({ text, color }: ToolTipProps) => {
  const [opened, setOpened] = useState(false);
  const getIconUrl = (iconName: string) => `https://simpleicons.org/icons/${iconName}.svg`;
  return (
    <Popover
      className="flex items-center justify-center "
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="start"
      withArrow
      trapFocus={false}
      closeOnEscape={false}
      transition="pop-top-left"
      target={
        <Box
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
          sx={(theme) => ({
            backgroundColor: `hsl(${color}, ${theme.colorScheme === 'dark' ? '50' : '80'}%)`,
            ':hover': {
              backgroundColor: `hsl(${color}, ${theme.colorScheme !== 'dark' ? '50' : '30'}%)`,
            },
          })}
          className="flex w-fit rounded-full p-3 hover:ring-4 hover:ring-blue-800 hover:dark:ring-blue-500 md:p-4"
        >
          <div className="h-7 w-7 md:h-9 md:w-9">
            <Image
              layout="responsive"
              src={getIconUrl(text)}
              alt={text}
              height={40}
              width={40}
              className="pointer-events-none"
            />
          </div>
        </Box>
      }
    >
      <div>
        <Text size="sm" align="center" className="capitalize">
          {text}
        </Text>
      </div>
    </Popover>
  );
};

export default ToolTip;
