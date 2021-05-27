export default {
  name: 'place',
  title: 'Место',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Название'
    },
    {
      type: 'reference',
      name: 'city',
      title: 'Город',
      to: [{ type: 'city' }]
    },
    {
      type: 'string',
      name: 'address',
      title: 'Адресс'
    },
    {
      type: 'string',
      name: 'fullAddress',
      title: 'Полный адресс'
    },
    {
      type: 'string',
      name: 'inst',
      title: 'Instagram'
    },
    {
      type: 'string',
      name: 'gmapsLink',
      title: 'Google maps'
    },
    {
      title: 'Координаты',
      name: 'location',
      type: 'geopoint'
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ],
      validation: Rule => Rule.unique(),
      options: {
        layout: 'tags'
      }
    },
    
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'city.title'
    },
  }
}
