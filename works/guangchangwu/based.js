window.onload=function(){
	
	//播放键效果
	var star1=document.getElementsByClassName('star')[0];					//获取到音乐播放键
	var star2=document.getElementsByClassName('star')[1];					//获取到视频播放键
	var music_area=document.getElementById('music_area');
																							
	star1.addEventListener('click',function(evt){
			var e = evt || window.evt;
			e.stopPropagation();																//阻止事件扩散（冒泡、捕获）
			this.style.display = 'none';
			this.parentNode.className = 'revolve_animation';
			 music_area.animationPlayState="running";
			window.open( "http://music.163.com/#/search/m/?s=%E5%B9%BF%E5%9C%BA%E8%88%9E&type=1") 
	});
	
	star2.addEventListener('click',function(){
			this.style.display = 'none';
			window.open('http://www.youku.com');
	});
	
	
	music_area.addEventListener('click',function(){
		star1.style.display = 'block';
		this.style.animationPlayState="paused";
	
	});
	 
	//播放键效果结束
	
	//二维码效果(用JQ的淡入淡出效果)
	var $erweima=$('#erweima');
	var $about_us=$('#about_us');
	$about_us.mouseenter(function(){
		$erweima.fadeIn();
	});
	$about_us.mouseleave(function(){
		$erweima.fadeOut();
	});
	/* $about_us.click(function(){												//点击固定二维码
		$erweima.css('display','block');
	}); */
	//二维码效果结束
	
	//底白线效果
	var $user = $('nav p');
	for(var i = 0 ; i < $user.length ; i++){
		$user.eq(i).mouseenter(function(){
			$(this).css('border-bottom','solid 3px #E0FFFF');
		});
		$user.eq(i).mouseleave(function(){
			$(this).css('border-bottom','none');
		});
	};
	//底白线效果结束
	
	//个人资料效果
	var $i_information=$('#i_information');
	var $information=$('nav p').eq(0);
	var times = 1;														//统计times-1就可以获取用户点击了多少次
	$information.click(function(){
		if(times % 2){													//除2有余为真
			$i_information.fadeIn();
			times++;
		}else{
			$i_information.fadeOut();
			times++;
		}
	});
	
	
	
	//个人资料效果结束
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}