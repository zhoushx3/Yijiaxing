$(document).ready(function(){
	$(window).scroll(function(){
		var headlineLength = $('.headline_line .subHeadline').length;
		var currPos = $(document).scrollTop();
		var winH = $(window).height();
		for (var i = 0; i < headlineLength ; i++) {
			var headlineOffset = $('#h'+i).offset().top;
			if(currPos < headlineOffset && currPos + 100 >headlineOffset){
				//处理其他元素颜色
				$('.headline_line .dot').css('background-color','#cacaca');
				$('.headline_line .headline').css('color','#888787');
				$('.headline_line .subHeadline').css('color','#888787');
				var target =$(".headline_line a[href$=#h"+i+"]");
				var length = target.length;
				if(length === 1){
					target.eq(0).children().css('color','#399ce1');
					target.eq(0).prevAll('.dot').eq(0).css('background-color','#399ce1');
					target.eq(0).prevAll('.dot').eq(0).next().children().css('color', '#399ce1'); // blue headline
				}else{
					for (var c = 1; c < length; c++) {
						target.eq(c).children().css('color','#399ce1');
					};
					target.eq(1).prevAll('.dot').eq(0).css('background-color','#399ce1');
					
				}
				return;
			}else{
				
			}
		}
	});

	$('.headline_line a').click(function(){
		$('.headline_line .dot').css('background-color','#cacaca');
		$('.headline_line .headline').css('color','#888787');
		$('.headline_line .subHeadline').css('color','#888787');
		if($(this).children().length != 0){
			$(this).children().css('color','#399ce1');
			$(this).prevAll('.dot').eq(0).css('background-color','#399ce1');
			$(this).prevAll('.dot').eq(0).next().children().css('color', '#399ce1');
		}else{
			$(this).css('background-color','#399ce1');
			$(this).next().children().css('color','#399ce1');
		}
		
	});


})

$(document).ready(function(){

	$(window).scroll(function(){
		var currPos = $(document).scrollTop();
		var top = $('.contents .headline').offset().top;
		var bottom = $('#bottom').offset().top;
		var winH =$(window).height();
		var nav_top = $('.headline_line').css('top').substring(0,$('.headline_line').css('top').indexOf('p'));
		var x = $('#flagImg').height();
		if (currPos > x && currPos+winH-150 < bottom) {
			$('.headline_line').addClass('active');
			$('#canvas').addClass('active');
		}
		else {
			$('.headline_line').removeClass('active');
			$('#canvas').removeClass('active');
		}

	});
})

$(document).ready(function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.moveTo(41,12);
	ctx.lineTo(41,420);
	ctx.strokeStyle = '#cacaca';
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(41,420+7,6,0,2*Math.PI,true);
	ctx.stroke();
	ctx.closePath();
})

$(document).ready(function(){
	var howToGo = document.getElementById('howToGo');
	var ctx = howToGo.getContext('2d');
	var ps =[ {p:{x:100,y:70}},
	{p:{x:250,y:70}},
	{p:{x:400,y:70}},
	{p:{x:500,y:130}},
	{p:{x:420,y:220}},
	{p:{x:300,y:220}},
	{p:{x:180,y:220}},
	];
	ctx.strokeStyle = '#399ce1';
	for (var w = 0; w < ps.length; w++) {
		ctx.beginPath();
		ctx.arc(ps[w].p.x,ps[w].p.y,40,0,2*Math.PI,true);
		ctx.stroke();
		ctx.closePath();
	};
	var lines = [ {p1:{x:150,y:70},p2:{x:200,y:70}},
	{p1:{x:300,y:70},p2:{x:350,y:70}},
	{p1:{x:445,y:80},p2:{x:465,y:95}},
	{p1:{x:465,y:165},p2:{x:450,y:180}},
	{p1:{x:375,y:220},p2:{x:343,y:220}},
	{p1:{x:255,y:220},p2:{x:223,y:220}},
	];
	for (var j = 0; j < lines.length; j++) {
		ctx.beginPath();
		ctx.moveTo(lines[j].p1.x,lines[j].p1.y);
		ctx.lineTo(lines[j].p2.x,lines[j].p2.y);
		ctx.stroke();
		ctx.closePath();
	};
})

$(document).ready(function() {
	var all = false;

	$('#spring, #fall, #summer').click(function(event) {
		// width !== 0 means not uncover
		if (!$(this).find('.season_text').width() || all) {
			$(this).find('.season_text').css('display', 'block').animate({
				width: $(this).width() - parseInt($(this).find('.season_text').css('padding-left')) - parseInt($(this).find('.season_text').css('padding-right')) + 'px',
				height: $(this).height() - parseInt($(this).find('.season_text').css('padding-top')) * 2 + 'px',
				opacity: 1,
			}, 300);
		} else {
			$(this).find('.season_text').animate({
				width: 0,
				height: 0,
				opacity: 0,
			}, 300, function() {
				setTimeout(function() {
					$(event.target).css('display', 'none');
				}, 300);
			});
		}
	});

	$('#season_summary a').click(function(event) {
		event.preventDefault();
		all = true;
		$('#spring, #fall, #summer').click();
		all = false;
	});	

});