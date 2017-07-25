window.onload = function(){
	
	/* (function(){
		//设置一个重复定时函数，一秒检测一次高度，判断滚轮高度与页面视野高度的大小，回到顶部按钮做相应变化
		 setInterval(function(){
			var body_height = window.innerHeight || document.documentElement.clientHeight ;					//获取视野区域高度,需要兼容IE
			var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;				//获取滚轮滚动高度，需要兼容IE
			if( scroll_top >= body_height){
			document.getElementById('back_to_top').style.display = 'block';
		}else{
			document.getElementById('back_to_top').style.display = 'none';
		};
		},500) 
		
	})(); */
	//上边的这种方法不好，改版方法为检测是否有滚轮事件，有滚轮事件再检测是否大于视野高度，大于视野高度出现图标
	//改版检测如下
	(function(){
		window.onscroll = function(){																									//滚轮滚动，事件触发
			var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;		//获取滚轮高度，兼容IE
			var body_height = window.innerHeight || document.documentElement.clientHeight;			//获取视野高度，兼容IE
			if( scroll_top >= body_height){		
				document.getElementById('back_to_top').style.display = 'block';
			}else{
				document.getElementById('back_to_top').style.display = 'none';
			};
		}	
	})();
	
	
	
	
	
	/*以下为头部效果*/
	(function(){
		var img_first = document.getElementsByTagName('img')[0];		//获取头像图片
		
		
		img_first.addEventListener('mouseover' , function(){
			this.src = 'images/head3.jpg'
		});  
		img_first.addEventListener('mouseout' , function(){
			this.src = 'images/head4.jpg'
		}); 
		 
		
	})();
	
	
	/*恐龙效果*/
	
	(function(){
		
		/* function hasClass(obj, cls) { 										//判断是否有该样式

			return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')); 

		}
		
		function removeClass(obj, cls) { 								//移出选定样式

			if (hasClass(obj, cls)) { 

				var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)'); 

				obj.className = obj.className.replace(reg, ' '); 

			} 

		} */
		
		
		
		
		var monster = document . getElementsByClassName('monster');
		//var on_off1 = [1,1,1,1];							//移入启动开关
		for( var i = 0 ; i < monster.length ; i++){
			monster[i].index = i ;
			monster[i].addEventListener('click',function(){
				//on_off1[this.index] = 0;
				this.className = 'monster';
				//document.getElementsByClassName('water')[this.index].className = 'water';
				document.getElementsByClassName('hide_information')[this.index].style.display = 'block';
			});
			
		}
		
	})();
	
	/*背景音乐*/
	(function(){
		var bg_music = document.getElementById("bg_music");
		var add = 0;   								//计算点击次数，奇数背景音乐出来，偶数消失
		var num = 0;								//判断是否先打开过音乐，打开过则移入返回顶部键弹出音乐框，没有则不弹出
		document.getElementById("music").addEventListener("click",function(){
			num = 1 ;
			if( add%2 !== 0 ){
				bg_music.style.left = -2000+'px';
				add++;
			}else{
				bg_music.style.left = 0 ;
				add++;
			}
			
		});
		bg_music.addEventListener("mouseout",function(){
			this.style.left = -2000+'px'
		});
		bg_music.addEventListener("mouseover",function(){
			add = 0;
		});
		document.getElementById('back_to_top').addEventListener("mouseover",function(){
			if(num){
				bg_music.style.left = 0 ;
			}
			
		});
		document.getElementById('back_to_top').addEventListener("click",function(){
			bg_music.style.left = -2000+'px' ;
		});
		
		
	})();
	
	(function(){
		var build1 = document.getElementById('build1');
		var build2 = document.getElementById('build2');
		build1.onclick = function(){
			alert('对不起，邮箱系统正在建设中W(￣_￣)W，暂时邮到iyoloyolo@163.com吧~');
		};
		build2.onclick = function(){
			alert('对不起，电话系统正在建设中(⊙︿⊙)，请自行拨打17380675818吧~');
		}
		
	})();
	
	/*以下书写收缩单个内容框代码*/
	( function(){
		var arrow_up = document.getElementsByClassName('arrow_up');
		
		for( var i = 0 ; i < arrow_up.length ; i++){
			arrow_up[i].index = i ;
			
			arrow_up[i].addEventListener('click',function(){
				document.getElementsByClassName('hide_information')[this.index].style.display = 'none';
			})
		}
	})();
	
	
	
	
	
	
	
	
	
	
	
	
}


























































