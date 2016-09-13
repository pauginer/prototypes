
//Filter tuples where the first is a subset of the second
filterSubsets = [ ["very-good", "good"], ["damaging", "maybe-damaging"], ["very-damaging", "damaging"], ["very-damaging", "maybe-damaging"], ["very-good-faith","good-faith"], ["very-bad-faith","bad-faith"]];

//Filter sets where they represent the full search space
filterComplete = [["minor","regular"], ["registered", "unregistered"], ["own","others"], ["newcomer","experienced", "most-experienced"]];

filtersData = { groups: [
  {group: "Review", filters:[
    {id:"unpatrolled", selected: false, name: "Pending review", description: "Edits not reviewed yet."},
    {id:"patrolled", selected: false, name: "Completed review", description: "Edits already reviewed."}
  ]},
  {group: "Contribution quality (predicted)", info:"quality", filters:[
      {id:"very-good", selected: false, name: "Very likely constructive", description: "Edits with 90-100% probability of being helpful."},
      {id:"good", selected: false, name: "Likely constructive", description: "Edits with 50-100% probability of being helpful."},
      {id:"maybe-damaging", selected: false, name: "May have problems", description: "Edits with a 50-100% probability of being flawed or damaging."},
      {id:"damaging", selected: false, name: "Likely have problems", description: "Edits with a 65-100% probability of being a flawed or damaging."},
      {id:"very-damaging", selected: false, name: "Very likely have problems", description: "Edits with a 90-100% probability of being flawed or damaging."}
  ]},
  {group: "User intent (predicted)", info:"intent",filters:[
    {id:"very-good-faith", selected: false, name: "Very likely good faith", description: "Edits with  93-100% probability of being in good faith."},
    {id:"good-faith", selected: false, name: "Likely good faith", description: "Edits with 50-100% probability of being in good faith."},
    {id:"bad-faith", selected: false, name: "Likely bad faith", description: "Edits with 50-100% probability of being in bad faith."},
    {id:"very-bad-faith", selected: false, name: "Very likely bad faith", description: "Edits with  90-100% probability of being in bad faith."}
  ]},
  {group: "User experience level", filters:[
    {id:"newcomer", selected: false, name: "Newcomer", description: "Editors that joined recently or with few edits."},
    {id:"experienced", selected: false, name: "More experienced", description: "Edits by those who are not Newcomers, but not the most experienced editors either."},
    {id:"most-experienced", selected: false, name: "Most experienced", description: "Edits by the most productive editors."}
  ]},
  {group: "Users", filters:[
    {id:"registered", selected: false, name: "Registered", description: "Editor with an account considered as highly damaging."},
    {id:"unregistered", selected: false, name: "Unregistered", description: "Anonymous editor."},
    {id:"own", selected: false, name: "Your edits", description: "Edits by you."},
    {id:"others", selected: false, name: "Edits by others", description: "Edits created by other users (not you)."}
  ]},
  {group: "Change size", filters:[
    {id:"minor", selected: false, name: "Minor edit", description: "Edits the author labeled as minor."},
    {id:"regular", selected: false, name: "Non minor edits", description: "Edits not labeled as minor."}
  ]},
  {group: "Content type", compact: true, url:'https://en.wikipedia.org/wiki/Wikipedia:Namespace', filters:[
    {id:"article", selected: false, name: "Article", description: "Edits to the main content."},
    {id:"talk", selected: false, name: "Talk", description: "Edits to talk pages."},
    {id:"user", selected: false, name: "User", description: "Edits to user pages."},
    {id:"wikipedia", selected: false, name: "Wikipedia", description: "Edits to the Wikipedia namespace."},
    {id:"file", selected: false, compact: true, name: "File", description: "Edits to the File namespace."},
    {id:"mediawiki", selected: false, compact: true, name: "Mediawiki", description: "Edits to the Mediawiki namespace."},
    {id:"template", selected: false, compact: true, name: "Template", description: "Edits to the Template namespace."},
    {id:"help", selected: false, compact: true, name: "Help", description: "Edits to the Help namespace."},
    {id:"category", selected: false, compact: true, name: "Category", description: "Edits to the Category namespace."},
    {id:"portal", selected: false, compact: true, name: "Portal", description: "Edits to the Portal namespace."}
  ]},
  {group: "Edit tags", url:'https://en.wikipedia.org/wiki/Special:Tags', compact: true, filters:[
    {id:"mw-tag-mobile_edit", selected: false, name: "Mobile edit", description: "For edits made from a mobile device."},
    {id:"mw-tag-mobile_web_edit", selected: false, name: "Mobile web edit", description: "Edit made from mobile web site."},
    {id:"mw-tag-visualeditor", selected: false, name: "Visual Edit", description: "Edit made using the visual editor."},
    {id:"mw-tag-mobile_app_edit", selected: false, name: "Mobile app edit", description: "Edits made from mobile apps."},
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
  {group: "Content categories", url:"https://en.wikipedia.org/wiki/Portal:Contents/Categories", compact: true, filters:[
    {id:"cat-culture", selected: false, name: "Culture", description: "Wikipedia category."},
    {id:"cat-geography", selected: false, name: "Geography", description: "Wikipedia category."},
    {id:"cat-health", selected: false, name: "Health", description: "Wikipedia category."},
    {id:"cat-history", selected: false, name: "History", description: "Wikipedia category."},
    {id:"cat-science", selected: false, compact: true, name: "Science", description: "Wikipedia category."},
    {id:"cat-people", selected: false, compact: true, name: "People", description: "Wikipedia category."},
    {id:"cat-philosophy", selected: false, compact: true, name: "Philosophy", description: "Wikipedia category."},
    {id:"cat-religion", selected: false, compact: true, name: "Religion", description: "Wikipedia category."},
    {id:"cat-society", selected: false, compact: true, name: "Society", description: "Wikipedia category."},
    {id:"cat-technology", selected: false, compact: true, name: "Technology", description: "Wikipedia category."}
  ]}
]};
