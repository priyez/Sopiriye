export default {
  name: 'todo',
  title: 'Todo',
  type: 'document',
  initialValue: {
    featured: false,
  },
  fields: [
    {
      name: 'task',
      title: 'Task',
      description: 'Keep titles short',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Status',
      type: 'boolean',
      description: 'Indicates the status of the task',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },

  ],

  preview: {
    select: {
      title: 'task',
    },

  },
};
