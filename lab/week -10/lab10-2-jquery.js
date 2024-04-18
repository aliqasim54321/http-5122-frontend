//LAB 10 - 2 INVENTORY PAGE
jQuery(window).on('load',function(){
	$('.desc').hide();

	$('tr').on('click',function(){
		$('.desc').hide();
		$(this).find('.desc').show();		

		}
	);


	$('tr').hover(
		function(){$(this).toggleClass('selected');
		

	});
})







	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>







	//ADD CLICK EVENT TO <tr>
