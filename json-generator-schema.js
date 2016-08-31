// http://www.json-generator.com/
[
  '{{repeat(100, 100)}}',
  {
    id: '{{index(1)}}',
    techTalkId: function(tags, index) {
      return ('ETT0' + tags.integer(1001, 9999));
    },
    status: '{{random("Scheduled", "Done", "Canceled", "Planned")}}',
    scheduledFor: '{{date(new Date(2015, 09, 10), new Date())}}',
    title: '{{lorem(5, "words")}}',
    description: '{{lorem(1, "paragraphs")}}',
    trainers: [
      '{{repeat(random(1, 2, 3))}}',
      {
        id: '{{index()}}',
        firstName: '{{firstName()}}',
        lastName: '{{surname()}}'
      }
    ]
    
  }
]
