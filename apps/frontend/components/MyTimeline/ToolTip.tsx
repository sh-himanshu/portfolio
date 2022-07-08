import { Box, Image, Popover, Text } from '@mantine/core';
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
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="start"
      withArrow
      trapFocus={false}
      closeOnEscape={false}
      transition="pop-top-left"
      //   width={100}
      styles={{ body: { pointerEvents: 'none' } }}
      target={
        <Box
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
          sx={(theme) => ({
            backgroundColor: `hsl(${color}, ${theme.colorScheme === 'dark' ? '50' : '80'}%)`,
          })}
          className="m-2 flex w-fit rounded-full p-4"
        >
          <Image
            src={getIconUrl(text)}
            alt={text}
            height={40}
            width={40}
            className="pointer-events-none"
          />
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
