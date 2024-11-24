import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'backgroundImage', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'BlogContent', // required
      type: 'textarea', // required
      required: true,
    },
  ],
}
