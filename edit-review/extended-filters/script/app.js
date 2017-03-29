//Templates

var tagsTemplate =null;
var filtersTemplate = null;
var highlightsTemplate = null;
var edittagTemplate = null;
var namespacesTemplate = null;

var linksTemplate = null;

//API

function getFilterDataById (id){
  var result = null;
  var data = filtersData;
    $.each(data.groups, function(i,group){
      $.each(group.filters, function(j,filter){
        if(id == filter.id){
          result = filter;
        }
      });
    });
    return result;
}

function getSelectedFilters(data){
  var result = [];
    $.each(data.groups, function(i,group){
      $.each(group.filters, function(j,filter){
        if(filter.selected){
          result.push(filter);
        }
      });
    });
    return result;
}

function getSelectedFiltersAndHighlights(data){
  var result = [];
    $.each(data.groups, function(i,group){
      $.each(group.filters, function(j,filter){
        if(filter.selected || filter.color){
          result.push(filter);
        }
      });
    });
    return result;
}

function updateFilterData(id, selected){
  var filter = getFilterDataById(id);
  filter.selected = selected;
}

function updateFilterColor(id, color){
  var filter = getFilterDataById(id);
  filter.color = color;
}


function findInGroup(group, query, expanded){
  var result = [];

  $.each(group.filters, function(i,filter){
    var info = filter.name.toLowerCase()+ filter.description.toLowerCase();
    var q = query.toLowerCase();
    //var matches = info.indexOf(q)!= -1; //contains
    //var matches = info.indexOf(q) == 0;   //startsWith
    var matches = false;
    if(!!expanded){
      matches = info.indexOf(q) == 0;   //startsWith
    }else{
      matches = info.indexOf(q)!= -1; //contains
    }

    if(matches){
      result.push(filter);
    }
  });

  return result;
}

function find(query, prefix, extended){
  var data = filtersData;
  var result = {groups:[]};
  var groups = data.groups;
  $.each(groups, function(i,group){
    var filters = findInGroup(group, query, !!extended);
    if (filters.length > 0){
      var g = {group: group.group, filters: filters};
      result.groups.push(g);
    }
  });
  return result;
}

function showOptions(e){
  var isActive = $(this).hasClass("active");
  $(".filter .options").removeClass("active");
  if(!isActive){
    $(this).addClass("active");
  }
}

function selectHighlight(e){
  var panel = $(this).parents(".visibility-panel");
  panel.find(".active").removeClass("active");
  //panel.find(".option-highlight").addClass("active");
  $(this).addClass("active");

  var color = $(this).attr("name");
  var filter = $(this).parents(".filter");
  filter.attr("data-color", color);
  var data = getFilterDataById(filter.data("id"));
  data.color = color;

  $(this).closest(".highlight-criteria").find(".color-indicator").removeClass("blue green yellow orange red");
  $(this).closest(".highlight-criteria").find(".color-indicator").addClass(color);
  updateTags();
  panel.removeClass("active");
}

function removeHighlight(e){
  var panel = $(this).parents(".visibility-panel");
  panel.find(".active").removeClass("active");
  //panel.find(".option-highlight").addClass("active");
  $(this).addClass("active");

  var color = false;
  var filter = $(this).parents(".filter");
  filter.attr("data-color", color);
  var data = getFilterDataById(filter.data("id"));
  data.color = color;

  $(this).closest(".highlight-criteria").find(".color-indicator").removeClass("blue green yellow orange red");
  updateTags();
  panel.removeClass("active");
}

function selectFilter(e){
  var panel = $(this).parents(".visibility-panel");
  panel.find(".active").removeClass("active");
  //panel.find(".option-filter").addClass("active");
  $(this).addClass("active");

  var color = false;
  var filter = $(this).parents(".filter");
  filter.attr("data-color", color);
  var data = getFilterDataById(filter.data("id"));
  data.color = color;
  updateTags();
}


