<?php  
	header('Content-Type:text/html;charset:utf-8');
	//获取一共有多少文章，用于显示
	$conn = mysqli_connect( 'bdm262229207.my3w.com','bdm262229207','woaishuxue123456','bdm262229207_db' ) or die('服务器链接失败');
	mysqli_query($conn,'set names utf8');
	mysqli_select_db( $conn , 'bdm262229207_db' ) or die( '传到页面数据库链接失败' );
	$get_num = "SELECT COUNT(id) AS icount FROM pages";//获取一共有多少篇文章
	$icount = mysqli_query($conn,$get_num) or die('语句出错');
	$yuju = 'SELECT head FROM pages WHERE id = $icount';
	$new = mysqli_query($conn,$yuju) or die('语句出错');
	echo $new;
?>





	