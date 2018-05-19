const Article = { template: '#article-template',
data: function(){
    return {
      data: data
    };
  },
  methods: {
   next: function () {
     var pos = data.selection;
     if(pos< data.maxSelection)
      data.selection = pos +1;
   },
    prev: function () {
      var pos = data.selection;
      if(pos>0)
        data.selection = pos -1;
    },
   back: function() {
     goToDashboard();
   },
   apply: function(){
     var pos = data.selection;
     data.translation[pos] = data.mt[data.targetLang][pos];
     this.next();
   }
  }
}