function scrollToFilter(){
  var scrollPos= $('.filter-panel').scrollTop();
  var targetPos = $(".suggested").offset().top;
  var dialogOffset = $(".filter-panel").offset().top;
  var panelHeight = $('.filter-panel').height();
  var pos = scrollPos + targetPos - dialogOffset;
  if (pos<scrollPos || pos - scrollPos > panelHeight){ //out of viewport:
    $('.filter-panel').animate({scrollTop: pos }, 500);
  }
}

function highlightChange(change, color){
var allFilters = $.map(filtersData.groups, function(g){return g.filters;});
var filtersOfColor = $.grep(allFilters, function(f){ if(f.color == color){return f;} });
var colorTags = $.map(filtersOfColor, function(f){return f.id});

  $.each(colorTags,function(j,tag){
    if(change.hasClass(tag)){
      change.addClass("color");
      change.addClass(color);
    }
  });

}


function meetsFiltersOrOptionalHighlight(classList){
  var result = true;
  var data = filtersData;
  $.each(data.groups, function(i,group){
    var hasActiveFilters = false;
    var anyMatches = false;
    var numberOfActiveFilters = $.grep(group.filters, function(item){ return !!item.selected;}).length;

    $.each(group.filters, function(j,filter){
      var isColored = filter.color;
      if(filter.selected && filerHighlights || filter.selected && !filerHighlights && !isColored){
        hasActiveFilters = true;
        var matches = ($.inArray(filter.id, classList) >= 0 );
        anyMatches = anyMatches || matches;
      }
    });
    if( hasActiveFilters){
      result = result && anyMatches;
    }
  });
  return result;

}

function meetsFiltersOr(classList){
  var result = true;
  var data = filtersData;
  $.each(data.groups, function(i,group){
    var hasActiveFilters = false;
    var anyMatches = false;
    var numberOfActiveFilters = $.grep(group.filters, function(item){ return !!item.selected;}).length;

    $.each(group.filters, function(j,filter){
      if(filter.selected){
        hasActiveFilters = true;
        var matches = ($.inArray(filter.id, classList) >= 0 );
        anyMatches = anyMatches || matches;
      }
    });
    if( hasActiveFilters){
      result = result && anyMatches;
    }
  });
  return result;

}



//UPDATES
function updateChanges(){
  //window.setTimeout(function(){
    $(".changes .change").removeClass("hidden");
    $(".changes .change").removeClass("color");
    $(".changes .change").removeClass("blue");
    $(".changes .change").removeClass("green");
    $(".changes .change").removeClass("yellow");
    $(".changes .change").removeClass("orange");
    $(".changes .change").removeClass("red");

    $.each($(".changes .change"),function(i,change){

      //Check filters
      var matches = meetsFilters($(change).attr("class").split(' '));
      if (!matches){
        $(change).addClass("hidden");
      }

      //Highlight
      highlightChange($(change), "blue");
      highlightChange($(change), "green");
      highlightChange($(change), "yellow");
      highlightChange($(change), "orange");
      highlightChange($(change), "red");
    });

    if ($(".changes .change").length >0 && $(".changes .change:not(.hidden)").length == 0){
      $(".changes-empty").removeClass("hidden");
      $(".changes").addClass("hidden");
    } else {
      $(".changes-empty").addClass("hidden");
      $(".changes").removeClass("hidden");
    }
  //});

}

function updateHighlightMenu(){
  var data = filtersData;
  var allFilters = $.map(filtersData.groups, function(g){return g.filters;});
  var activeFilters = $.grep(allFilters, function(f){ if(f.selected){return f;} });

  if(activeFilters.length>0){
    var group = {group:"Active filters", filters:activeFilters};
    var groups = $.merge([group],filtersData.groups);
    data = {groups: groups};
  }

  var html = highlightsTemplate(data);
  $(".highlight-panel").html(html);
  //Bindings:
  $(".highlight-criteria .description").click(function(e){ //Show/hide visibility panel
    var panel= $(this).parent(".highlight-criteria").find(".visibility-panel");
    var isActive = panel.hasClass("active");
    $(".highlight-criteria .visibility-panel").removeClass("active");
    if(!isActive){
      panel.addClass("active");
    }
  });

  $(".visibility-panel .highlight").click(selectHighlight);
  $(".visibility-panel .option-filter").click(removeHighlight);
}

