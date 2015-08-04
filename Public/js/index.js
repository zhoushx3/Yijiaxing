// $(document).ready(function() {
// 	$('#triangle div').css('left', $("a.active").index() * 140 + 60+ 'px');
// 	$(".header a").mouseenter(function() {
// 		var index = $("a").index(this);
// 		var offset = 60 + 140 * index;
//     $("#triangle div").stop()
//     .animate({
//     	left: offset + "px"
//     }, "300");
// });

// 	$("a").mouseleave(function() {
// 		$('#triangle div').stop().animate({
// 			left: $("a.active").index() * 140 + 60 + 'px'
// 		}, "300");
// 	});

// });

// $(document).ready(function(){

// 	var isDone = false;
// 	var isClick = false;
// 	var isF5 = true;
// 	var currPos = 0;
// 	var prePos = 0;
// 	prePos = $(document).scrollTop();
// 	$("body").animate({
// 					scrollTop : 0,
// 				},"1000",function(){
// 					//settimeout
// 					setTimeout(function(){
// 						isF5 = false;
// 					},200);
// 				});
// 	$(window).scroll(function(){
// 		if(isClick || isF5) return;
// 		var imgH = $('.banner img').eq(0).height();
// 		var firstImgOffset = $('.banner img').offset().top;
// 		var lastImgOffset = $('.banner img:last').offset().top ;
// 		currPos = $(document).scrollTop();
// 		winH = $(window).height();
// 		if(currPos>prePos){
// 			prePos = currPos;
// 			if((currPos + winH) < firstImgOffset){
// 				return;
// 			}else if((currPos + winH) > firstImgOffset && !isDone ){

// 				var index =Math.floor(( currPos- firstImgOffset) /imgH+1);
// 				$('.dots').css('display','inline');
// 				if(index > 4){
// 					$('.dots').css('display','none');
// 					isDone = false;
// 					return;
// 				};
// 				if(index ==4)
// 					$('.dots').css('display','none');
// 				isDone = true;
// 				$('.dots .active').removeClass('active');
// 				$('.dots li').eq(index).addClass('active');
// 				$("body").animate({
// 					scrollTop : firstImgOffset+index*imgH,
// 				},"1000",function(){
// 					setTimeout(function(){
// 						isDone = false;
// 					},200);
// 				});
// $('.inner').animate({
// 	top: "25%",
// 	opacity: 0
// }, 'fast');
// $(".inner").eq(index).animate({
// 	top: "23%",
// 	opacity: 1
// }, 700);
// if (index == 1) {
// 	$('.dots li').css('border-color', '#e5e5e5');
// 	$('.dots li').eq(1).css('background', '#e5e5e5');
// }
// else {
// 	$('.dots li').css('border-color', '#ffffff');
// 	$('.dots li').eq(1).css('background', 'none');
// }
// 				return;
// 			}else ;
// 		}else{
// 			prePos = currPos;
// 			if(currPos < lastImgOffset + imgH && !isDone){
// 				index = Math.floor((currPos - firstImgOffset) / imgH);
// 				if (index < -1) {
// 					$('.dots').css('display','none');
// 					isDone = false;
// 					return;
// 				};
// 				isDone = true;
// 				$('.dots .active').removeClass('active');
// 				$('.dots').css('display','inline');
// 				if(index == -1)
// 					$('.dots').css('display','none');
// 				$('.dots li').eq(index).addClass('active');
// 				$('body').animate({
// 					scrollTop: firstImgOffset + index * imgH,
// 				},"1000",function(){
// 					setTimeout(function(){
// 						isDone = false;
// 					},200);
// 				});
// $('.inner').animate({
// 	top: "25%",
// 	opacity: 0
// }, 'fast');
// $(".inner").eq(index).animate({
// 	top: "23%",
// 	opacity: 1
// }, 700);
// if (index == 1) {
// 	$('.dots li').css('border-color', '#e5e5e5');
// 	$('.dots li').eq(1).css('background', '#e5e5e5');
// }
// else {
// 	$('.dots li').css('border-color', '#ffffff');
// 	$('.dots li').eq(1).css('background', 'none');
// }
// 			} else {}
// 		}
// 	})
// 	$('.dot').click(function(){
// 		isClick = true;
// 		var index = $(this).index();
// 		$('body').animate({
// 			scrollTop: $('.banner img').offset().top + index * $('.banner img').eq(0).height(),
// 		},'1000',function(){
// 			$('.dots .active').removeClass('active');
// 			$('.dots li').eq(index).addClass('active');
// $('.inner').animate({
// 	top: "25%",
// 	opacity: 0
// }, 'fast');
// $(".inner").eq(index).animate({
// 	top: "23%",
// 	opacity: 1
// }, 700);
// if (index == 1) {
// 	$('.dots li').css('border-color', '#e5e5e5');
// 	$('.dots li').eq(1).css('background', '#e5e5e5');
// }
// else {
// 	$('.dots li').css('border-color', '#ffffff');
// 	$('.dots li').eq(1).css('background', 'none');
// }
// 			setTimeout(function(){
// 				isClick  =  false;
// 			},200);
// 		})
// 	});
// });
$(function(){
	$('#nextPage').on('click', function(){
		$('#page1').slideUp(500,'swing');
	});
	// 常见问题：面板伸缩时修改
	$('.am-panel h4').on('click', function(){
		$(this).toggleClass('up');
	});
	// 常见问题：回到顶部
	$(document).scroll(function(e){
		if ($(document).scrollTop() == 0)
			$('.toTop').css('display', 'none');
		else
			$('.toTop').css('display', 'block');
	});
	// 益行纪录
	$('.container h3 span').click(function(){
		var index = $(this).index();
		var n = $(this).parent().parent().index('.container');
		if (index%2==0) {
			$('.container').eq(n).removeClass('show');
			$('.container').eq(n == 0? 2 : n - 1).addClass('show');
		} else {
			$('.container').eq(n).removeClass('show');
			$('.container').eq(n == 2? 0 : n + 1).addClass('show');
		}
	});
});
