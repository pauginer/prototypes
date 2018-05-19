const NotFound = { template: '<p>View not found!</p>' }

// Routes: welcome, dashboard, tutorial, article, compose, proofread
const routes = {
  'welcome': Welcome,
  'dashboard': Dashboard,
  'tutorial': Tutorial,
  'article': Article
};

function goToWelcome(){
  app.previousRoute = app.currentRoute;
  app.currentRoute = "welcome";
}

function goToDashboard(){
  app.previousRoute = app.currentRoute;
  app.currentRoute = "dashboard";
}

function goToTutorial(){
  app.previousRoute = app.currentRoute;
  app.currentRoute = "tutorial";
}

function goToArticle(){
  app.previousRoute = app.currentRoute;
  app.currentRoute = "article";
}

function goBack() {
  if(!!app.previousRoute){
    app.currentRoute = app.previousRoute;
    app.previousRoute = null;
  } else {
    goToWelcome();
  }
}


messages.locale=navigator.language.substring(2,0); //TODO More solid way to get locale
const i18n = new VueI18n(messages);


var app = new Vue({
  i18n,
  el: '.app',
  data: {
    currentRoute: "dashboard",
    previousRoute: null
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
});
