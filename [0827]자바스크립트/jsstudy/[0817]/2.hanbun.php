<?php
// php는 서버사이드 프로그램 언어 할때 
// (asp,php,jsp)가 3대 웹 서버 프로그램이었음
// 상대적으로 html을 정적언어라고도 부름
// .은 php에서 문자열 더하기, echo는 출력문이다.
// 서버프로그램은 실행결과 HTML형식의 파일을 만들어서
// 클라이언트에게 보내준다.
echo $_GET["aaa"]."<br>" ;
echo $_GET["zzz"]."<br>" ;
echo "<h1>".$_POST["bbb"]."</h1><br>";
echo "<h1>".$_POST["yyy"]."</h1><br>";
?>
<h1>서버에서 만들었어요.</h1>