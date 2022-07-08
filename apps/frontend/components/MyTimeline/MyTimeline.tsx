import { SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
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
  };

  return (
    <div id="scroll-to-skills" className="flex">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5 }}
      >
        <SimpleGrid cols={4} className="mx-20 w-full">
          {Object.entries(skills).map(([key, value], index) => (
            <ToolTip key={`skill-${index}`} color={value} text={key} />
          ))}
        </SimpleGrid>
      </motion.div>
      <div className="flex-1"></div>
    </div>
  );
};

export default MyTimeline;
