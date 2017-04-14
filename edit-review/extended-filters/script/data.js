
//Filter tuples where the first is a subset of the second
filterSubsets = [ ["very-good", "good"], ["damaging", "maybe-damaging"], ["very-damaging", "damaging"], ["very-damaging", "maybe-damaging"], ["very-good-faith","good-faith"], ["very-bad-faith","bad-faith"]];

//Filter sets where they represent the full search space
filterComplete = [["unpatrolled", "patrolled"], ["minor","regular"], ["registered", "unregistered"], ["own","others"], ["newcomer","experienced", "most-experienced"],["bot", "human"]];

filtersData = { groups: [
  {group: "Contribution quality predictions", clarification: "", info:"quality", filters:[
      {id:"very-good", selected: false, name: "<i>Very likely</i> good", description: "Highly accurate at finding almost all problem-free edits."},
      {id:"maybe-damaging", selected: false, name: "<i>May</i> have problems", description: "Finds most flawed or damaging edits but with lower accuracy."},
      {id:"damaging", selected: false, name: "<i>Likely</i> have problems", description: "Finds half of flawed or damaging edits with medium accuracy."},
      {id:"very-damaging", selected: false, name: "<i>Very likely</i> have problems", description: "Highly accurate at finding the most obvious 30% of flawed or damaging edits."}
  ]},
  {group: "User intent predictions", clarification: "", info:"intent",filters:[
    {id:"good-faith", selected: false, name: "<i>Very likely</i> good faith", description: "Highly accurate at finding almost all good-faith edits."},
    {id:"bad-faith", selected: false, name: "<i>May be</i> bad faith", description: "Finds most bad-faith edits but with a lower accuracy."},
    {id:"very-bad-faith", selected: false, name: "<i>Likely</i> bad faith", description: "With medium accuracy, finds the most obvious 25% of bad-faith edits."}
  ]},
  {group: "User registration", filters:[
    {id:"registered", selected: false, name: "Registered", description: "Logged-in editors."},
    {id:"unregistered", selected: false, name: "Unregistered", description: "Editors who aren't logged in."}
  ]},
  {group: "Experience level", filters:[
    {id:"newcomer", selected: false, name: "Newcomer", description: "Very new editors: fewer than 10 edits and 4 days of activity."},
    {id:"experienced", selected: false, name: "Experienced", description: "More days of activity and edits than “Newcomers” but fewer than “More experienced.”"},
    {id:"most-experienced", selected: false, name: "More experienced", description: "More than 30 days of activity and 500 edits."}
  ]},
  {group: "Edit authorship", filters:[
    {id:"own", selected: false, name: "Your own edits", description: "Edits by you."},
    {id:"others", selected: false, name: "Edits by others", description: "Edits created by other users (not you)."}
  ]},
  {group: "Automated contributions", filters:[
    {id:"bot", selected: false, name: "Bot", description: "Edits made by automated tools."},
    {id:"human", selected: true, name: "Human (not bot)", description: "Edits made by human editors."}
  ]},
  {group: "Review status", filters:[
    {id:"unpatrolled", selected: false, name: "Pending review", description: "Edits that haven't been checked."},
    {id:"patrolled", selected: false, name: "Reviewed", description: "Edits a reviewer has checked."}
  ]},
  {group: "Significance", filters:[
    {id:"minor", selected: false, name: "Minor edits", description: "Edits the author labeled as minor."},
    {id:"regular", selected: false, name: "Non-minor edits", description: "Edits not labeled as minor."}
  ]},
  {group: "Type of change", filters:[
    {id:"content-edit", selected: true, name: "Page edits", description: "Edits to the content of pages."},
    {id:"new-page", selected: true, name: "New pages", description: "Edits that create pages."},
    {id:"categorization", selected: false, name: "Category changes", description: "Records of pages being added or removed from categories."},
    {id:"wikidata-edit", selected: false, name: "Wikidata edits", description: "Edits that originate in Wikidata."},
    {id:"logged", selected: true, name: "Logged actions", description: "Account creations, page deletions and moves, administrative actions, uploads..."},
  ]},
  {group: "Recency in page", filters:[
    {id:"latest", selected: false, name: "Latest revisions", description: "Edits that are the most recent change to a page."},
    {id:"older", selected: false, name: "Older revisions", description: "Edits that are not the most recent change to a page."}
  ]},
  {group: "Watchlisted content", filters:[
    {id:"watchlist", selected: false, name: "In watchlist", description: "Edits on pages in your watchlist."},
    {id:"watchlist-active", selected: false, name: "New activity in watchlist", description: "Edits for pages in your watchlist with new activity (not visited yet)."},
    {id:"not-watchlist", selected: false, name: "Not in watchlist", description: "Edits for pages not in your watchlist."}
  ]},
  {group: "Content type", compact: true, prefix:":", url:'https://en.wikipedia.org/wiki/Wikipedia:Namespace', filters:[
    {id:"article", selected: false, compact: true, name: "Article", description: "Edits to the main content."},
    {id:"talk", selected: false, compact: true, name: "Talk", description: "Edits to talk pages."},
    {id:"user", selected: false, compact: true, name: "User", description: "Edits to user pages."},
    {id:"user-talk", selected: false, compact: true, name: "User talk", description: "Edits to user talk pages."},
    {id:"wikipedia", selected: false, compact: true, name: "Wikipedia", description: "Edits to the Wikipedia namespace."},
    {id:"wikipedia-talk", selected: false, compact: true, name: "Wikipedia talk", description: "Edits to the Wikipedia talk namespace."},
    {id:"file", selected: false, compact: true, name: "File", description: "Edits to the File namespace."},
    {id:"file-talk", selected: false, compact: true, name: "File talk", description: "Edits to the File talk namespace."},
    {id:"mediawiki", selected: false, compact: true, name: "Mediawiki", description: "Edits to the Mediawiki namespace."},
    {id:"mediawiki-talk", selected: false, compact: true, name: "Mediawiki talk", description: "Edits to the Mediawiki talk namespace."},
    {id:"template", selected: false, compact: true, name: "Template", description: "Edits to the Template namespace."},
    {id:"template-talk", selected: false, compact: true, name: "Template talk", description: "Edits to the Template talk namespace."},
    {id:"help", selected: false, compact: true, name: "Help", description: "Edits to the Help namespace."},
    {id:"help-talk", selected: false, compact: true, name: "Help talk", description: "Edits to the Help talk namespace."},
    {id:"category", selected: false, compact: true, name: "Category", description: "Edits to the Category namespace."},
    {id:"category-talk", selected: false, compact: true, name: "Category talk", description: "Edits to the Category talk namespace."},
    {id:"portal", selected: false, compact: true, name: "Portal", description: "Edits to the Portal namespace."},
    {id:"portal-talk", selected: false, compact: true, name: "Portal talk", description: "Edits to the Portal talk namespace."}
  ]},
  {group: "Edit tags", url:'https://en.wikipedia.org/wiki/Special:Tags', compact: true,prefix:"#", filters:[
    {id:"mw-tag-mobile_edit", selected: false, compact: true, name: "Mobile edit", description: "For edits made from a mobile device."},
    {id:"mw-tag-mobile_web_edit", selected: false, compact: true, name: "Mobile web edit", description: "Edit made from mobile web site."},
    {id:"mw-tag-visualeditor", selected: false, compact: true, name: "Visual Edit", description: "Edit made using the visual editor."},
    {id:"mw-tag-mobile_app_edit", selected: false, compact: true, name: "Mobile app edit", description: "Edits made from mobile apps."},
    {id:"mw-tag-section-blanking", selected: false, compact: true, name: "Section blanking", description: "This edit blanked an entire section."},
    {id:"mw-tag-vandalism", selected: false, compact: true, name: "Possible BLP issue or vandalism", description: "This edit might not adhere to the biographies of living persons policy."},
    {id:"mw-tag-repeating-characters", selected: false, compact: true, name: "Repeating characters", description: "This edit contains a highly repetitive character sequence, like \"!!!!!!!\" or \"hahahahahahaha\"."},
    {id:"mw-tag-canned_edit_summary", selected: false, compact: true, name: "Canned edit summary", description: "Canned edit summary."},
    {id:"mw-tag-huggle", selected: false, compact: true, name: "Huggle", description: "Edits made using the Huggle tool."},
    {id:"mw-tag-blanking", selected: false, compact: true, name: "Blanking", description: "This edit blanked a substantial part of the article."},
    {id:"mw-tag-wpcleaner", selected: false, compact: true, name: "WPCleaner", description: "	Edits made using the WPCleaner tool."},
    {id:"mw-tag-very-short-new-article", selected: false, compact: true, name: "Very short new article", description: "very short new article."},
    {id:"mw-tag-possible-vandalism", selected: false, compact: true, name: "Possible vandalism", description: "This edit may be vandalism."},
    {id:"mw-tag-speedy-deletion-removal", selected: false, compact: true, name: "Speedy deletion template removed", description: "This edit removed a speedy deletion template."},
    {id:"mw-tag-extraneous_markup", selected: false, compact: true, name: "Extraneous markup", description: "Edits with extraneous markup added with the Edit toolbar."},
    {id:"mw-tag-Possible_self_promotion_in_userspace", selected: false, compact: true, name: "Possible self promotion in userspace", description: "User added typical promotional text to their user or user talk page."}
  ]},
  {group: "Content categories", url:"https://en.wikipedia.org/wiki/Portal:Contents/Categories", compact: true, prefix:"/", filters:[
    {id:"cat-culture", selected: false, compact: true, name: "Culture", description: "Wikipedia category."},
    {id:"cat-geography", selected: false, compact: true, name: "Geography", description: "Wikipedia category."},
    {id:"cat-health", selected: false, compact: true, name: "Health", description: "Wikipedia category."},
    {id:"cat-history", selected: false, compact: true, name: "History", description: "Wikipedia category."},
    {id:"cat-science", selected: false, compact: true, name: "Science", description: "Wikipedia category."},
    {id:"cat-people", selected: false, compact: true, name: "People", description: "Wikipedia category."},
    {id:"cat-philosophy", selected: false, compact: true, name: "Philosophy", description: "Wikipedia category."},
    {id:"cat-religion", selected: false, compact: true, name: "Religion", description: "Wikipedia category."},
    {id:"cat-society", selected: false, compact: true, name: "Society", description: "Wikipedia category."},
    {id:"cat-technology", selected: false, compact: true, name: "Technology", description: "Wikipedia category."}
  ]},
  {group: "Users", compact: true, prefix:"@", filters:[
    {id:"user-cronopio", selected: false, compact: true, name: "Cronopio", description: "Wikipedia user."}
  ]}
]};

linksData = { expanded: true, personal: false, fav: false, total:0, links: [
{name: "Recent changes for", url:"#", group: true},
{name: "Featured articles", url:"#", fav:false},
{name: "Good articles", url:"#", fav:false},
{name: "Living people", url:"#", fav:false},
{name: "Vital articles", url:"#", fav:false},
{name: "Utilities", url:"#", group: true},
{name: "RC patrol", url:"#", fav:false},
{name: "New pages", url:"#", fav:false},
{name: "New editor's contribs", url:"#", fav:false, filters:[{id:"newcomer", selected: true}]},
{name: "IP's contribs", url:"#", fav:false},
{name: "Mobile contribs", url:"#", fav:false},
{name: "Cleanup", url:"#", fav:false},
{name: "Vandalism", url:"#", fav:false},
{name: "Deletion", url:"#", fav:false},
{name: "RfC", url:"#", fav:false},
{name: "Backlogs", url:"#", fav:false}
]};
