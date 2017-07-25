$(function(){
	
	
	//初始化随机背景图
	var initial_image = Math.floor(Math.random()*30+1);
	var initial_str = 'url(introductionForWeb/images/p'+initial_image+'.jpg)';
	$('.bg_image').css('backgroundImage',initial_str);

	var key = true;//禁止快速多次点击换背景按钮
	$('#change_bgimage').click( function(){
		if( key == true ){
			key = false;
			var images = Math.floor(Math.random()*30+1);
			var str = 'url(introductionForWeb/images/p'+images+'.jpg)';//获取随机图片，以便于下次淡入(因为.css()是改变的行内样式，所以路径就需要特别特别注意！！)
		//console.log( str );
		//扩张形淡入淡出
		var expand = function(){
			$('.bg_image').animate( {
			height:140+'%',
			opacity:0.2
		},1000,'linear',function(){
			$(this).css('backgroundImage',str)
		}).animate({
			height:100+'%',
			opacity:1
		},1000,'linear',function(){
			key = true;
		})
		}

		//直接slide行淡入淡出
		var slide = function(){
			$('.bg_image').slideUp(1000,function(){
				$('.bg_image').css('backgroundImage',str);
			}).slideDown(1000,function(){
				key = true;
			});
		}

		//直接淡入淡出
		var fade = function(){
			$('.bg_image').animate({
				opacity:0.2
			},1000,'linear',function(){
				$(this).css('backgroundImage',str)
			}).animate({
				opacity:1
			},1000,'linear',function(){
				key = true;
		})
		}



		//随机获取淡入淡出方式(比例是2:2:1)
		var random = Math.floor( Math.random()*9 );

		//如果是slide方式，则给body添加背景图
		if( random >= 8 ){
			$('body').css( 'backgroundImage','url(introductionForWeb/images/p31.jpg)' )
		}else{
			$('body').css( 'backgroundImage','none' )
		}

		switch( random ){
			case 0: 
			case 1:
			case 2:
			case 3: expand();
			break;
			case 4:
			case 5:
			case 6:
			case 7: fade();
			break;
			case 8:
			case 9: slide();
			break;
		}
		}
	})
	
	//开始设置点击关闭，收缩框体
	var num = 0;	//判断到底应该外下放还是往上收缩
		$('.shrink').eq(0).click(function(){
			if( num == 0 ){
				$('.main').animate({
					margin:'2% auto',
					width:'45%',
					height:'40px'
				},600);
				setTimeout(function(){
					$('.shrink').animate({
						top:'20%'
					},599,'linear',function(){
						$('.shrink').css('transform','rotate(180deg)');
					});
					$('.main_shrink').animate({
						opacity:0
					},599,'linear',function(){
						$(this).css('display','none');
					});
				},1);
				num++;			//num=1
			}else if( num == 1 ){
				//$('.main').removeAttr('style');
				$('.main').animate({
					margin:'13% auto',
					width:'35%',
					height:'215px'
				},600);
				setTimeout(function(){
					$('.main_shrink').css('display','block');
					$('.shrink').animate({
						top:'2%'
					},599,'linear',function(){
						$('.shrink').css('transform','rotate(360deg)');
					});
					$('.main_shrink').animate({
						opacity:1
					},599);
				},1);
				num--;
			}
		})
		
		console.log('本人使用1366的图，对网络较差的用户可能不友好了，抱歉');
})











