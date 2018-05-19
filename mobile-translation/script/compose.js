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

   },
   back: function() {
     goToArticle();
   }
  }
}
