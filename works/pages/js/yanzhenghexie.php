<?php  
	header('Content-Type:text/html;charset:utf-8');
	//要为点击send且send值为登录才能登录进来
	if( !isset($_POST['send']) || $_POST['send'] != 'denglu'){
		header('Location:login.php');
		exit;
	}
	//开始验证
	$user = $_POST['user'];
	$password = $_POST['password'];
	if( $user != 'luoxuexi' || $password !='woaishuxue123456' ){
		header('Location:login.php');
		exit;
	}else{
		//header('Location:write_page.php?id=250');
		//exit;
		echo "<form method='post' action='charudaosql.php'>
				<label>head:<input type='text' name='head'></label><br/>
				<label>first_par:<textarea name='first' style='width:300px;height:150px'></textarea></label><br/>
				<label>second_par:<textarea name='second' style='width:300px;height:150px'></textarea></label><br/>
				<label>third_par:<textarea name='third' style='width:300px;height:150px'></textarea></label>
				<input type='submit' name='fasong' value='fasong''>
			</form>";
		
	}


?>