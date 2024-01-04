const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }, {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }, {
      name: 'headshot',
      title: 'Headshot image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }, {
      name: 'certificationText',
      title: 'Certification Text',
      type: 'array',
      of: [{ type: 'block' }]
    }, {
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            }
          ]
        }
      ]
    }, {
      name: 'backgroundImage1',
      title: 'Background image 1',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }, {
      name: 'backgroundImage2',
      title: 'Background image 2',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }
  ]
}

export default about;