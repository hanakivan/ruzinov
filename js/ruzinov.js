jQuery(document).ready(function($){

	/**
	 * Content important class
	 */
	$('body').removeClass('no-js');
	
	/**
	 * Show slider navigation
	 * If the browser has wide viewport, the chevrons are visible, othervise they are hidden
	 * However, when we will make this slide dynamic, 
	 */
	$('#slider-navigation').removeAttr('hidden');
	
	$(window).on('load resize', function(){
		if($(window).outerWidth() > 1180)
			$('#slider').removeClass('narrow');
		else
			$('#slider').addClass('narrow');
	});
		
	/**
	 * Alter static height of the slider when the window changed its dimensions
	 */
	$(window).on('load resize', function(){
		$('#slider-content').css('height', parseInt($('#slider img:visible:first').outerHeight()));
	});
	
	/**
	 * Fix, if there is not placeholder attribute support
	 */
	if (document.createElement("input").placeholder == undefined) {
		var text;
		var diese;//yeah, german
		$("input[placeholder]:not([type='password']), textarea").each(function(){
			diese = $(this);
			diese.addClass('no-placeholder');
			text = diese.attr('placeholder');
			if(diese.val() == '')
				diese.val(text);
		});
	}
	
	$(".no-placeholder").focus(function(){
		diese = $(this);
		diese.attr("data-temp", diese.val());
		diese.val('');
	}).blur(function(){
		diese = $(this);
		if(diese.val() == '')
		{
			diese.val(diese.attr("data-temp"));
			diese.removeAttr("data-temp");
		}
	});
	
	/**
	 * Open pop-up window when sharing
	 */
	$('#share-buttons a').click(function(e){
		e.preventDefault();
		window.open($(this).attr("href"),'','width=600,height=300,left=200,top=200');
	});
	
	/**
	 * Jquery animations of navigation
	 */
	 var submenu;
	 $('.nav-item').hover(function(){
		submenu = $('.submenu', $(this));
		
		submenu.slideDown();
		
	 }, function(){
		submenu = $('.submenu', $(this));
		
		submenu.fadeOut();
	 });
});