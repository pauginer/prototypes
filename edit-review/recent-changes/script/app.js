//Templates

var tagsTemplate =null;
var filtersTemplate = null;

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

function updateFilterData(id, selected){
  var filter = getFilterDataById(id);
  filter.selected = selected;
}

function findInGroup(group, query){
  var result = [];

  $.each(group.filters, function(i,filter){
    var info = filter.name.toLowerCase()+ filter.description.toLowerCase();
    var q = query.toLowerCase();
    //var matches = info.indexOf(q)!= -1; //contains
    var matches = info.indexOf(q) == 0;   //startsWith

    if(matches){
      result.push(filter);
    }
  });

  return result;
}

function find(query){
  var data = filtersData;
  var result = {groups:[]};
  var groups = data.groups;
  $.each(groups, function(i,group){
    var filters = [];
    if(group.search){ //extended search
      $.each(extendedFilters.groups, function(k,extended){
        if(group.group == extended.group){
            filters = findInGroup(extended, query);
        }
      });
    }else {
      filters = findInGroup(group, query);
    }


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
  panel.find(".option-highlight").addClass("active");
  $(this).addClass("active");

  var filter = $(this).parents(".filter");
  var data = getFilterDataById(filter.data("id"));
  data.color = $(this).attr("name");
  updateTags();
}

function selectFilter(e){
  var panel = $(this).parents(".visibility-panel");
  panel.find(".active").removeClass("active");
  //panel.find(".option-filter").addClass("active");
  $(this).addClass("active");

  var filter = $(this).parents(".filter");
  var data = getFilterDataById(filter.data("id"));
  data.color = false;
  updateTags();
}


function scrollToFilter(){
  var scrollPos= $('.filter-panel').scrollTop();
  var targetPos = $(".suggested").offset().top;
  var dialogOffset = $(".filter-panel").offset().top;
  var panelHeight = $('.filter-panel').height();
  var pos = scrollPos + targetPos - dialogOffset;
  if (pos<scrollPos || pos - scrollPos > panelHeight){ //out of viewport:
    $('.filter-panel').animate({scrollTop: pos }, 1000);
  }
}

//UPDATES
function updateFilters(){
  var data = filtersData;
  var query = $(".search").val().trim();
  if(query.length > 0) {
    data = find(query);
  }
  var html = filtersTemplate(data);
  $(".filter-panel").html(html);
  $(".tag").removeClass("active");
  //Bindings:
  $(".check").change(function() {
    updateFilterData(this.id, this.checked);
    clearQuery();
    updateTags();
    $(".search").focus();

  });

  $(".options").click(showOptions);
  $(".visibility-panel .highlight").click(selectHighlight);
  $(".visibility-panel .option-filter").click(selectFilter);

}

function removeTag(e){
  var tag = $(e.target).parent(".tag");
  var filterId = $(tag).data("id");
  updateFilterData(filterId, false);
  updateTags();
  updateFilters();
  filtersVisible(true);
  $(".search").focus();
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

}

function updateTags(){
  var data = {tags: getSelectedFilters(filtersData)};
  var html = tagsTemplate(data);
  $(".searchbar .tags").html(html);
  //Bindings:
  $(".remove").click(removeTag);
  $(".tag").click(selectTag);
}

function filtersVisible(show){
  if(show){
    $(".filter-panel").removeClass("hidden");
  }else{
    $(".filter-panel").addClass("hidden");
  }
}

function clearQuery(){
  $(".search").val("");
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
      console.debug(first.id);
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

$(function(){ //Initialization:
  tagsTemplate = Handlebars.compile($("#tags-template").html());
  filtersTemplate = Handlebars.compile($("#filters-template").html());

  updateFilters();
  updateTags();

  $(".search").keyup(searchWhenTyping);
  $(".search").keydown(clearWhenTyping);
  $(".search").focus(function(){filtersVisible(true);});
  $(".search-icon").click(function(){$(".search").focus();});
  $("body").click(function(e){
    if ($(e.target).parents(".filters").length == 0){
      filtersVisible(false);
    }
  });
});
