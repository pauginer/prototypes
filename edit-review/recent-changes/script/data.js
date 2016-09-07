filtersData = { groups: [
  {group: "Review", filters:[
    {id:"unpatrolled", selected: false, name: "Pending review", description: "Edits not reviewed yet"},
    {id:"patrolled", selected: false, name: "Completed review", description: "Edits already reviewed"}
  ]},
  {group: "Contribution quality", filters:[
      {id:"good", selected: false, name: "Positive", description: "Automatically considered as constructive"},
      {id:"bad", selected: false, name: "Problematic", description: "Automatically considered as damaging at different degrees."},
      {id:"very-bad", selected: false, name: "Problematic (most damaging)", description: "Automatically considered as highly damaging."}
  ]},
  {group: "User intent", filters:[
    {id:"good-faith", selected: false, name: "Good-faith", description: "Automatically considered to be made in good-faith"},
    {id:"bad-faith", selected: false, name: "Probably bad faith", description: "Automatically considered as being made in bad faith"}
  ]},
  {group: "Users", filters:[
    {id:"registered", selected: false, name: "Registered", description: "Editor with an account considered as highly damaging"},
    {id:"unregistered", selected: false, name: "Unregistered", description: "Anonymous editor"},
    {id:"newcomer", selected: false, name: "Newcomer", description: "Editors that joined recently or with few edits"},
    {id:"own", selected: false, name: "Your edits", description: "Edits by you"},
    {id:"others", selected: false, name: "Edits by others", description: "Edits created by other users (not you)"}
  ]},
  {group: "Change size", filters:[
    {id:"minor", selected: false, name: "Minor edit", description: "Edits the author labeled as minor"},
    {id:"regular", selected: false, name: "Non minor edits", description: "Edits not labeled as minor"}
  ]},
  {group: "Content type", search: true, url:'https://en.wikipedia.org/wiki/Wikipedia:Namespace', filters:[
    {id:"article", selected: false, name: "Article", description: "Edits to the main content"},
    {id:"talk", selected: false, name: "Talk", description: "Edits to talk pages"},
    {id:"user", selected: false, name: "User", description: "Edits to user pages"},
    {id:"wikipedia", selected: false, name: "Wikipedia", description: "Edits to the Wikipedia namespace"}
  ]},
  {group: "Edit tags", url:'https://en.wikipedia.org/wiki/Special:Tags', search: true, filters:[
    {id:"mobile_edit", selected: false, name: "Mobile edit", description: "For edits made from a mobile device"},
    {id:"mobile_web_edit", selected: false, name: "Mobile web edit", description: "Edit made from mobile web site"},
    {id:"visualeditor", selected: false, name: "Visual Edit", description: "	Edit made using the visual editor"},
    {id:"mobile_app_edit", selected: false, name: "Mobile app edit", description: "Edits made from mobile apps"}
  ]},
  {group: "Content categories", url:"https://en.wikipedia.org/wiki/Portal:Contents/Categories", search: true, filters:[
    {id:"cat-culture", selected: false, name: "Culture", description: "Recently edited"},
    {id:"cat-geography", selected: false, name: "Geography", description: "Recently edited"}
  ]}
]};

//EXTENDED

extendedFilters = { groups: [
  {group: "Content type", filters:[
    {id:"article", selected: false, name: "Article", description: "Edits to the main content"},
    {id:"talk", selected: false, name: "Talk", description: "Edits to talk pages"},
    {id:"user", selected: false, name: "User", description: "Edits to user pages"},
    {id:"wikipedia", selected: false, name: "Wikipedia", description: "Edits to the Wikipedia namespace"},
    {id:"file", selected: false, name: "File", description: "Edits to the File namespace"},
    {id:"file", selected: false, name: "File", description: "Edits to the File namespace"},
    {id:"mediawiki", selected: false, name: "Mediawiki", description: "Edits to the Mediawiki namespace"},
    {id:"template", selected: false, name: "Template", description: "Edits to the Template namespace"},
    {id:"help", selected: false, name: "Help", description: "Edits to the Help namespace"},
    {id:"category", selected: false, name: "Category", description: "Edits to the Category namespace"},
    {id:"portal", selected: false, name: "Portal", description: "Edits to the Portal namespace"}
  ]},
  {group: "Edit tags", filters:[
    {id:"mobile_edit", selected: false, name: "Mobile edit", description: "For edits made from a mobile device"},
    {id:"mobile_web_edit", selected: false, name: "Mobile web edit", description: "Edit made from mobile web site"},
    {id:"visualeditor", selected: false, name: "Visual Edit", description: "	Edit made using the visual editor"},
    {id:"mobile_app_edit", selected: false, name: "Mobile app edit", description: "Edits made from mobile apps"},
    {id:"section-blanking", selected: false, name: "Section blanking", description: "This edit blanked an entire section."},
    {id:"vandalism", selected: false, name: "Possible BLP issue or vandalism", description: "This edit might not adhere to the biographies of living persons policy."},
    {id:"repeating-characters", selected: false, name: "Repeating characters", description: "This edit contains a highly repetitive character sequence, like \"!!!!!!!\" or \"hahahahahahaha\"."},
    {id:"canned_edit_summary", selected: false, name: "Canned edit summary", description: "Canned edit summary."},
    {id:"huggle", selected: false, name: "Huggle", description: "Edits made using the Huggle tool."},
    {id:"blanking", selected: false, name: "Blanking", description: "This edit blanked a substantial part of the article."},
    {id:"wpcleaner", selected: false, name: "WPCleaner", description: "	Edits made using the WPCleaner tool."},
    {id:"very-short-new-article", selected: false, name: "Very short new article", description: "very short new article"},
    {id:"possible-vandalism", selected: false, name: "Possible vandalism", description: "This edit may be vandalism."},
    {id:"speedy-deletion-removal", selected: false, name: "Speedy deletion template removed", description: "This edit removed a speedy deletion template."},
    {id:"extraneous_markup", selected: false, name: "Extraneous markup", description: "Edits with extraneous markup added with the Edit toolbar."},
    {id:"Possible_self_promotion_in_userspace", selected: false, name: "Possible self promotion in userspace", description: "User added typical promotional text to their user or user talk page."}
  ]},
  {group: "Content categories", filters:[
    {id:"cat-culture", selected: false, name: "Culture", description: "Wikipedia category"},
    {id:"cat-geography", selected: false, name: "Geography", description: "Wikipedia category"},
    {id:"cat-health", selected: false, name: "Health", description: "Wikipedia category"},
    {id:"cat-history", selected: false, name: "History", description: "Wikipedia category"},
    {id:"cat-science", selected: false, name: "Science", description: "Wikipedia category"},
    {id:"cat-people", selected: false, name: "People", description: "Wikipedia category"},
    {id:"cat-philosophy", selected: false, name: "Philosophy", description: "Wikipedia category"},
    {id:"cat-religion", selected: false, name: "Religion", description: "Wikipedia category"},
    {id:"cat-society", selected: false, name: "Society", description: "Wikipedia category"},
    {id:"cat-technology", selected: false, name: "Technology", description: "Wikipedia category"}
  ]}
]};
