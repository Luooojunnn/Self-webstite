window.onload = function(){

	/****************************************************开始创建xmlhttprequest***************************/
	function createXMLHttp(){
		if( typeof XMLHttpRequest != 'undefined' ){
			return new XMLHttpRequest();
		}else if( typeof ActiveXObject != 'undefined' ){
			var version = [ 'MSXML2.XMLHttp.6.0' ,
									'MSXML2.XMLHttp.3.0',
									'MSXML2.XMLHttp'
			];
			for( var i = 0 ; i < version.length ; i++ ){
				try{
					return new ActiveXObject(version[i]);
				}catch(e){
					//往下判断
				}
			}
		}else{ throw new Error('浏览器版本太低，赶紧升级'); }
	}
	/****************************************************完成创建xmlhttprequest***************************/
	var rizi_num = 1;	//篇数
	
	/****************************************************初始化第一篇文章**********************************/
	var domGet = ['hh','ff','ss','tt'];//方便后边的节点获取操作
	
	var xmlhttp = createXMLHttp();//调用ajax请求
		xmlhttp.onreadystatechange = function(){
			if( xmlhttp.readyState == 4 ){
				if( xmlhttp.status == 200 ){
					var arr = [];
					arr = (xmlhttp.responseText).split('&');
					for( var i = 0 ; i < domGet.length ; i++ ){
						document.getElementById(domGet[i]).innerHTML = arr[i];
					}
					document.getElementById('now').innerHTML = arr[0];
					//document.getElementsByTagName('a')[0].innerHTML = arr[0];
				}else{
					alert('虚拟机数据库连接不上，初始化文章失败');
				}
			}
		}
		xmlhttp.open('get','chuandaoyemian.php?page='+rizi_num,true);
		xmlhttp.send();
	/****************************************************初始化第一篇文章完成********************************/
	
	var next = document.getElementById('next');//下一篇
	var back = document.getElementById('back');//上一篇
	
	/********************************************点击下一篇，进行下一篇内容获取***************************/
	next.addEventListener('click',function(){
		rizi_num += 1;
		var xmlhttp = createXMLHttp();//调用ajax请求
		xmlhttp.onreadystatechange = function(){
			if( xmlhttp.readyState == 4 ){
				if( xmlhttp.status == 200 ){
					var arr = [];
					arr = (xmlhttp.responseText).split('&');
					if( typeof arr[1] == 'undefined'){
						alert('end');
						rizi_num -= 1;
					}else{
						for( var i = 0 ; i < domGet.length ; i++ ){
							document.getElementById(domGet[i]).innerHTML = arr[i];
					}
					document.getElementById('now').innerHTML = arr[0];
						//document.getElementsByTagName('a')[0].innerHTML = arr[0];
					}
				}else{
					alert('获取下一篇失败');
				}
			}
		}
		xmlhttp.open('get','chuandaoyemian.php?page='+rizi_num,true);
		xmlhttp.send();
	})
	
	/******************************************点击下一篇，进行下一篇内容获取完成***************************/	
	
	/******************************************点击上一篇，进行上一篇内容获取********************************/	
	
	back.addEventListener('click',function(){
		rizi_num = rizi_num - 1;
		var xmlhttp = createXMLHttp();//调用ajax请求
		xmlhttp.onreadystatechange = function(){
			if( xmlhttp.readyState == 4 ){
				if( xmlhttp.status == 200 ){
					var arr = [];
					arr = (xmlhttp.responseText).split('&');
					if( typeof arr[1] == 'undefined' ){
						alert('first');
						rizi_num +=1;
					}else{
						for( var i = 0 ; i < domGet.length ; i++ ){
							document.getElementById(domGet[i]).innerHTML = arr[i];
						}
						document.getElementById('now').innerHTML = arr[0];
						//document.getElementsByTagName('a')[0].innerHTML = arr[0];
					}
				}else{
					alert('获取上一篇失败');
				}
			}
		}
		xmlhttp.open('get','chuandaoyemian.php?page='+rizi_num,true);
		xmlhttp.send();
	})
	
	/****************************************点击上一篇，进行上一篇内容获取完成********************************/	
	
	/****************************************设置cookie********************************/
	//cookie保存当前日期
	var cookieDate = new Date();
	cookieDate.setHours(cookieDate.getHours()+16);
	var cookieMonth = new Date();
	cookieMonth.setMonth(cookieMonth.getMonth()+1);
	//console.log(typeof document.cookie)取出的cookie是字符串形式的返回
	document.cookie = "date="+(new Date().getDate())+";expires="+cookieDate;//日期
	document.cookie = "month="+(new Date().getMonth()+1)+";expires="+cookieMonth;//月份
	//取出cookie分割给变量
	var allCookie = document.cookie;
	var allCookie2 = allCookie.split(';');
	//console.log(allCookie2)返回一个数组
	
	/****************************************设置cookie********************************/
	
	/****************************************日历小效果********************************/	
	function rili(){
		var calendar = document.getElementsByClassName('calendar')[0];
		var calendarGood = calendar.getElementsByTagName('h3')[0];//宜
		var calendarBad = calendar.getElementsByTagName('h3')[1];//忌
		var mothGood = calendar.getElementsByTagName('span');//每日宜事情描述
		var strong = calendar.getElementsByTagName('strong');//宜做啥
		
		//1到12月的宜和忌
		var things = ['写单元测试','洗澡','锻炼一下身体','抽烟','白天上线','重构','使用原生','跳槽','招人','面试','提交辞职申请','申请加薪','在妹子面前吹牛','撸管','浏览成人网站','命名变量every',"写超过千行的方法","提交代码", "遇到冲突的几率","代码复审",  "开会","打LOL","晚上上线","修复BUG","设计评审", "需求评审","上微博","上AB站","玩王者农药"];
		var good = [
			"写单元测试将减少出错",
			"你几天没洗澡了？",
			"今天锻炼出第八快腹肌",
			"抽烟有利于提神",
			 "今天白天上线是安全的",
			"代码质量得到提高",
			"你看起来更有品位",
			 "该放手时就放手",
			"你面前这位有成为牛人的潜质",
			"面试官今天心情很好",
			 "公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋",
			 "老板今天心情很好", 
			"晚上是程序员精神最好的时候",
			"改善你矮穷挫的形象", 
			 "避免缓冲区溢出",
			"重拾对生活的信心", 
			 "同事会认为你很高端", 
			 "你的代码组织的很好，长一点没关系", 
			 "遇到冲突的几率是最低的", 
			 "发现重要问题的几率大大增加", 
			"写代码之余放松一下打个盹，有益健康", 
			"你将有如神助", 
			"晚上是程序员精神最好的时候",
			"你今天对BUG的嗅觉大大提高", 
			 "设计评审会议将变成头脑风暴", 
			"一次就评审过啦", 
			"今天发生的事不能错过",
			 "还需要理由吗？",
			"今天破纪录的几率很高"
		];
		var bad = [
			 "写单元测试会降低你的开发效率",
			"会把设计方面的灵感洗掉",
			"能量没消耗多少，吃得却更多",
			"除非你活够了，死得早点没关系",
			 "可能导致灾难性后果",
			 "你很有可能会陷入泥潭",
			"别人会觉得你在装逼",
			"鉴于当前的经济形势，你的下一份工作未必比现在强",
			"这人会写程序吗？",
			"面试官不爽，会拿你出气",
			"鉴于当前的经济形势，你的下一份工作未必比现在强",
			"公司正在考虑裁员",
			"你被基友打脸",
			"会被识破",
			"强撸灰飞烟灭",
			 "你会心神不宁",
			"你会过一会儿就看不懂自己的代码了",
			"你的代码将混乱不堪，你自己都看不懂",
			 "你遇到的一大堆冲突会让你觉得自己是不是时间穿越了",
			"你什么问题都发现不了，白白浪费时间",
			 "小心被扣屎盆子背黑锅",
			"你会被虐的很惨",
			"你白天已经筋疲力尽了",
			"新产生的BUG将比修复的更多",
			 "人人筋疲力尽，评审就这么过了",
			 "会被吐槽",
			 "今天的微博充满负能量",
			"满屏兄贵亮瞎你的眼",
			"除非你想玩到把手机砸了"
		]
		//函数获取当前月份，初始化
		calendar.getElementsByTagName('li')[new Date().getMonth()].className = "active";
		calendarGood.innerHTML = calendar.getElementsByTagName('li')[new Date().getMonth()].innerHTML+'宜:';
		calendarBad.innerHTML = '忌:';
		var monthCompare = ' month='+(new Date().getMonth()+1);//获取当前月份与cookie中对比(空格超重要)
		var dateCompare = ' date='+(new Date().getDate());//日期与cookie中对比
		var getMonRandom = new Date().getMonth()+1;
		if( monthCompare !== allCookie2[7] ){
			getMonRandom = Math.floor(Math.random()*things.length);
			document.cookie = "month="+(new Date().getMonth()+1)+";expires="+cookieMonth;//月份
		} 
		strong[0].innerHTML = things[getMonRandom];//初始月的事
		document.getElementById('date').innerHTML = new Date().getDate()+'日宜:';
		//每日宜
		
		if( dateCompare !== allCookie2[6] ){
			var  random_fou = [];
				while(random_fou.length<6){
					var randomAdd = Math.floor(Math.random()*things.length);
					for( var i = 0;i < 6; i++ ){
						if( random_fou[i] == randomAdd ){
							return false;//如果执行到这一语句，那么下边的push都不会生效，while进行重新的一次判断执行
						}
					}
					random_fou.push(randomAdd);
				}
				var docuCook = ["one=","two=","three=","four=","five=","six="]
				for( var j = 0; j < 6; j++ ){
					document.cookie = docuCook[j]+random_fou[j]+";expires="+cookieDate;
					strong[j+1].innerHTML = things[random_fou[j]];
				}	
		}else{
			for( var k = 0 ; k < 6;k++ ){
				strong[k+1].innerHTML = things[parseInt(allCookie2[k].split('=')[1])];
				if(k<3){
					mothGood[k].innerHTML = good[parseInt(allCookie2[k].split('=')[1])];
				}else{
					mothGood[k].innerHTML = bad[parseInt(allCookie2[k].split('=')[1])];
				}
				
			}
		}
		console.log(allCookie2);
		
		var calendarLi = calendar.getElementsByTagName('li');
		for(var i = 0; i < calendar.getElementsByTagName('li').length; i++){
			calendarLi[i].onmouseover = function(){
				for(var i = 0; i < calendarLi.length; i++){
					calendarLi[i].className = "";
				}
				this.className = "active2";
				calendarLi[new Date().getMonth()].className = "active";
				calendarGood.innerHTML = this.innerHTML+'宜:';
				if( this != calendarLi[new Date().getMonth()] ){
					strong[0].innerHTML = things[Math.floor(Math.random()*things.length)];
				}
			}
			calendarLi[i].onmouseout = function(){
				for(var i = 0; i < calendarLi.length; i++){
					calendarLi[i].className = "";
				}
				calendarLi[new Date().getMonth()].className = "active";
				calendarGood.innerHTML = calendarLi[new Date().getMonth()].innerHTML+'宜:';
				strong[0].innerHTML = things[new Date().getMonth()+1];
			}
		}		
	}
	rili();

	
	
	/****************************************日历小效果********************************/



}






