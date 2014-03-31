(function(){

	 contentTop = [];
	 $('div.nav-bar').find('a').each(function(){
	 	contentTop.push( $( "#" + $(this).attr('name') ).offset().top );
	 });

	function scrollToAnchor(aid){
		var aTag = $( "#" + aid);
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');		
	}

	$('div.nav-bar').find('a').each(function(index, val){
		var aid = $(this).attr('name');
		$(this).on('click', function(event){
			scrollToAnchor(aid);
		});
	});

	 $(window).scroll(function(){
	  var winTop = $(window).scrollTop(),
	      vpHt = $(window).height();  // viewport height
	  $.each( contentTop, function(i,loc){
	   if ( ( winTop >= loc && winTop < loc + vpHt ) ){
	    $('div.nav-bar a')
	     .removeClass().addClass('item-default')
	     .eq(i).removeClass().addClass('item-selected');
	   }
	  })
	 })
})();