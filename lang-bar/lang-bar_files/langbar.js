$( document ).ready( function() {
	var src, $p;
	$( ".first" ).hover( function( event ) {
		$p = $(event.target).closest(".nav").find(".1");
		src = $p.attr('src');

		if ( $(event.target).closest(".nav").find(".source").hasClass("selected") ) {
			//$p.attr('src','source4.png');	
		} else {
			//$p.attr('src','source2.png');
		}
	}, function() {
		$p.attr('src',src);
	} );

	$( ".source" ).hover( function( event ) {
		$p = $(event.target).closest(".nav").find(".1");
		src = $p.attr('src');
		if ( $(event.target).closest(".nav").find(".first").hasClass("selected") ) {
			//$p.attr('src','source4.png');	
		} else {
			//$p.attr('src','source.png');
		}
	}, function() {
		$p.attr('src',src);
	} );
} );