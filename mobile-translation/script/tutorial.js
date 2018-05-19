const Tutorial = { template: '#tutorial-template',
data: function(){
    return {
      data: data
    };
  },
  methods: {
   next: function () {
     data.seenTutorial = true;
     goToArticle();
   },
   back: function() {
     goToDashboard();
   }
  }
}
