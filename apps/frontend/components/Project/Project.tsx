import { Paper, Title } from '@mantine/core';
import { MdOpenInNew } from 'react-icons/md';
import Laptop, { LaptopProps } from './Laptop';
interface ProjectProps extends LaptopProps {
  title: string;
  description: string;
  weblink: string;
}

const Project = ({ src, title, description, weblink }: ProjectProps) => {
  return (
    <Paper
      shadow="lg"
      withBorder
      className="flex h-full flex-col items-center justify-evenly rounded-lg pb-4"
    >
      <Title className="capitalize">{title}</Title>
      <div className="relative pt-5 ">
        <div className="group absolute inset-0 z-10 flex items-center justify-center rounded-lg hover:backdrop-blur-sm">
          <a
            target="_blank"
            href={weblink}
            className="rounded-lg bg-black p-3 opacity-0 hover:ring-4 hover:ring-purple-400 hover:ring-offset-2 group-hover:opacity-100"
          >
            <MdOpenInNew className="h-7 w-7 text-white" />
          </a>
        </div>
        <Laptop src={src} />
      </div>
    </Paper>
  );
  // return (
  //   <Paper className="xs:items-start flex flex-col items-center justify-center  md:flex-row">
  //     <Overlay
  //       onMouseEnter={() => setIsActive(true)}
  //       onMouseLeave={() => setIsActive(false)}
  //       className={cn({
  //         'bg-black/60': isActive,
  //         'bg-transparent': !isActive,
  //       })}
  //     />

  //     <Laptop src={src} />

  //     <div className="max-w-sm space-y-4 text-justify">
  //       <Title order={1}>{title}</Title>
  //       <article className="prose text-sm text-blue-400">
  //         <ReactMarkdown children={description} />
  //       </article>
  //     </div>
  //   </Paper>
  // );
};

export default Project;
