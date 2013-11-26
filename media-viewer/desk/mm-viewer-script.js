var lastScrollTop = 0;
$(window).scrollTop(0);
$(window).scroll(function(e){
    var doc = HYPE.documents['mm-viewer-proto'];
    var st = $(this).scrollTop();
    var pos = 509 - st;
    if(pos <30)
        pos = 30;
    if (pos>690)
        pos=690;

        $("#panel").css("top",pos);
    if (st > lastScrollTop){
      //  $("#sparrow").css("top",st);

         //doc.startTimelineNamed('panel-open');
         //doc.continueTimelineNamed('panel-open');
         //doc.pauseTimelineNamed('panel-open');


   } else {
      // upscroll code
   }


    console.debug(pos);
   lastScrollTop = st;
});