function closeHighlightPanel(){
  $(".highlight-panel").scrollTop(0);
  $(".highlight-panel").addClass("hidden compact");
  $(".visibility-panel").removeClass("active");
}

function filtersByPrefix(data, prefix){
  var result = data;
  if(prefix =="#"){ //edittag
    var g = [];
    $.each(data.groups, function(i,group){
      if(group.group == "Edit tags"){
        g.push(group);
      }
    });
    result = {groups:g};
  } else if (prefix == ":"){
    var g = [];
    $.each(data.groups, function(i,group){
      if(group.group == "Content type"){
        g.push(group);
      }
    });
    result = {groups:g};
  }
  return result;

};

function favLink(name,val) {
  var data = linksData;
  var anyFav = false;
  $.each(data.links, function(i,link){
    var isGroup = !!link.group;
    var linkName = link.name;
    if(!isGroup && (linkName == name)){
      link.fav = val;
    }
    anyFav = anyFav || !!link.fav;
  });
  if(anyFav){
    data.favs = true;
  }else{
    data.favs = false;
  }
}

function updateLinks(expanded){
  var data = linksData;
  if(!!expanded){
    data = {links: data.links, favs: false};
  }
  var html = linksTemplate(data);
  $(".quicklinks-panel").html(html);
  //Bindings:
  $(".quicklinks-panel .star").click(function(e){
    var star = $(this);
    var item = star.closest(".link");
    var name = item.attr("name");

    if(star.hasClass("active")){
        star.removeClass("active");
        favLink(name,false);
    }else {
      star.addClass("active");
      favLink(name,true);
    }
  });

  $(".quicklinks-panel .view-all").click(function(e){
    updateLinks(true);
  });
}

function updateFilters(){
  var data = filtersData;
  var query = $(".search").val().trim();
  var prefix = getPrefix(query);
  query = removePrefix(query);
  if(query.length > 0) {
    data = find(query, prefix, false);
    if(data.groups.length == 0){
      data = find(query, prefix, true); //extended search
    }
  }

  if(!!prefix){
    data = filtersByPrefix(data, prefix);
  }
  var html = filtersTemplate(data);

  $(".filter-panel").html(html);
  $(".tag").removeClass("active");

    html = edittagTemplate(data);
    $(".edittag-panel").html(html);

    html = namespacesTemplate(data);
    $(".namespaces-panel").html(html);
  //Bindings:
  $(".check").change(function() {
    updateFilterData(this.id, this.checked);
    $(this).parent(".filter").toggleClass("active");
    var isQuery = $(".search").val().length >0;
    if(isQuery){
        clearQuery(prefix);
        updateFilters();
    }

    updateTags();
    $(".search").focus();

  });

  $(".options").click(showOptions);
  $(".visibility-panel .highlight").click(selectHighlight);
  $(".visibility-panel .option-filter").click(selectFilter);
  $(".searchable .message").click(function(e){$(".search").focus()});
  updateTooltips();
  $(".highlighter").click(function(){
    //$(this).closest(".filter-panel").toggleClass("highlighting");
    $("body").toggleClass("highlighting");
  });
}

function removeTag(e){
  var tag = $(e.target).parent(".tag");
  var filterId = $(tag).data("id");
  updateFilterData(filterId, false);
  updateFilterColor(filterId, false);
  updateFilters();
  updateTags();

  if(!$(".all-panels").hasClass("hidden")){
    filtersVisible(true);
      $(".search").focus();
  }

  return false;
}

