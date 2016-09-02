// http://www.json-generator.com/
[
  '{{repeat(10, 10)}}',
  {
    id: '{{index(1)}}',
    trainingId: function(tags, index) {
      return ('ETT0' + tags.integer(1001, 9999));
    },
    icon: function(tags, index) {
      return ('svg-' + tags.integer(1, 16));
    },
    status: '{{random("Scheduled", "Done", "Canceled", "Planned")}}',
    scheduledFor: '{{date(new Date(2015, 09, 10), new Date())}}',
    title: '{{lorem(1, "sentences")}}',
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
