function fillPosts(){
	var source   = $("#posts-template").html();
 	var template = Handlebars.compile(source);
	var html = template({});
	$(".posts").append(html);
}

function fillHeaders(){
	var source   = $("#header-template").html();
 	var template = Handlebars.compile(source);
	var html = template({});
	$(".header, .rail-content").append(html);
}

function addCategories(){
	var source   = $("#categories-template").html();
 	var template = Handlebars.compile(source);
	var html = template({});
	$(".rail-content").append(html);
}

function addCopyright() {
	var source   = $("#copyright-template").html();
 	var template = Handlebars.compile(source);
	var html = template({});
	$(".rail-content").append(html);
}

function stickyOn(){
	$(".flow-board-navigation, .rail-header").addClass("sticky");
	$(".flow-board-navigation").css("width",$(".posts").width());
	$(".flow-board-navigation").css("margin-left",$(".posts").css("padding-left"));
	$(".rail-header").css("width",$(".rail").width());
	$(".rail-header").css("padding-top","5px");
	$(".rail-header").css("padding-bottom","5px");
}

function stickyOff(){
	$(".flow-board-navigation, .rail-header").removeClass("sticky");
	$(".flow-board-navigation").css("width","auto");
	$(".flow-board-navigation").css("margin-left",0);
	$(".rail-header").css("width", "auto");
}

function stickyIfNeeded() {
	if( $("body").scrollTop() > $(".posts").position().top){
			stickyOn();
		} else{
			stickyOff();
		}
}

$(function() {
	fillPosts();
	fillHeaders();
	addCategories();
	addCopyright();
	
	$(".rail-close").click(function(e){
		$(".flow-board").toggleClass("expanded");
		stickyIfNeeded();
		e.stopImmediatePropagation();
	});
	
	$( window ).scroll(function(){
		stickyIfNeeded();
		
	});
	
	$( window ).resize(function(){
		stickyIfNeeded();
	});
	
	$(".rail-header").click(function(){
		if($(this).hasClass("sticky")){
			$('html, body').animate({
				scrollTop: $(".posts").offset().top
			}, 100);
		}
	});

});