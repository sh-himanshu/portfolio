import { Title } from '@mantine/core';
import { IconType } from 'react-icons';

interface SectionTitleProps {
  icon: IconType;
  text: string;
}

const SectionTitle = ({ icon: Icon, text }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center py-4 uppercase sm:py-8">
      <Icon className="mr-3 mb-1 h-8 w-8" />
      <Title className="font-title tracking-widest">{text}</Title>
    </div>
  );
};

export default SectionTitle;
