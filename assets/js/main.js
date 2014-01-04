$(document).ready(function(){

	$(window).trigger('resize');

	jQuery(".blogtitle_uber a").fitText(1, { minFontSize: '20px', maxFontSize: '75px' });

});

$(window).resize(function(e){

	e.preventDefault();

	if($('.wrapper_uber').height()<$(window).height()){

		$('.footer_uber').css('position','absolute');
	}else{$('.footer_uber').css('position','relative');}

	$('.cover_uber').one('load',function(){

		var header_height = $(this).height();
		var header_width = $(this).width();
		var parent_height = 300;
		var parent_width = $(this).parent().parent().width();

		var height_complete = '-'+(header_height-parent_height)/2+'px';
		var width_complete = '-'+(header_width-parent_width)/2+'px';

		if((header_width-parent_width)/2 <= 0){width_complete = '0px';}
		if((header_height-parent_height)/2 <= 0){height_complete = '0px';}

		$(this).css('margin-top',height_complete);
		$(this).css('margin-left',width_complete);

	}).each(function() {

		if(this.complete) $(this).load();

	});

	$('.postfooter_uber address').css('height',$('.authorbio_uber').outerHeight());

});