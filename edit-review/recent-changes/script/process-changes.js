//Script that modifies the recent changes list to be integrated in the prototype

function probablyAddClass(itemList, className, percentage){
  var prob = percentage/100.0;
  itemList.each(function(i, item){
    var needsAdding = Math.random() < prob;
    if(needsAdding){
      $(item).addClass(className);
    }
  });
}

function addMetadataToChanges(){

$(".mw-changeslist li").addClass("change");

//REVIEW

//Make 70% of the edits unpatrolled, and mark as patrolled the rest.
probablyAddClass($(".change"), "unpatrolled", 70);
$(".change:not(.unpatrolled)").addClass("patrolled");

//QUALITY

//Make 20% of the damaging edits to be very-damaging
probablyAddClass($(".change.damaging"), "very-damaging", 20);

//Make damaging and very damaging changes to also become "maybe damaging", including also additional ones:
$(".change.damaging, .change.very-damaging").addClass("maybe-damaging");
probablyAddClass($(".change:not(.damaging)"), "maybe-damaging", 20);


//Make 50% of the non-damaging edits to be very-good
probablyAddClass($(".change:not(.maybe-damaging)"), "very-good", 50);

//USER INTENT

//Mark 1/2 as good-faith, and 1/3 of the damaging edits as bad-faith leaving the rest undefined.
probablyAddClass($(".change"), "good-faith", 50);
probablyAddClass($(".change:not(.good-faith).damaging"), "bad-faith", 60);
probablyAddClass($(".change.bad-faith"), "very-bad-faith", 20);

//USER TYPES

//Mark anonymous and registered
$(".change .mw-anonuserlink").parent(".change").addClass("unregistered");
$(".change:not(.unregistered)").addClass("registered");

//Mark 25% of registered users as newcomers
//probablyAddClass($(".change.registered"), "newcomer", 25);

//Mark edits from those users without a talk page as newcomers
$("a.new[title^='User']").parent(".change").addClass("newcomer");

probablyAddClass($(".change.registered:not(.newcomer)"), "experienced", 50);
$(".change.registered:not(.newcomer, .experienced)").addClass("most-experienced");

//Mark bots and the rest as human
$(".change .botedit").parent(".change").addClass("bot");
$(".change:not(.bot)").addClass("human");

//All edits by others:
$(".change").addClass("others");


//CONTENT TYPE

$(".change[class^='mw-changeslist-ns0-']").addClass("article");
$(".change[class^='mw-changeslist-ns1-']").addClass("talk");
$(".change[class^='mw-changeslist-ns2-']").addClass("user");
$(".change[class^='mw-changeslist-ns3-']").addClass("user talk");
$(".change[class^='mw-changeslist-ns4-']").addClass("wikipedia");
$(".change[class^='mw-changeslist-ns5-']").addClass("wikipedia talk");
$(".change[class^='mw-changeslist-ns6-']").addClass("file");
$(".change[class^='mw-changeslist-ns7-']").addClass("file talk");
$(".change[class^='mw-changeslist-ns8-']").addClass("mediawiki");
$(".change[class^='mw-changeslist-ns9-']").addClass("mediawiki talk");
$(".change[class^='mw-changeslist-ns10-']").addClass("template");
$(".change[class^='mw-changeslist-ns11-']").addClass("template talk");
$(".change[class^='mw-changeslist-ns12-']").addClass("help");
$(".change[class^='mw-changeslist-ns13-']").addClass("help talk");
$(".change[class^='mw-changeslist-ns14-']").addClass("category");
$(".change[class^='mw-changeslist-ns14-']").addClass("category talk");
$(".change[class^='mw-changeslist-ns100-']").addClass("portal");
$(".change[class^='mw-changeslist-ns100-']").addClass("portal talk");


//SUBJECT OF CHANGE
$(".change .newpage").parent(".change").addClass("new-page");
$(".change.category").addClass("categorization");
$(".change .wikibase-edit").parent(".change").addClass("wikidata-edit");
$(".change:not(.new-page):not(.categorization):not(.wikidata-edit)").addClass("content-edit");

//CHANGE SIZE
//Mark minor edits and keep the rest as regular
$(".change .minoredit").parent(".change").addClass("minor");
$(".change:not(.minor)").addClass("regular");

//CATEGORIES
//Assigning some random categories to articles
probablyAddClass($(".change.article"), "cat-culture", 10);
probablyAddClass($(".change.article"), "cat-geography", 10);
probablyAddClass($(".change.article"), "cat-health", 10);
probablyAddClass($(".change.article"), "cat-history", 10);
probablyAddClass($(".change.article"), "cat-science", 10);
probablyAddClass($(".change.article"), "cat-people", 10);
probablyAddClass($(".change.article"), "cat-philosophy", 10);
probablyAddClass($(".change.article"), "cat-religion", 10);
probablyAddClass($(".change.article"), "cat-society", 10);
probablyAddClass($(".change.article"), "cat-technology", 10);


//Replace links:
$(".change a[href^='/']:not([href^='//'])").each(function(i,a){
  var url= $(a).attr("href");
  url = "//en.wikipedia.org"+url;
  $(a).attr("href", url);
  $(a).attr("target", "__blank");
});


}
