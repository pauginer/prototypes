const Dashboard = { template: '#dashboard-template',
data: function(){
    return {
      data: data
    };
  },
  methods: {
   next: function () {
     if(data.seenTutorial){
       goToArticle();
     } else {
       goToTutorial();
     }
   },
   back: function() {
     goToWelcome();
   }
  }
}
