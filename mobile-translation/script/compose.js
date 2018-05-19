const Compose = { template: '#compose-template',
data: function(){
    return {
      data: data
    };
  },
  mounted: function(){
    var tr = this.$refs.translation;
    tr.focus();
    window.scrollTo(0, 0);
  },
  methods: {
   next: function () {
     data.translation[data.selection] = app.$children[0].$refs.translation.innerHTML;
     goToArticle();
     var pos = data.selection;
     if(pos< data.maxSelection)
      data.selection = pos +1;
   },
   back: function() {
     goToArticle();
   }
  }
}
