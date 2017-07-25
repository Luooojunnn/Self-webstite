<?php  
	header('Content-Type:text/html;charset:utf-8');
	//从sql里抓取数据出来
	$page = $_GET['page'];
	//echo '阿里云虚拟机数据库连接不上，过两天再弄';

	if( isset($_GET['page']) && !empty($_GET['page']) ){
		$conn = mysqli_connect( 'bdm262229207.my3w.com','bdm262229207','woaishuxue123456','bdm262229207_db' ) or die('服务器链接失败');
		mysqli_query($conn,'set names utf8');
		mysqli_select_db( $conn , 'bdm262229207_db' ) or die( '传到页面数据库链接失败' );
		$get_page = "SELECT * FROM pages WHERE id = $page";
		$result = mysqli_query($conn,$get_page) or die('语句出错');
		while( !!$row = mysqli_fetch_array($result) ){
			echo $row['head'].'&'.$row['first'].'&'.$row['second'].'&'.$row['third'];
		}
	}







?>