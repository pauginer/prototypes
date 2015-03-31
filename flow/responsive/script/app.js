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




$(function() {
	fillPosts();
	fillHeaders();
	
	$(".rail-close").click(function(){
		$(".flow-board").toggleClass("expanded");
	});

});