function selectTag(e){
  var tag = $(e.target).hasClass("tag")?$(e.target):$(e.target).parent(".tag");
  var filterId = tag.data("id");
  $(".search").focus();
  clearQuery();
  if(!tag.hasClass("active")){
    updateFilters();
    tag.addClass("active");
    $(".filter[data-id='"+ filterId+"']").addClass("suggested");
    scrollToFilter();
  } else {
      //tag.removeClass("active");
      updateFilters();
  }
  return false;
}

function highlightActiveGroups(){
  var data = filtersData;
  $(".filter-panel .group.active").removeClass("active");
    $(".filter.inactive").removeClass("inactive");

    $.each(data.groups, function(i,group){
      var activeGroup = false;
      var implicitActive = [];

      $.each(group.filters, function(j,filter){
        var isHighlightWithoutFitler = !!filter.color && !filerHighlights;
        if(filter.selected){
          $(".filter-panel .group[data-id='"+ group.group +"']").addClass("active");
          if(!isHighlightWithoutFitler){
            activeGroup = true;
            $.each(filterSubsets,function(k,v){
              if(filter.id == v[1]){
                implicitActive.push(v[0]);
              }
            });

          }
        }
      });

      if(activeGroup){ //Darken inactive filters
        $.each(group.filters, function(j,filter){
          var isImplicit = implicitActive.indexOf(filter.id) >=0;
          if(!filter.selected && !isImplicit){
            $(".filter[data-id='"+ filter.id +"']").addClass("inactive");
          }
        });
      }

    });
}

function updateTags(){
  window.setTimeout(function(){
    //var data = {tags: getSelectedFilters(filtersData)};
    var activeTags = getSelectedFiltersAndHighlights(filtersData);
    var data = {tags: activeTags};
    var emptyTags = activeTags.length == 0;
    if(emptyTags){
      $(".tagbox").addClass("empty");
    }else{
      $(".tagbox").removeClass("empty");
    }


    var html = tagsTemplate(data);
    $(".tags").html(html);


    //Bindings:
    $(".remove").click(removeTag);
    $(".tag").click(selectTag);
    //updateHighlightMenu();
    highlightActiveGroups();
    updateChanges();

    //Incompatibilities:
    $.each(filterSubsets, function(i,pair){
      if($(".tag[data-id='"+ pair[0] +"']:not([data-color]), .tag[data-id='" + pair[1] +"']").length == 2){
        var tag = $(".tag[data-id='" + pair[0] + "']");
        tag.addClass("useless");

        var title = tag.data("description") + " Has no effect currently because it is included already in \""+ $(".tag[data-id='" + pair[1] + "'] .name").text() +"\". Consider highlighting with a color to distinguish.";
        tag.attr("title", title);
      }
    });

    $.each(filterComplete, function(i, list){
      var tags =[];
      $.each(list, function(j, tagId){
        var tag = $(".tag[data-id='"+ tagId + "']:not([data-color])");
        if(tag.length>0){
            tags.push(tag);
        }
      });
      if(tags.length == list.length){
          $.each(tags, function(i, tag){
            tag.addClass("useless");
            var title = tag.attr("title") + " No effect in the current result since all complementary filters have been added too";
            tag.attr("title", title);
          });
      }
    });

    //Highlight fitering
    var areHighlights = $(".tag[data-color]").length >0;
    var onlyHighlights = $(".change:not(.hidden):not(.color)").length == 0;
    if(areHighlights){
      $(".changes").addClass("highlights");
    } else {
      $(".changes").removeClass("highlights");
    }

    updateTooltips();

  });
}


function areOnlyCompleteHighlights(){
  //check if current highlights result in the full set of results
  var result = false;
  $.each(filterComplete, function(i, list){
    var tags =[];
    $.each(list, function(j, tagId){
      var tag = $(".tag[data-id='"+ tagId + "'][data-color]");
      if(tag.length>0){
          tags.push(tag);
      }
    });
    if(tags.length == list.length && list.length == $(".tag").length){
        result = true;
    }
  });
  return result;
}

