
//Filter tuples where the first is a subset of the second
filterSubsets = [ ["very-good", "good"], ["damaging", "maybe-damaging"], ["very-damaging", "damaging"], ["very-damaging", "maybe-damaging"], ["very-good-faith","good-faith"], ["very-bad-faith","bad-faith"]];

//Filter sets where they represent the full search space
filterComplete = [["unpatrolled", "patrolled"], ["minor","regular"], ["registered", "unregistered"], ["own","others"], ["newcomer","experienced", "most-experienced"],["bot", "human"]];

filtersData = { groups: [
  {group: "Contribution quality predictions", clarification: "", info:"quality", filters:[
      {id:"very-good", selected: false, name: "<i>Very likely</i> good", description: "Highly accurate at finding almost all problem-free edits."},
      {id:"maybe-damaging", selected: false, name: "<i>May</i> have problems", description: "Finds most flawed or damaging edits but with lower accuracy."},
      {id:"damaging", selected: false, name: "<i>Likely</i> have problems", description: "With medium accuracy, finds more problem edits than the “Very Likely” filter but fewer than “May.”"},
      {id:"very-damaging", selected: false, name: "<i>Very likely</i> have problems", description: "Highly accurate at finding the most obvious flawed or damaging edits."}
  ]},
  {group: "User intent predictions", clarification: "", info:"intent",filters:[
    {id:"good-faith", selected: false, name: "<i>Very likely</i> good faith", description: "Highly accurate at finding almost all good-faith edits."},
    {id:"bad-faith", selected: false, name: "<i>May be</i> bad faith", description: "Finds most bad-faith edits but with a lower accuracy."},
    {id:"very-bad-faith", selected: false, name: "<i>Very likely</i> bad faith", description: "Highly accurate at finding the most obvious bad faith edits."}
  ]},
  {group: "User registration", filters:[
    {id:"registered", selected: false, name: "Registered", description: "Logged-in editors."},
    {id:"unregistered", selected: false, name: "Unregistered", description: "Editors who aren't logged in."}
  ]},
  {group: "Experience level (for registered users only)", filters:[
    {id:"newcomer", selected: false, name: "Newcomers", description: "Fewer than 10 edits and 4 days of activity."},
    {id:"experienced", selected: false, name: "Learners", description: "More experience than “Newcomers” but less than “Experienced users”."},
    {id:"most-experienced", selected: false, name: "Experienced users", description: "More than 30 days of activity and 500 edits."}
  ]},
  {group: "Contribution authorship", filters:[
    {id:"own", selected: false, name: "Changes by you", description: "Your own contributions."},
    {id:"others", selected: false, name: "Changes by others", description: "All changes except your own."}
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
  {group: "Last revision", filters:[
    {id:"latest", selected: false, name: "Last revision", description: "The most recent change to a page."},
    {id:"older", selected: false, name: "Earlier revisions", description: "All changes that are not the most recent change to a page."}
  ]},
  {group: "Type of change", filters:[
    {id:"content-edit", selected: true, name: "Page edits", description: "Edits to wiki content, discussions, category descriptions..."},
    {id:"new-page", selected: true, name: "Page creations", description: "Edits that make new pages."},
    {id:"categorization", selected: false, name: "Category changes", description: "Records of pages being added or removed from categories."},
    {id:"wikidata-edit", selected: false, name: "Wikidata edits", description: "Edits that originate in Wikidata."},
    {id:"logged", selected: true, name: "Logged actions", description: "Administrative actions, account creations, page deletions, uploads..."},
  ]},
  {group: "Watchlisted pages", filters:[
    {id:"watchlist", selected: false, name: "On watchlist", description: "Changes to pages on your Watchlist."},
    {id:"watchlist-active", selected: false, name: "New Watchlist changes", description: "Changes to Watchlisted pages you haven't visited since the changes occurred."},
    {id:"not-watchlist", selected: false, name: "Not on watchlist", description: "Everything except changes to your Watchlisted pages."}
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
    {id:"mw-tag-references_removed", selected: false, compact: true, name: "References removed", description: "This edit removed an in-line reference tag such as <ref>."},
    {id:"mw-tag-huggle", selected: false, compact: true, name: "Huggle", description: "Edits made using the Huggle tool."},
    {id:"mw-tag-blanking", selected: false, compact: true, name: "Blanking", description: "This edit blanked a substantial part of the article."},
    {id:"mw-tag-wpcleaner", selected: false, compact: true, name: "WPCleaner", description: "	Edits made using the WPCleaner tool."},
    {id:"mw-tag-very-short-new-article", selected: false, compact: true, name: "Very short new article", description: "very short new article."},
    {id:"mw-tag-massmessage-delivery", selected: false, compact: true, name: "MassMessage delivery", description: "Message delivery using Extension:MassMessage."},
    {id:"mw-tag-visualeditor-switched", selected: false, compact: true, name: "Visual edit: Switched", description: "User started to edit using the visual editor, then changed to the wikitext editor."},
    {id:"mw-tag-possible-vandalism", selected: false, compact: true, name: "Possible vandalism", description: "This edit may be vandalism."},
    {id:"mw-tag-speedy-deletion-removal", selected: false, compact: true, name: "Speedy deletion template removed", description: "This edit removed a speedy deletion template."},
    {id:"mw-tag-extraneous_markup", selected: false, compact: true, name: "Extraneous markup", description: "Edits with extraneous markup added with the Edit toolbar."},
    {id:"mw-tag-large_unwikified_new_article", selected: false, compact: true, name: "Large unwikified new article", description: "Tagged by filter 180"},
    {id:"mw-tag-changing_height_or_weight", selected: false, compact: true, name: "changing height and/or weight", description: "A user changed the height or weight of the subject of a biography of a living person."},
    {id:"mw-tag-autobiography", selected: false, compact: true, name: "possible autobiography or conflict of interest", description: "The user created an article including his or her username in the title, or vice-versa."},
    {id:"mw-tag-nowiki_added", selected: false, compact: true, name: "nowiki added", description: "This edit added a nowiki to an article."},
    {id:"mw-tag-categories_removed", selected: false, compact: true, name: "categories removed", description: "This edit removed all direct categories of the article."},
    {id:"mw-tag-bad_external", selected: false, compact: true, name: "Incorrectly formatted external link or image", description: "Tagged by filter 220."},
    {id:"mw-tag-shouting", selected: false, compact: true, name: "Shouting", description: "Tagged by filter 50."},
    {id:"mw-tag-nonsense_characters", selected: false, compact: true, name: "Nonsense characters", description: "Tagged by filter 231."},
    {id:"mw-tag-OAuth_CID_410", selected: false, compact: true, name: "Dispenser [2.4]", description: "Dispenser's tools: Checklinks, Dab solver, Dabfix, Reflinks, and more."},
    {id:"mw-tag-visualeditor-wikitext", selected: false, compact: true, name: "2017 source edit", description: "Edit made using the 2017 wikitext editor"},
    {id:"mw-tag-End_of_page_text", selected: false, compact: true, name: "Text added at end of page", description: "Text added after categories and interwiki. These edits are frequently reverted."},
    {id:"mw-tag-reference_list_removal", selected: false, compact: true, name: "Reference list removal", description: "This edit removed a references grouping tag."},
    {id:"mw-tag-wikilove", selected: false, compact: true, name: "wikilove", description: "Edit made using the WikiLove tool"},
    {id:"mw-tag-Possible_self_promotion_in_userspace", selected: false, compact: true, name: "Possible self promotion in userspace", description: "User added typical promotional text to their user or user talk page."}
  ]},
  {group: "Content categories", url:"https://en.wikipedia.org/wiki/Portal:Contents/Categories", compact: true, prefix:"/", filters:[
    {id:"cat-culture", selected: false, recent:true, compact: true, name: "Culture", description: "Wikipedia category."},
    {id:"cat-geography", selected: false, recent:true, compact: true, name: "Geography", description: "Wikipedia category."},
    {id:"cat-health", selected: false, recent:true, compact: true, name: "Health", description: "Wikipedia category."},
    {id:"cat-history", selected: false, recent:true, compact: true, name: "History", description: "Wikipedia category."},
    {id:"cat-science", selected: false, recent:true, compact: true, name: "Science", description: "Wikipedia category."},
    {id:"cat-people", selected: false, compact: true, name: "People", description: "Wikipedia category."},
    {id:"cat-philosophy", selected: false, compact: true, name: "Philosophy", description: "Wikipedia category."},
    {id:"cat-religion", selected: false, compact: true, name: "Religion", description: "Wikipedia category."},
    {id:"cat-society", selected: false, compact: true, name: "Society", description: "Wikipedia category."},
    {id:"cat-technology", selected: false, compact: true, name: "Technology", description: "Wikipedia category."}
  ]},
  {group: "Users", compact: true, prefix:"@", filters:[
    {id:"user-cronopio", selected: false, compact: true, recent: true, name: "Cronopio", description: "Wikipedia user."},
    {id:"user-David_Biddulph", selected: false, compact: true, recent: true, name: "David Biddulph", description: "Wikipedia user."},
    {id:"user-Ss112", selected: false, compact: true, recent: true, name: "Ss112", description: "Wikipedia user."},
    {id:"user-John_of_Reading", selected: false, compact: true, recent: true, name: "John of Reading", description: "Wikipedia user."},
    {id:"user-Hayman30", selected: false, compact: true, name: "Hayman30", description: "Wikipedia user."},  {id:"user-Arulmani_95", selected: false, compact: true, name: "Arulmani 95", description: "Wikipedia user."},  {id:"user-Gatoclass", selected: false, compact: true, name: "Gatoclass", description: "Wikipedia user."},
    {id:"user-William_Avery", selected: false, compact: true, name: "William Avery", description: "Wikipedia user."},
    {id:"user-Dimadick", selected: false, compact: true, name: "Dimadick", description: "Wikipedia user."},
    {id:"user-Penny_Richards", selected: false, compact: true, name: "Penny Richards", description: "Wikipedia user."}
  ]}
]};

linksData = { expanded: true, personal: false, fav: false, total:0, links: [
{name: "Recent changes for", url:"#", group: true},
{name: "Featured articles", url:"https://en.wikipedia.org/wiki/Special:RecentChangesLinked/Wikipedia:Featured_articles", fav:false},
{name: "Good articles", url:"https://en.wikipedia.org/wiki/Special:RecentChangesLinked/Wikipedia:Good_articles/all", fav:false},
{name: "Living people", url:"https://en.wikipedia.org/wiki/Special:RecentChangesLinked/Category:Living_people", fav:false},
{name: "Vital articles", url:"https://en.wikipedia.org/w/index.php?title=Special:RecentChangesLinked&namespace=0&target=Wikipedia%3AVital+articles", fav:false},
{name: "Utilities", url:"#", group: true},
{name: "RC patrol", url:"https://en.wikipedia.org/wiki/Wikipedia:Recent_changes_patrol", fav:false},
{name: "New pages", url:"https://en.wikipedia.org/wiki/Special:NewPagesFeed", fav:false},
{name: "New editor's contribs", url:"#", fav:false, filters:[{id:"newcomer", selected: true}]},
{name: "IP's contribs", url:"#", fav:false, filters:[{id:"unregistered", selected: true},{id:"content-edit", selected: true},{id:"new-page", selected: true},{id:"logged", selected: true}]},
{name: "Mobile contribs", url:"#", fav:false, filters: [{id:"mw-tag-mobile_edit", selected:true},{id:"content-edit", selected: true},{id:"new-page", selected: true},{id:"logged", selected: true}]},
{name: "Cleanup", url:"https://en.wikipedia.org/wiki/Wikipedia:Cleanup", fav:false},
{name: "Vandalism", url:"https://en.wikipedia.org/wiki/Wikipedia:Administrator_intervention_against_vandalism", fav:false},
{name: "Deletion", url:"https://en.wikipedia.org/wiki/Wikipedia:Articles_for_deletion", fav:false},
{name: "RfC", url:"https://en.wikipedia.org/wiki/Wikipedia:Requests_for_comment", fav:false},
{name: "Backlogs", url:"https://en.wikipedia.org/wiki/Category:Wikipedia_backlog", fav:false},
{name: "About us", url:"#", group: true},
{name: "Introduction", url:"https://en.wikipedia.org/wiki/Wikipedia:Introduction", fav:false},
{name: "FAQ", url:"https://en.wikipedia.org/wiki/Wikipedia:FAQ", fav:false},
{name: "Policy", url:"https://en.wikipedia.org/wiki/Wikipedia:Policies_and_guidelines", fav:false},
{name: "Stats", url:"https://en.wikipedia.org/wiki/Special:Statistics", fav:false},
{name: "News", url:"https://en.wikipedia.org/wiki/Wikipedia:News", fav:false},
{name: "Milestones", url:"https://en.wikipedia.org/wiki/Wikipedia:Milestones", fav:false},
{name: "Village pump", url:"https://en.wikipedia.org/wiki/Wikipedia:Village_pump", fav:false},
{name: "Mailing lists", url:"https://en.wikipedia.org/wiki/Wikipedia:Mailing_lists", fav:false},
{name: "Chat", url:"https://en.wikipedia.org/wiki/Wikipedia:IRC", fav:false},
{name: "Wikipedia Signpost", url:"https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost", fav:false}
]};

linksData = { expanded: false, personal: false, fav: false, total:0, links: [{name: "New editor's contribs", url:"#", fav:false, filters:[{id:"newcomer", selected: true}]},
{name: "IP's contribs", url:"#", fav:false, filters:[{id:"unregistered", selected: true},{id:"content-edit", selected: true},{id:"new-page", selected: true},{id:"logged", selected: true}]},
{name: "Mobile contribs", url:"#", fav:false, filters: [{id:"mw-tag-mobile_edit", selected:true},{id:"content-edit", selected: true},{id:"new-page", selected: true},{id:"logged", selected: true}]}]}
