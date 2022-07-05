import { Button, Title } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import Laptop, { LaptopProps } from './Laptop';
interface ProjectProps extends LaptopProps {
  title: string;
  description: string;
  weblink: string;
}

const Project = ({ src, title, description, weblink }: ProjectProps) => {
  return (
    <div className="xs:items-start flex flex-col items-center justify-center md:flex-row">
      <Laptop src={src} />
      <div className="max-w-sm space-y-4 text-justify">
        <Title order={1}>{title}</Title>
        <article className="prose text-sm text-blue-400">
          <ReactMarkdown children={description} />
        </article>
        <Button variant="outline" color="grape">
          View
        </Button>
      </div>
    </div>
  );
};

export default Project;
