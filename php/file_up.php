<!DOCTYPE html>
<html lang="ja">
<meta charset="UTF-8">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>



<meta http-equiv="Refresh" content="0.1; URL=../index.html">
    
<?php 
  //ファイルの保存先
  $upload = '../img/'.$_FILES['file_input']['name']; 
  //アップロードが正しく完了したかチェック
  if(move_uploaded_file($_FILES['file_input']['tmp_name'], $upload)){
    echo 'アップロード完了 自動的に元のページに戻ります';

  }else{
    echo 'アップロード失敗　自動的に元のページに戻ります';
  }
?>
<script>
    let tmpKey = "filePath";
    localStorage.setItem(tmpKey, "<?=$upload?>")
</script> 
</body>