function showPanelForPrefix(){
  var panel = $(".all-panels");
  var search = $(".search");
  var q = search.val();
  if(q.startsWith("#")){
    panel.addClass("edittag");
  } else {
      panel.removeClass("edittag");
  }

  if(q.startsWith("@")){
    panel.addClass("username");
  } else {
      panel.removeClass("username");
  }

  if(q.startsWith(":")){
    panel.addClass("namespaces");
  } else {
      panel.removeClass("namespaces");
  }
}

function filtersVisible(show){
  var panel = $(".all-panels");
  if(show){
    showPanelForPrefix();
    panel.removeClass("hidden");
    updateFilters();
  }else{
    $(".filter-panel, .edittag-panel, .namespaces-panel").scrollTop(0);
    panel.addClass("hidden");
    removePrefixes();
  }
}

function clearQuery(value){
  var v = "";
  if(!!value){
    v = value;
  }
  $(".search").val(v);
  $(".filter").removeClass("suggested");
}

function searchWhenTyping(e){
  var query = $(".search").val().trim().length > 0;
  var code = e.which;
  //console.debug(code);

  //Enter when searching -> select first
  if(code == 13 && query){
//    var filters = $(".filter-panel .filter .check");
    var filters = $(".filter-panel .filter.suggested .check");
    if(filters.length > 0){
      var first = filters[0];
      //console.debug(first.id);
      updateFilterData(first.id, !first.checked);
      clearQuery();
    }
    updateTags();
  }

  //Exit on escape
  if(code == 27){
    clearQuery();
    $(".search").blur();
    filtersVisible(false);
  }
  showPanelForPrefix();
  updateFilters();
  if(code !=13 && query){   //Highlight first result
    $(".filter-panel .filter:first" ).addClass("suggested");
  }

}

function clearWhenTyping(e){
  var query = $(".search").val().trim().length > 0;
  var code = e.which;
  if (code == 8 && !query){

    var tags = $(".tag");
    if(tags.length>0){
      var last = tags[tags.length -1];
      var filterId = $(last).data("id");
      updateFilterData(filterId, false);
      updateTags();
    }
  }
}

function updateTooltips(){
  $('.tags .tag:not(.tooltipstered), .filter-panel .options:not(.tooltipstered)').tooltipster({
    theme: 'tooltipster-light',
    maxWidth: 400,
    delay: 600
    });
    $('.filter-highlights:not(.tooltipstered)').tooltipster({
      theme: 'tooltipster-light',
      maxWidth: 400,
      delay: 600,
      side: "bottom",
      timer: 6000
      });

    $(".filter-panel .whatsthis:not(.tooltipstered)").tooltipster({
      theme: 'tooltipster-light',
      trigger: 'click',
      contentCloning: true,
      maxWidth: 400,
      interactive: true
      });


}

function loadChangesData(){
    $(".changes").load("changes.html", addMetadataToChanges);
}


function updateFilterHighlights(){
  window.setTimeout(function(){
  var button = $(".filter-highlights");
  var onlyComplete = areOnlyCompleteHighlights();
  var isDisabled = button.hasClass("disabled");
  if (isDisabled){
    button.tooltipster("close");
    button.tooltipster('content', "When filters are asigned a color, you can control whether they restrict further the results or not.");
  }else if(onlyComplete){
    button.addClass("disabled");
    button.tooltipster("close");
    button.tooltipster('content', "Highlight is already applied to all results.");
  } else if(filerHighlights){
    button.addClass("active");
    button.tooltipster("close");
    button.tooltipster('content', "Highlights are used to filter more results.");
    $(".tag[data-color]").removeClass("useless");
  } else {
    button.removeClass("active");
    button.tooltipster("close");
    button.tooltipster('content', "Highlights are ignored when filtering results");
    $(".tag[data-color]").addClass("useless");
  }

  highlightActiveGroups();
  updateChanges();
});
}

