const workWithMe = {
  name: 'workWithMe',
  title: 'Work with me',
  type: 'document',
  fields: [
    {
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            }, {
              name: 'duration',
              title: 'Duration',
              type: 'string',
            }, {
              name: 'calendly',
              title: 'Calendly link',
              type: 'string',
            }, {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }]
            }
          ]
        }
      ]
    }, {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            }, {
              name: 'answer',
              title: 'Answer',
              type: 'text',
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

export default workWithMe;