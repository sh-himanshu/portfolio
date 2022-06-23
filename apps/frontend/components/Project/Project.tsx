import { Button, Text, Title } from '@mantine/core';
import Laptop, { LaptopProps } from './Laptop';

interface ProjectProps extends LaptopProps {}

const Project = ({ src }: ProjectProps) => {
  return (
    <div className="xs:items-start flex flex-col items-center justify-center md:flex-row">
      <Laptop src={src} />
      <div className="max-w-sm space-y-4 text-justify">
        <Title order={1}>Hello World</Title>
        <Text size="md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem consequatur dolor,
          laborum obcaecati accusamus autem molestiae? Alias non, corporis dolorum error accusamus
          vero repudiandae modi, rem explicabo repellendus reprehenderit eos.
        </Text>
        <Button variant="outline" color="grape">
          View
        </Button>
      </div>
    </div>
  );
};

export default Project;
