$(document).ready(function(){
	$('#imgOfUs .imgOfHead').click(function(){
		$('#imgOfUs .imgOfHead').css('color','#d4d2d2');
		$('#imgOfUs .imgOfHead img').css('border-color', '#d4d2d2');
		$('#contents > div').css('display','none');

		var index = $(this).index()+1;
		$(this).find('img').css('border-color', '#92d2ff');
		$(this).css('color','#92d2ff');
		$('#contents > div:nth-child('+index+')').css('display','block');
	});

	$('#imgOfUs .imgOfHead').eq(0).click();
})