import { Container, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';

import ToolTip from './ToolTip';
const MyTimeline = () => {
  const skills = {
    css3: '205, 79%',
    tailwindcss: '189, 94%',
    typescript: '211, 60%',
    nodedotjs: '120, 50%',
    javascript: '53, 93%',
    python: '207, 51%',
    html5: '13, 77%',
    openjdk: '0, 0%',
    react: '193, 95%',
    nextdotjs: '0, 0%',
    figma: '14, 89%',
    sass: '330, 50%',
    redux: '263, 46%',
    git: '9, 86%',
    amazonaws: '213, 28%',
    graphql: '319, 100%',
  };

  return (
    <Container size="lg" id="scroll-to-skills">
      <SectionTitle icon={FaTools} text="Skills" />
      <div className="flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <SimpleGrid cols={4} className="gap-4 sm:gap-8 lg:gap-12">
            {Object.entries(skills).map(([key, value], index) => (
              <ToolTip key={`skill-${index}`} color={value} text={key} />
            ))}
          </SimpleGrid>
        </motion.div>
      </div>
    </Container>
  );
};

export default MyTimeline;
