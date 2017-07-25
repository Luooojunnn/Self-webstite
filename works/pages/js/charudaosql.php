<?php  
	header('Content-Type:text/html;charset:utf-8');
	if( !isset($_POST['fasong']) || $_POST['fasong'] != 'fasong'){
		header('Location:login.php');
		exit;
	}

	$head = $_POST['head'];
	$first = $_POST['first'];
	$second = $_POST['second'];
	$third = $_POST['third'];
	
	//操作存入到sql
	if( !empty($head) && !empty($first) && !empty($second) && !empty($third)  ){
		$conn = mysqli_connect( 'bdm262229207.my3w.com','bdm262229207','woaishuxue123456','bdm262229207_db' ) or die('服务器链接失败');
		mysqli_query($conn,'set names utf8');
		mysqli_select_db( $conn , 'bdm262229207_db' ) or die( '数据库链接失败' );
		$sert_head = "INSERT INTO pages(head,first,second,third) VALUES ('$head','$first','$second','$third')";
		mysqli_query($conn,$sert_head);
		mysqli_close($conn);
		echo '完成写作';
	}else{
		echo "<script>alert('必须写满三段式')</script>";
		header('location:login.php');
	}
	

	

		

?>