export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'skill_type',
      type: 'string',
      options: {
        list: [
          { title: '👨‍💻 Language', value: 'language' },
          { title: '🌐 Frontend', value: 'frontend' },
          { title: '🗄️ Backend', value: 'backend' },
          { title: '🛢️ DB', value: 'database' },
          { title: '⚙️ Tools', value: 'tools' },
          { title: '💻 IDE', value: 'ide' },
          { title: '✨ Design', value: 'design' },
          { title: '⬛ Other', value: 'other' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'proficiency',
      title: 'Proficiency',
      type: 'string',
      options: {
        list: ['beginner', 'intermediate', 'advanced'],
        layout: 'radio',
      },
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