function clearAllTags(){
    var data = filtersData;
    $.each(data.groups, function(i,group){
      $.each(group.filters, function(j,filter){
        filter.selected = false;
        filter.color = false;
      });
    });
    updateFilters();
    updateTags();
}

function restoreTags(){
  updateFilterData("human",true);
  updateFilterData("content-edit",true);
  updateFilterData("new-page",true);
  updateFilterData("logged",true);
  updateFilters();
  updateTags();
}

function getPrefix(q){
  var result = null;
  if (hasPrefix(q)){
    result = q[0];
  }
  return result;
}

function hasPrefix(q){
  var result = false;
  result = q.startsWith("@")||q.startsWith("#")||q.startsWith(":");
  return result;
}

function removePrefix(q){
  var result = q;
  if (hasPrefix(q)){
    result = q.substr(1);
  }
  return result;
}

function removePrefixes() {
  var search = $(".search");
  var q = search.val();
  if (hasPrefix(q)){
    search.val("");
  }
}
function showLinksPanel(e){
  if ($(e.target).hasClass("quicklinks")){
        updateLinks();
        $(".quicklinks").toggleClass("active");
  }
  return false;
}

function showEditTagPanel(){
  var prefix= "#";
  var search = $(".search");
  var q = search.val();
  if(!q.startsWith(prefix)){
    search.val(prefix);
  }
  filtersVisible(true);
  //
  search.focus();
}


function showNamespacesPanel(){
  var prefix= ":";
  var search = $(".search");
  var q = search.val();
  if(!q.startsWith(prefix)){
    search.val(prefix);
  }
  filtersVisible(true);
  search.focus();
}

var filerHighlights = true;
var meetsFilters = meetsFiltersOrOptionalHighlight;

$(function(){ //Initialization:
  tagsTemplate = Handlebars.compile($("#tags-template").html());
  filtersTemplate = Handlebars.compile($("#filters-template").html());
  highlightsTemplate =  Handlebars.compile($("#highlights-template").html());
  edittagTemplate = Handlebars.compile($("#edittag-template").html());
  namespacesTemplate = Handlebars.compile($("#namespaces-template").html());
  linksTemplate = Handlebars.compile($("#links-template").html());
  var hash= window.location.hash.replace("#","");
  $("body").addClass(hash); //tags: integrated

  loadChangesData();
  updateFilters();
  updateTags();

  $(".search").keyup(searchWhenTyping);
  //$(".search").keydown(clearWhenTyping);
  $(".search").focus(function(){
    if($(".all-panels").hasClass("hidden") && $('body').scrollTop() < 200){
      $('body,html').animate({scrollTop: 220 }, 200);
    }
    filtersVisible(true);
    $(this).parent(".searchbar").addClass("active");
  });
  $(".search").blur(function(){
    $(this).parent(".searchbar").removeClass("active");
  });
  $(".search-icon").click(function(){$(".search").focus();});

  $("body").click(function(e){
    if ($(e.target).parents(".filters").length == 0 && $(e.target).closest(".tooltipster-content").length == 0){
      filtersVisible(false);
      $(".tags .tag.active").removeClass("active");
    }

    if ($(e.target).closest(".highlight-group").length == 0){
      closeHighlightPanel();
    }
    //if ($(e.target).parents(".quicklinks").length == 0){
        $(".quicklinks").removeClass("active");
    //}

  });

  $(".tagbox").click(function(e){
    var isClosed = $(".all-panels").hasClass("hidden");
    if(isClosed){
      filtersVisible(true);
      $(".search").focus();

    }else{
      filtersVisible(false);
      $(".tags .tag.active").removeClass("active");
    }
  });
  $(".clear-tags").click(function(e){clearAllTags();return false;});
  $(".restore-tags").click(function(e){restoreTags();return false;});

  $(".actions .add-tag").click(function(e){showEditTagPanel(); return false;});
  $(".actions .add-namespace").click(function(e){showNamespacesPanel(); return false;});


  $(".quicklinks").click(showLinksPanel);

});
