const home = {
  name: 'home',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }, {
      name: 'introParagraph',
      title: 'Intro paragraph',
      type: 'text',
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
      name: 'quote',
      title: 'Quote',
      type: 'text',
    }, {
      name: 'workWithMe',
      title: 'Work With Me paragraph',
      type: 'text',
    }, {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            }, {
              name: 'author',
              title: 'Author',
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

export default home;